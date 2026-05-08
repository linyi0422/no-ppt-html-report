import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import "./styles.css";
import { initialData } from "./scene";

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function App() {
  const [api, setApi] = useState(null);
  const [sceneKey, setSceneKey] = useState(0);
  const [isPure, setIsPure] = useState(false);

  const scene = useMemo(() => initialData, []);

  const resetScene = () => {
    api?.updateScene(scene);
    setSceneKey((value) => value + 1);
  };

  const exportScene = () => {
    const appState = api?.getAppState();
    const payload = {
      type: "excalidraw",
      version: 2,
      source: window.location.href,
      elements: api?.getSceneElements() ?? scene.elements,
      appState: {
        viewBackgroundColor: appState?.viewBackgroundColor ?? "#fbfcf8",
        theme: appState?.theme ?? "light",
      },
      files: api?.getFiles() ?? scene.files,
    };

    downloadTextFile("sylan-no-ppt-task-retro.excalidraw", JSON.stringify(payload, null, 2));
  };

  return (
    <main className={isPure ? "app pure" : "app"}>
      <header className="topbar">
        <div className="intro">
          <span className="eyebrow">Sylan-no-ppt / Excalidraw Board</span>
          <h1>任务复盘 Excalidraw 展示页</h1>
          <p>
            白板区域直接嵌入 Excalidraw，不再用自制节点模拟。这里可以现场编辑、拖动、缩放，并导出原生
            .excalidraw 文件。
          </p>
        </div>
        <div className="actions" aria-label="页面操作">
          <button type="button" onClick={resetScene}>重置画布</button>
          <button type="button" onClick={exportScene}>导出 .excalidraw</button>
          <button type="button" onClick={() => setIsPure((value) => !value)}>
            {isPure ? "显示说明" : "纯净模式"}
          </button>
        </div>
      </header>

      <section className="workbench">
        <aside className="brief" aria-label="复盘摘要">
          <span>展示目标</span>
          <strong>把一次 AI 协作任务的路径讲清楚</strong>
          <p>适合复盘背景、验证、定位、分支方案和下一步。</p>
        </aside>
        <div className="canvasWrap" aria-label="Excalidraw canvas">
          <Excalidraw
            key={sceneKey}
            excalidrawAPI={setApi}
            initialData={scene}
            viewModeEnabled={isPure}
            zenModeEnabled={isPure}
            gridModeEnabled={!isPure}
            UIOptions={{
              canvasActions: {
                loadScene: true,
                saveToActiveFile: false,
                export: {
                  saveFileToDisk: true,
                },
                toggleTheme: true,
              },
            }}
          />
        </div>
      </section>

      {isPure ? (
        <button type="button" className="exitPure" onClick={() => setIsPure(false)}>
          退出纯净模式
        </button>
      ) : null}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
