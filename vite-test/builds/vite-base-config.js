import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  preprocessorOptions: {
    less: {
      math: "always", // 配置less单位计算
      globalVars: {
        // 全局变量
        mainColor: "green",
      },
    },
  },
});
