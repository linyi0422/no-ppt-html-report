# Repository Instructions

这个仓库的核心主题是 **Sylan-no-ppt**：让 Codex / Claude Code 协作用户在完成任务或讨论后，直接生成可展示、可调节、可交互的 HTML 展示产物。

## Product Direction

- 不要把它做成传统 PPT 复刻。
- 不要把它做成复杂 Web App。
- 当前优先场景是任务复盘。
- 当前一等输出是 HTML：Report HTML 和 Board HTML。
- Excalidraw 可以作为白板导出格式或嵌入能力，但产品主线仍然是 HTML 展示产物。

## Implementation Preferences

- 优先使用单文件 HTML：CSS 和 JS 内联，方便 GitHub Pages 发布和本地直接打开。
- 控件必须影响真实布局变量，例如字号、行距、padding、grid 占比、页面宽度。
- 不要用 `transform: scale()` 放大主要内容区，因为容易造成越界和截图不可控。
- 任何重点区域都应该能单独调整，不要只提供全局字号。
- 保留纯净模式，方便截图和公开展示。
- 页面必须先像一份展示稿，再像一个网页。

## Demo Rules

新增 demo 默认放到 `docs/demos/`。

每个 demo 至少包含：

- 明确的展示场景
- 可展示主体内容
- 控制面板或模式切换
- 纯净模式
- 移动端基础适配
- GitHub Pages 可直接访问

Board HTML demo 还应尽量包含：

- 可拖动节点
- 连线或结构关系
- 导出 `.excalidraw` 的能力

## UX Checks

交付前至少检查：

- 文本是否越界。
- 控制面板是否遮挡主体内容。
- 纯净模式是否隐藏控制面板。
- GitHub Pages 路径是否仍然可访问。
- 页面是否仍然像展示材料，而不是普通文章。
