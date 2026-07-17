"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Switch } from "@headlessui/react";

// Load Monaco Editor dynamically (no SSR)
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const STORAGE_KEY = "codeskipper_js_compiler_code";

const SNIPPETS = {
  basics: {
    label: "Basics — add()",
    code: `// Try JavaScript below
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));`,
  },
  arrays: {
    label: "Array methods",
    code: `const nums = [4, 8, 15, 16, 23, 42];

const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const total = nums.reduce((sum, n) => sum + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Total:", total);`,
  },
  fibonacci: {
    label: "Recursion — Fibonacci",
    code: `function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) =\`, fib(i));
}`,
  },
  promises: {
    label: "Async / Promises",
    code: `function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Starting...");
  await wait(500);
  console.log("500ms later — done!");
}

run();`,
  },
  errors: {
    label: "Error handling",
    code: `function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (err) {
  console.error(err.message);
}`,
  },
};

function formatValue(val) {
  if (typeof val === "string") return val;
  if (val instanceof Error) return val.stack || val.message;
  try {
    return JSON.stringify(val, null, 2);
  } catch {
    return String(val);
  }
}

export default function JSCompilerPage() {
  const [code, setCode] = useState(SNIPPETS.basics.code);
  const [logs, setLogs] = useState([]);
  const [theme, setTheme] = useState("vs-dark");
  const [layout, setLayout] = useState("horizontal");
  const [running, setRunning] = useState(false);
  const [execTime, setExecTime] = useState(null);
  const [snippet, setSnippet] = useState("basics");
  const [fullscreen, setFullscreen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });

  const editorRef = useRef(null);
  const outputRef = useRef(null);
  const isDark = theme === "vs-dark";

  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
      if (saved) setCode(saved);
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, []);

  useEffect(() => {
    if (logs.length && outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [logs]);

  const runCode = useCallback(() => {
    const collected = [];
    const push = (type) => (...args) => {
      collected.push({ type, text: args.map(formatValue).join(" "), time: new Date().toLocaleTimeString() });
    };
    const original = { log: console.log, warn: console.warn, error: console.error, info: console.info };

    console.log = push("log");
    console.warn = push("warn");
    console.error = push("error");
    console.info = push("info");

    const start = performance.now();
    setRunning(true);

    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(code);
      fn();
      if (collected.length === 0) {
        collected.push({ type: "success", text: "Code ran without output.", time: new Date().toLocaleTimeString() });
      }
    } catch (err) {
      collected.push({ type: "error", text: err.message, time: new Date().toLocaleTimeString() });
    } finally {
      console.log = original.log;
      console.warn = original.warn;
      console.error = original.error;
      console.info = original.info;
      setExecTime((performance.now() - start).toFixed(2));
      setRunning(false);
    }

    setLogs(collected);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  }, [code]);

  const clearOutput = () => {
    setLogs([]);
    setExecTime(null);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* clipboard unavailable */
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-codeskipper-script.js";
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareLink = async () => {
    const encoded = typeof window !== "undefined" ? window.btoa(unescape(encodeURIComponent(code))) : "";
    const url = `${window.location.origin}${window.location.pathname}?code=${encoded}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* ignore */
    }
    window.history.replaceState(null, "", `?code=${encoded}`);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("code");
    if (encoded) {
      try {
        setCode(decodeURIComponent(escape(window.atob(encoded))));
      } catch {
        /* malformed param — ignore */
      }
    }
  }, []);

  const loadSnippet = (key) => {
    setSnippet(key);
    setCode(SNIPPETS[key].code);
    clearOutput();
  };

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
    editor.addCommand(
      // eslint-disable-next-line no-undef
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      runCode
    );
    editor.onDidChangeCursorPosition((e) => {
      setCursorPos({ line: e.position.lineNumber, col: e.position.column });
    });
  };

  const toggleFullscreen = () => setFullscreen((f) => !f);

  const logColor = (type) => {
    if (type === "error") return isDark ? "text-red-400" : "text-red-600";
    if (type === "warn") return isDark ? "text-yellow-300" : "text-yellow-700";
    if (type === "success") return isDark ? "text-emerald-400" : "text-emerald-700";
    return isDark ? "text-gray-100" : "text-gray-800";
  };

  const logPrefix = (type) => (type === "error" ? "✕" : type === "warn" ? "!" : type === "success" ? "✓" : ">");

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? "bg-[#0d1117] text-gray-100" : "bg-gray-50 text-gray-900"
      } p-4 md:p-6`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#04AA6D] to-[#027a4f] text-xs font-bold text-[#04140d]">
            JS
          </span>
          <div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight">JavaScript Playground</h1>
            <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>CodeSkipper.in — practice & run JS instantly</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            🌗 Dark
            <Switch
              checked={isDark}
              onChange={() => setTheme(isDark ? "light" : "vs-dark")}
              className={`${isDark ? "bg-[#04AA6D]" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${isDark ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </label>

          <label className="flex items-center gap-2 text-sm">
            📐 Layout
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className={`p-1.5 rounded text-sm border ${
                isDark ? "bg-[#161b22] border-gray-700 text-gray-200" : "bg-white border-gray-300 text-black"
              }`}
            >
              <option value="horizontal">Side by side</option>
              <option value="vertical">Stacked</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm">
            📄 Snippet
            <select
              value={snippet}
              onChange={(e) => loadSnippet(e.target.value)}
              className={`p-1.5 rounded text-sm border ${
                isDark ? "bg-[#161b22] border-gray-700 text-gray-200" : "bg-white border-gray-300 text-black"
              }`}
            >
              {Object.entries(SNIPPETS).map(([key, s]) => (
                <option key={key} value={key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Editor + Output */}
      <div className={`flex ${layout === "horizontal" ? "flex-col lg:flex-row" : "flex-col"} gap-4`}>
        {/* Editor pane */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div
            className={`flex items-center justify-between px-3 py-2 rounded-t-lg border border-b-0 ${
              isDark ? "bg-[#161b22] border-gray-700" : "bg-gray-100 border-gray-300"
            }`}
          >
            <span className="text-xs font-mono font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400" /> script.js
            </span>
            <div className="flex gap-2">
              <button
                onClick={copyCode}
                className={`text-xs px-2 py-1 rounded ${isDark ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-200 text-gray-600"}`}
                title="Copy code"
              >
                📋 Copy
              </button>
              <button
                onClick={downloadCode}
                className={`text-xs px-2 py-1 rounded ${isDark ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-200 text-gray-600"}`}
                title="Download as .js"
              >
                ⬇ Save
              </button>
              <button
                onClick={shareLink}
                className={`text-xs px-2 py-1 rounded ${isDark ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-200 text-gray-600"}`}
                title="Copy shareable link"
              >
                🔗 Share
              </button>
            </div>
          </div>

          <div className="h-[420px] border rounded-b-lg overflow-hidden" style={{ borderColor: isDark ? "#30363d" : "#d1d5db" }}>
            <MonacoEditor
              height="100%"
              language="javascript"
              theme={theme}
              value={code}
              onChange={(val) => setCode(val || "")}
              onMount={handleEditorMount}
              options={{
                fontSize: 14,
                lineNumbers: "on",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
              }}
            />
          </div>

          <div className={`flex items-center justify-between text-xs mt-1.5 px-1 font-mono ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            <span>
              Ln {cursorPos.line}, Col {cursorPos.col} · {code.length} chars
            </span>
            <span>Ctrl+Enter to run</span>
          </div>
        </div>

        {/* Output pane */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={runCode}
              disabled={running}
              className="px-4 py-2 bg-[#04AA6D] hover:brightness-110 disabled:opacity-60 text-[#04140d] font-semibold rounded-lg text-sm flex items-center gap-2 shadow-[0_0_0_3px_rgba(4,170,109,0.25)]"
            >
              {running ? "Running..." : "▶ Run Code"}
            </button>
            <button
              onClick={clearOutput}
              className={`px-3 py-2 rounded-lg text-sm border ${
                isDark ? "border-gray-700 hover:bg-gray-800 text-gray-300" : "border-gray-300 hover:bg-gray-100 text-gray-600"
              }`}
            >
              🧹 Clear
            </button>
            <button
              onClick={toggleFullscreen}
              className={`px-3 py-2 rounded-lg text-sm border ${
                isDark ? "border-gray-700 hover:bg-gray-800 text-gray-300" : "border-gray-300 hover:bg-gray-100 text-gray-600"
              }`}
            >
              ⛶
            </button>
            {execTime !== null && (
              <span className={`text-xs ml-auto font-mono ${isDark ? "text-gray-500" : "text-gray-400"}`}>{execTime} ms</span>
            )}
          </div>

          <div
            className={`flex items-center justify-between px-3 py-2 rounded-t-lg border border-b-0 ${
              isDark ? "bg-[#161b22] border-gray-700" : "bg-gray-100 border-gray-300"
            }`}
          >
            <span className="text-xs font-mono font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400" /> console
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                isDark ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"
              }`}
            >
              {logs.length}
            </span>
          </div>

          <div
            ref={outputRef}
            className={`flex-1 h-[330px] overflow-auto border rounded-b-lg p-3 font-mono text-[13px] ${
              isDark ? "bg-black border-gray-700" : "bg-gray-50 border-gray-300"
            } ${fullscreen ? "fixed inset-4 z-50 h-auto w-auto shadow-2xl" : ""}`}
          >
            {logs.length === 0 ? (
              <p className={isDark ? "text-gray-600" : "text-gray-400"}>Run your code to see output here.</p>
            ) : (
              logs.map((l, i) => (
                <div key={i} className={`flex gap-2 py-1 border-b ${isDark ? "border-white/5" : "border-black/5"} ${logColor(l.type)}`}>
                  <span className="opacity-50 shrink-0">{logPrefix(l.type)}</span>
                  <pre className="whitespace-pre-wrap break-words m-0 font-mono">{l.text}</pre>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}