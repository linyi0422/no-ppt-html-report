import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "examples/excalidraw-task-retro",
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../../docs/demos/codex-task-retro-excalidraw",
    emptyOutDir: true,
  },
});
