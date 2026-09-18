const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("parinAPI", {
  saveMindMap: (data) => ipcRenderer.invoke("dialog:save-json", data),
  openMindMap: () => ipcRenderer.invoke("dialog:open-json"),
  saveText: (data) => ipcRenderer.invoke("dialog:save-text", data),
  exportPDF: (data) => ipcRenderer.invoke("pdf:export", data),
  openExternal: (url) => ipcRenderer.invoke("app:open-external", url)
});