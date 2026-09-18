const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

let gemmaProcess = null;
let harrierProcess = null;
let gemmaStartPromise = null;
let harrierStartPromise = null;

const GEMMA_PORT = 38741;
const HARRIER_PORT = 38742;
const GEMMA_MODEL = "Gemma3-1B-FP16-bnb-4bit-Q4_K_M.gguf";
const HARRIER_MODEL = "harrier-oss-v1-0.6b.Q4_K_M.gguf";

function isPackaged() {
  return Boolean(process.resourcesPath && fs.existsSync(path.join(process.resourcesPath, "ai")));
}

function getPaths() {
  const base = isPackaged() ? path.join(process.resourcesPath, "ai") : path.join(__dirname, "../runtime");
  return {
    gemmaExe: path.join(base, isPackaged() ? "llama-server.exe" : "llama/llama-server.exe"),
    gemmaModel: path.join(base, "models", GEMMA_MODEL),
    harrierExe: path.join(base, isPackaged() ? "llama-server.exe" : "llama/llama-server.exe"),
    harrierModel: path.join(base, "models", HARRIER_MODEL),
    notice: path.join(base, "ai-notice.txt")
  };
}

function healthCheck(port) {
  return new Promise((resolve) => {
    const http = require("http");
    const req = http.get("http://127.0.0.1:" + port + "/health", (res) => {
      res.resume();
      resolve(res.statusCode >= 200 && res.statusCode < 300);
    });
    req.setTimeout(1500, () => { req.destroy(); resolve(false); });
    req.on("error", () => resolve(false));
  });
}

async function waitForReady(port, timeoutMs = 120000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await healthCheck(port)) return true;
    await new Promise(r => setTimeout(r, 750));
  }
  throw new Error("Local AI service did not become ready on port " + port + ".");
}

function spawnServer(exe, model, port, extraArgs = []) {
  return spawn(exe, [
    "--model", model,
    "--host", "127.0.0.1",
    "--port", String(port),
    "--alias", port === GEMMA_PORT ? "parin-gemma3-assistant" : "parin-harrier-memory",
    ...extraArgs,
    "--ctx-size", port === GEMMA_PORT ? "8192" : "4096",
    "--threads", String(Math.max(2, Math.min(8, os.cpus().length))),
    "--n-gpu-layers", "0",
    "--metrics"
  ], {
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"]
  });
}

async function ensureGemma() {
  if (gemmaStartPromise) return gemmaStartPromise;
  gemmaStartPromise = (async () => {
    const p = getPaths();
    if (!fs.existsSync(p.gemmaExe) || !fs.existsSync(p.gemmaModel)) {
      gemmaStartPromise = null;
      throw new Error(isPackaged()
        ? "The bundled Gemma 3 assistant engine/model is missing from this installation."
        : "The local Gemma 3 runtime is not installed in the development folder.");
    }
    if (!gemmaProcess || gemmaProcess.killed) {
      gemmaProcess = spawnServer(p.gemmaExe, p.gemmaModel, GEMMA_PORT, ["--temp", "0.25"]);
      gemmaProcess.stdout.on("data", () => {});
      gemmaProcess.stderr.on("data", () => {});
      gemmaProcess.on("exit", () => {
        gemmaProcess = null;
        gemmaStartPromise = null;
      });
    }
    await waitForReady(GEMMA_PORT);
    return "http://127.0.0.1:" + GEMMA_PORT;
  })();
  return gemmaStartPromise;
}

async function ensureHarrier() {
  if (harrierStartPromise) return harrierStartPromise;
  harrierStartPromise = (async () => {
    const p = getPaths();
    if (!fs.existsSync(p.harrierExe) || !fs.existsSync(p.harrierModel)) {
      harrierStartPromise = null;
      throw new Error(isPackaged()
        ? "The bundled Harrier semantic-memory engine/model is missing from this installation."
        : "The local Harrier runtime is not installed in the development folder.");
    }
    if (!harrierProcess || harrierProcess.killed) {
      harrierProcess = spawnServer(p.harrierExe, p.harrierModel, HARRIER_PORT, [
        "--embedding",
        "--pooling", "last"
      ]);
      harrierProcess.stdout.on("data", () => {});
      harrierProcess.stderr.on("data", () => {});
      harrierProcess.on("exit", () => {
        harrierProcess = null;
        harrierStartPromise = null;
      });
    }
    await waitForReady(HARRIER_PORT);
    return "http://127.0.0.1:" + HARRIER_PORT;
  })();
  return harrierStartPromise;
}

async function ensureLocalAI() {
  await Promise.all([ensureGemma(), ensureHarrier()]);
  return "http://127.0.0.1:" + GEMMA_PORT;
}

function stopLocalAI() {
  for (const p of [gemmaProcess, harrierProcess]) {
    if (p && !p.killed) {
      try { p.kill(); } catch {}
    }
  }
  gemmaProcess = null;
  harrierProcess = null;
  gemmaStartPromise = null;
  harrierStartPromise = null;
}

module.exports = {
  ensureLocalAI, ensureGemma, ensureHarrier, stopLocalAI, getPaths,
  GEMMA_PORT, HARRIER_PORT, GEMMA_MODEL, HARRIER_MODEL
};
