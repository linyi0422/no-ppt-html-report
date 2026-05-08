# Codex Recipe: Task Retro No-PPT

Use this recipe when a user wants a presentation artifact after completing a task with Codex or Claude Code.

## Input

Ask for or infer:

- task background
- what changed
- important decisions
- result
- risks or open questions
- next actions
- audience

## Output Choice

Use **Report HTML** when the material is mostly narrative or conclusion-heavy.

Use **Board HTML** when the material benefits from visible structure:

- workflow
- decision tree
- system map
- dependency map
- before / after journey

## Required Features

Every output should include:

- display-ready layout
- clear hierarchy
- module-level tuning controls
- pure presentation mode
- no external build step for GitHub Pages

Board HTML should also include:

- draggable nodes
- relationship lines
- optional `.excalidraw` export

## Suggested Prompt

```text
把这次任务做成 Sylan-no-ppt 展示页。

使用场景：任务复盘。
目标受众：需要快速理解任务结果、关键决策和下一步的人。
输出形式：HTML，不做 PPT。

请先整理信息结构，再生成可直接打开的 HTML。
页面需要有可调控制面板、纯净模式。
如果适合，请加入白板区域，用节点和连线表达任务路径，并支持导出 .excalidraw。
```
