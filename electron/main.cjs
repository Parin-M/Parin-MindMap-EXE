const { app, BrowserWindow, ipcMain, dialog, shell } = require("electron");
const fs = require("fs");
const path = require("path");
const { ensureLocalAI, ensureGemma, ensureHarrier, stopLocalAI, GEMMA_PORT, HARRIER_PORT } = require("./ai-local.cjs");

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


function requestAI(urlString, apiKey, body) {
  return new Promise((resolve, reject) => {
    const { URL } = require("url");
    const parsed = new URL(urlString);
    const transport = parsed.protocol === "https:" ? require("https") : require("http");
    const req = transport.request({
      method: "POST",
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === "https:" ? 443 : 80),
      path: parsed.pathname + parsed.search,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(apiKey ? { "Authorization": "Bearer " + apiKey } : {})
      },
      timeout: 120000
    }, (res) => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          const parsedBody = JSON.parse(data || "{}");
          if (res.statusCode >= 400) {
            reject(new Error(parsedBody?.error?.message || parsedBody?.message || ("HTTP " + res.statusCode)));
            return;
          }
          resolve(parsedBody);
        } catch {
          reject(new Error("AI endpoint returned invalid JSON."));
        }
      });
    });
    req.on("timeout", () => req.destroy(new Error("AI request timed out.")));
    req.on("error", reject);
    req.write(JSON.stringify(body));
    req.end();
  });
}

function cosineSimilarity(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length || !a.length) return 0;
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    const x = Number(a[i]) || 0;
    const y = Number(b[i]) || 0;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return na && nb ? dot / (Math.sqrt(na) * Math.sqrt(nb)) : 0;
}

ipcMain.handle("ai:request", async (_event, payload) => {
  const local = payload?.local !== false;
  const endpoint = String(payload?.endpoint || "").trim();
  const body = payload?.body && typeof payload.body === "object" ? payload.body : {};
  if (local) {
    await ensureGemma();
    return await requestAI("http://127.0.0.1:" + GEMMA_PORT + "/v1/chat/completions", "", body);
  }
  if (!endpoint) throw new Error("AI endpoint is not configured.");
  return await requestAI(endpoint, String(payload?.apiKey || "").trim(), body);
});

ipcMain.handle("ai:assist", async (_event, payload) => {
  const query = String(payload?.query || "").trim();
  if (!query) throw new Error("Assistant query is empty.");

  const local = payload?.local !== false;
  const contexts = Array.isArray(payload?.context) ? payload.context.slice(0, 120) : [];
  const selectedId = String(payload?.selectedId || "");
  const selectedLabel = String(payload?.selectedLabel || "");
  const language = String(payload?.language || "English");
  const forcePlan = Boolean(payload?.forcePlan);
  let ranked = contexts.slice(0, 10);

  if (local) {
    await ensureLocalAI();
    if (contexts.length) {
      try {
        await ensureHarrier();
        const inputs = contexts.map(x => [x.label, x.note, x.parentLabel, x.path].filter(Boolean).join(" — ").slice(0, 1200));
        const emb = await requestAI(
          "http://127.0.0.1:" + HARRIER_PORT + "/v1/embeddings",
          "",
          {model:"parin-harrier-memory",input:[query,...inputs]}
        );
        const q = emb?.data?.[0]?.embedding;
        if (Array.isArray(q)) {
          ranked = contexts.map((x,i)=>({...x,relevance:cosineSimilarity(q,emb?.data?.[i+1]?.embedding||[])}))
            .sort((a,b)=>(b.relevance||0)-(a.relevance||0)).slice(0,10);
        }
      } catch {
        ranked = contexts.slice()
          .sort((a,b)=>Number(b.id===selectedId)-Number(a.id===selectedId))
          .slice(0,10);
      }
    }
  }

  const contextBlock = ranked.map((x,i)=>
    "[Node "+(i+1)+"] id="+String(x.id||"")+"; label="+String(x.label||"")+"; note="+String(x.note||"")+"; parent="+String(x.parentLabel||"")
  ).join("\n");

  const system = "You are Parin Copilot, an embedded assistant inside a mind-map editor. You are NOT a generic chatbot. Interpret the user's workspace and help with the next useful step. Language: "+language+". Selected node: "+(selectedLabel||"none")+" ("+(selectedId||"none")+").\n\n"+
    "Rules:\n- Be concrete and task-oriented. No greetings or filler.\n- Treat the mind map as the primary workspace.\n- Never claim a map change happened unless the app applied an approved action.\n- For structural changes, return ONLY valid JSON of type agent_plan.\n- Keep plans minimal and safe; never delete the root.\n- For help/information, answer in at most 5 concise sentences.\n- Never invent sources or map facts."+
    (forcePlan ? "\n- Planning mode is forced: always return an agent_plan JSON." : "")+
    "\n\nAllowed action schema:\n{\"type\":\"agent_plan\",\"summary\":\"string\",\"actions\":[{\"op\":\"add_child|add_sibling|edit_node|delete_node|move_node|set_style|collapse_node|expand_node\",\"targetId\":\"id or null\",\"parentId\":\"id or null\",\"newParentId\":\"id or null\",\"label\":\"string\",\"note\":\"string\",\"color\":\"#RRGGBB\",\"priority\":\"normal|high|low\",\"reason\":\"brief\"}]}";

  const user = "User request:\n"+query+"\n\nRelevant semantic context:\n"+(contextBlock||"(none)")+"\n\nAct as the workspace assistant.";
  const endpoint = String(payload?.endpoint || "").trim();
  const key = String(payload?.apiKey || "").trim();
  const body = {
    model: local ? "parin-gemma3-assistant" : String(payload?.model || "assistant"),
    messages: [{role:"system",content:system},{role:"user",content:user}],
    temperature: forcePlan ? 0.08 : 0.22,
    max_tokens: forcePlan ? 900 : 450
  };

  const data = local
    ? await requestAI("http://127.0.0.1:" + GEMMA_PORT + "/v1/chat/completions", "", body)
    : (endpoint ? await requestAI(endpoint, key, body) : (()=>{ throw new Error("AI endpoint is not configured."); })());

  return {data,context:ranked.map(x=>({id:x.id,label:x.label,relevance:Number((x.relevance||0).toFixed(4))}))};
});

ipcMain.handle("app:open-external", async (_event, url) => {
  if (/^https?:/i.test(url)) await shell.openExternal(url);
  return true;
});

process.on("exit", () => { stopLocalAI(); });

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});