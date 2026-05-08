const baseElement = {
  angle: 0,
  fillStyle: "solid",
  strokeWidth: 2,
  strokeStyle: "solid",
  roughness: 1,
  opacity: 100,
  groupIds: [],
  frameId: null,
  roundness: null,
  seed: 1,
  version: 1,
  versionNonce: 1,
  isDeleted: false,
  boundElements: null,
  updated: 0,
  link: null,
  locked: false,
};

let seed = 4200;

function nextSeed() {
  seed += 1;
  return seed;
}

function rect(id, x, y, width, height, backgroundColor, strokeColor = "#1f2933") {
  return {
    ...baseElement,
    id,
    type: "rectangle",
    x,
    y,
    width,
    height,
    strokeColor,
    backgroundColor,
    roundness: { type: 3 },
    seed: nextSeed(),
    versionNonce: nextSeed(),
  };
}

function text(id, x, y, value, options = {}) {
  const fontSize = options.fontSize ?? 24;
  const lineCount = value.split("\n").length;
  return {
    ...baseElement,
    id,
    type: "text",
    x,
    y,
    width: options.width ?? 260,
    height: Math.ceil(lineCount * fontSize * 1.28),
    strokeColor: options.color ?? "#1f2933",
    backgroundColor: "transparent",
    seed: nextSeed(),
    versionNonce: nextSeed(),
    text: value,
    fontSize,
    fontFamily: 1,
    textAlign: options.align ?? "left",
    verticalAlign: "top",
    containerId: null,
    originalText: value,
    lineHeight: 1.25,
    baseline: Math.ceil(fontSize * 0.78),
  };
}

function arrow(id, x, y, width, height, points) {
  return {
    ...baseElement,
    id,
    type: "arrow",
    x,
    y,
    width,
    height,
    strokeColor: "#2f6f5e",
    backgroundColor: "transparent",
    strokeWidth: 3,
    roundness: { type: 2 },
    seed: nextSeed(),
    versionNonce: nextSeed(),
    points,
    lastCommittedPoint: null,
    startBinding: null,
    endBinding: null,
    startArrowhead: null,
    endArrowhead: "arrow",
  };
}

const nodes = [
  rect("node-background-box", 90, 210, 260, 120, "#d9f99d"),
  text("node-background-title", 118, 235, "任务背景", { fontSize: 28, width: 190 }),
  text("node-background-body", 118, 275, "从 Excalidraw 本地验证\n进入 no-ppt 产品化讨论", {
    fontSize: 18,
    width: 215,
    color: "#374151",
  }),

  rect("node-verify-box", 440, 210, 260, 120, "#bfdbfe"),
  text("node-verify-title", 468, 235, "本地验证", { fontSize: 28, width: 190 }),
  text("node-verify-body", 468, 275, "React + Excalidraw 跑通\n支持编辑和导出", {
    fontSize: 18,
    width: 210,
    color: "#374151",
  }),

  rect("node-position-box", 790, 210, 300, 120, "#fde68a"),
  text("node-position-title", 818, 235, "产品定位", { fontSize: 28, width: 210 }),
  text("node-position-body", 818, 275, "不是 PPT 克隆\n而是 AI 生成 HTML 展示产物", {
    fontSize: 18,
    width: 245,
    color: "#374151",
  }),

  rect("node-report-box", 250, 440, 280, 130, "#fee2e2"),
  text("node-report-title", 278, 468, "Report HTML", { fontSize: 28, width: 220 }),
  text("node-report-body", 278, 508, "一页式可调汇报\n适合结论和复盘", {
    fontSize: 18,
    width: 225,
    color: "#374151",
  }),

  rect("node-board-box", 650, 440, 330, 130, "#ddd6fe"),
  text("node-board-title", 678, 468, "Board HTML", { fontSize: 28, width: 220 }),
  text("node-board-body", 678, 508, "直接嵌入 Excalidraw\n适合路径、流程和关系", {
    fontSize: 18,
    width: 260,
    color: "#374151",
  }),

  rect("node-next-box", 430, 680, 340, 115, "#ccfbf1"),
  text("node-next-title", 462, 707, "下一步", { fontSize: 28, width: 210 }),
  text("node-next-body", 462, 747, "上传 Pages 示例\n沉淀生成配方和模板", {
    fontSize: 18,
    width: 250,
    color: "#374151",
  }),
];

const connectors = [
  arrow("arrow-background-verify", 350, 270, 90, 0, [[0, 0], [90, 0]]),
  arrow("arrow-verify-position", 700, 270, 90, 0, [[0, 0], [90, 0]]),
  arrow("arrow-position-report", 860, 330, -470, 110, [[0, 0], [-140, 80], [-470, 110]]),
  arrow("arrow-position-board", 930, 330, -110, 110, [[0, 0], [-30, 70], [-110, 110]]),
  arrow("arrow-report-next", 390, 570, 200, 110, [[0, 0], [60, 85], [200, 110]]),
  arrow("arrow-board-next", 810, 570, -200, 110, [[0, 0], [-60, 85], [-200, 110]]),
];

export const initialData = {
  elements: [
    text("title", 90, 80, "Sylan-no-ppt\n任务复盘白板", {
      fontSize: 44,
      width: 520,
      color: "#111827",
    }),
    text("subtitle", 670, 96, "这不是自制白板组件。\n这里直接展示 Excalidraw，用户可以编辑、拖动、导出原生 .excalidraw。", {
      fontSize: 22,
      width: 510,
      color: "#4b5563",
    }),
    ...nodes,
    ...connectors,
  ],
  appState: {
    viewBackgroundColor: "#fbfcf8",
    theme: "light",
    currentItemFontFamily: 1,
    currentItemStrokeColor: "#1f2933",
    currentItemBackgroundColor: "transparent",
  },
  files: {},
  scrollToContent: true,
};
