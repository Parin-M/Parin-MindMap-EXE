const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

let serverProcess = null;
let startPromise = null;
const PORT = 38741;

function runtimeRoot() {
  return process.resourcesPath && process.resourcesPath !== path.dirname(process.execPath)
    ? process.resourcesPath
    : path.join(__dirname, "../runtime");
}

function getPaths() {
  const root = runtimeRoot();
  return {
    exe: path.join(root, "ai", "llama-server.exe"),
    model: path.join(root, "ai", "models", "Ministral-3-3B-Instruct-2512-Q4_K_M.gguf"),
    notice: path.join(root, "ai", "ai-notice.txt")
  };
}

function isPackaged() {
  return Boolean(process.resourcesPath && fs.existsSync(path.join(process.resourcesPath, "ai")));
}

function healthCheck() {
  return new Promise((resolve) => {
    const http = require("http");
    const req = http.get("http://127.0.0.1:" + PORT + "/health", (res) => {
      res.resume();
      resolve(res.statusCode >= 200 && res.statusCode < 300);
    });
    req.setTimeout(1500, () => { req.destroy(); resolve(false); });
    req.on("error", () => resolve(false));
  });
}

async function waitForReady(timeoutMs=120000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await healthCheck()) return true;
    await new Promise(r => setTimeout(r, 750));
  }
  throw new Error("Local AI engine did not become ready.");
}

async function ensureLocalAI() {
  if (startPromise) return startPromise;
  startPromise = (async () => {
    const p = getPaths();
    if (!fs.existsSync(p.exe) || !fs.existsSync(p.model)) {
      startPromise = null;
      throw new Error(
        isPackaged()
          ? "The bundled local AI engine/model is missing from this installation."
          : "Local AI runtime is not installed in the development folder. Use the GitHub build workflow."
      );
    }
    if (!serverProcess || serverProcess.killed) {
      serverProcess = spawn(p.exe, [
        "--model", p.model,
        "--host", "127.0.0.1",
        "--port", String(PORT),
        "--alias", "parin-ministral-3b",
        "--ctx-size", "8192",
        "--threads", String(Math.max(2, Math.min(8, require("os").cpus().length))),
        "--n-gpu-layers", "0",
        "--metrics"
      ], {
        windowsHide: true,
        stdio: ["ignore", "pipe", "pipe"]
      });
      serverProcess.stdout.on("data", () => {});
      serverProcess.stderr.on("data", () => {});
      serverProcess.on("exit", () => {
        serverProcess = null;
        startPromise = null;
      });
    }
    await waitForReady();
    return "http://127.0.0.1:" + PORT;
  })();
  return startPromise;
}

function stopLocalAI() {
  if (serverProcess && !serverProcess.killed) {
    try { serverProcess.kill(); } catch {}
  }
  serverProcess = null;
  startPromise = null;
}

module.exports = { ensureLocalAI, stopLocalAI, getPaths, PORT };