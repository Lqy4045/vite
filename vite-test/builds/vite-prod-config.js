import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: "[hash].[name].[ext]",
      },
    },
    // assetsInlineLimit: 4096 * 1000, // 默认为 4kb，4kb以下的会被打包成base64
    outDir: "dist", // 默认为 dist
    assetsDir: "static", // 默认为 assets
  },
});
