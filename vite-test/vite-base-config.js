import { defineConfig } from "vite";

export default defineConfig({
    css:{
        modules:{
          localsConvention:'camelCase',//返回类名的类型（驼峰....）
          scopeBehaviour:'local'
        }
      }
});
