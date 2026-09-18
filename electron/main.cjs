const { app, BrowserWindow, ipcMain, dialog, shell } = require("electron");
const fs = require("fs");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1480,
    height: 940,
    minWidth: 1100,
    minHeight: 720,
    backgroundColor: "#0b1020",
    show: false,
    title: "Parin MindMap",
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "../src/index.html"));
  mainWindow.once("ready-to-show", () => mainWindow.show());
}

function sanitizeName(name) {
  return String(name || "Parin-MindMap")
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
    .slice(0, 100);
}

ipcMain.handle("dialog:save-json", async (_event, payload) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    title: "Save Parin MindMap",
    defaultPath: path.join(app.getPath("documents"), sanitizeName(payload?.title) + ".parinmap"),
    filters: [{ name: "Parin MindMap", extensions: ["parinmap"] }, { name: "JSON", extensions: ["json"] }]
  });
  if (result.canceled || !result.filePath) return { canceled: true };
  fs.writeFileSync(result.filePath, JSON.stringify(payload?.data ?? {}, null, 2), "utf8");
  return { canceled: false, filePath: result.filePath };
});

ipcMain.handle("dialog:open-json", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "Open Parin MindMap",
    properties: ["openFile"],
    filters: [{ name: "Parin MindMap", extensions: ["parinmap", "json"] }, { name: "All Files", extensions: ["*"] }]
  });
  if (result.canceled || !result.filePaths?.[0]) return { canceled: true };
  const data = JSON.parse(fs.readFileSync(result.filePaths[0], "utf8"));
  return { canceled: false, filePath: result.filePaths[0], data };
});

ipcMain.handle("dialog:save-text", async (_event, payload) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    title: payload?.dialogTitle || "Export",
    defaultPath: path.join(app.getPath("documents"), sanitizeName(payload?.defaultName || "Parin-MindMap") + "." + (payload?.extension || "txt")),
    filters: [{ name: payload?.filterName || "File", extensions: [payload?.extension || "txt"] }]
  });
  if (result.canceled || !result.filePath) return { canceled: true };
  fs.writeFileSync(result.filePath, String(payload?.content || ""), "utf8");
  return { canceled: false, filePath: result.filePath };
});

ipcMain.handle("pdf:export", async (_event, payload) => {
  const tempWindow = new BrowserWindow({
    show: false,
    webPreferences: { sandbox: false }
  });

  const html = String(payload?.html || "");
  await tempWindow.loadURL("data:text/html;charset=utf-8," + encodeURIComponent(html));

  const pdf = await tempWindow.webContents.printToPDF({
    printBackground: payload?.printBackground !== false,
    landscape: Boolean(payload?.landscape),
    pageSize: payload?.pageSize || "A4",
    margins: payload?.margins || { top: 0.35, bottom: 0.35, left: 0.35, right: 0.35 },
    preferCSSPageSize: true
  });
  tempWindow.destroy();

  const result = await dialog.showSaveDialog(mainWindow, {
    title: "Export PDF",
    defaultPath: path.join(app.getPath("documents"), sanitizeName(payload?.title || "Parin-MindMap") + ".pdf"),
    filters: [{ name: "PDF", extensions: ["pdf"] }]
  });
  if (result.canceled || !result.filePath) return { canceled: true };
  fs.writeFileSync(result.filePath, pdf);
  return { canceled: false, filePath: result.filePath };
});

ipcMain.handle("app:open-external", async (_event, url) => {
  if (/^https?:/i.test(url)) await shell.openExternal(url);
  return true;
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});