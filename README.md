# Sylan-no-ppt

Sylan-no-ppt 是一个面向 Codex / Claude Code 协作用户的展示方式实验库。

它的目标不是复刻 PPT，而是让用户在和 AI 完成任务、复盘或讨论后，直接得到可以打开、微调、演示、截图和发布的 HTML 展示产物。

## 核心定位

**用 HTML 承载 AI 生成的展示材料。**

当前优先服务一个高频场景：任务复盘。AI 已经知道任务背景、过程、决策、问题和下一步，所以最适合直接生成一份可展示的复盘页。

## 当前方案

### 1. Report HTML

一页式可调汇报页。适合复盘汇报、问题说明、方案对齐。

能力重点：

- 模块级布局调节
- 字号、行距、留白调节
- 重点区域权重调节
- 纯净模式，方便截图和公开展示
- 单 HTML 文件，适合 GitHub Pages

### 2. Board HTML

白板型 HTML 展示页。适合把讨论结果、任务路径、系统结构、决策关系做成可拖动的可视化白板。

能力重点：

- HTML 页面中直接展示白板
- 节点可拖动
- 与复盘报告同屏
- 支持导出 `.excalidraw`
- 纯净模式，方便演示

## 在线示例

GitHub Pages 入口：

```text
https://linyi0422.github.io/no-ppt-html-report/
```

当前示例：

- `docs/demos/layee-hr-retro.html`：可调式 HTML 汇报页
- `docs/demos/codex-task-retro-board.html`：任务复盘白板型 HTML

如果仓库后续改名为 `Sylan-no-ppt`，Pages 地址会相应变成：

```text
https://linyi0422.github.io/Sylan-no-ppt/
```

## 和 AI 协作时怎么说

```text
把这次任务做成 Sylan-no-ppt 展示页。

场景：任务复盘。
目标受众：和我一起看结果、问题、决策和下一步的人。
输出形式：HTML，不做 PPT。

要求：
1. 先整理任务背景、做了什么、关键决策、结果、风险和下一步。
2. 生成一个可展示的 HTML 页面。
3. 页面要能调字号、留白、重点区域和展示模式。
4. 如果适合，请加入白板区域，用节点和连线表达结构。
5. 加纯净模式，方便截图或公开展示。
6. 所有 CSS 和 JS 尽量内联，方便直接放到 GitHub Pages。
```

## 参考原则

这个项目会吸收类似 `frontend-slides` 的经验：展示产物应该直接可看、视觉优先、少依赖、适配浏览器视口。
但 Sylan-no-ppt 当前不优先做传统多页 slides，而是先打穿“任务复盘”和“白板型 HTML”。

## 目录

```text
docs/
  index.html
  demos/
    layee-hr-retro.html
    codex-task-retro-board.html
  recipes/
    codex-task-retro.md

PRODUCT_MEMORY.md
AGENTS.md
```
