import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    // exclude: ["lodash-es"],
  },
  css:{
    modules:{
      localsConvention:'camelCase',//返回类名的类型（驼峰....）
      scopeBehaviour:'global',//开启模块化
    }
  }
});
