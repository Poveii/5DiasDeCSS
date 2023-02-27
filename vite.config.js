import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        day01: resolve(root, "day01", "index.html"),
        day02: resolve(root, "day02", "index.html"),
        day03: resolve(root, "day03", "index.html"),
        day04: resolve(root, "day04", "index.html"),
        day05: resolve(root, "day05", "index.html"),
      },
    },
  },
});
