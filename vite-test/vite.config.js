import { defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./builds/vite-base-config";
import viteDevConfig from "./builds/vite-dev-config";
import viteProdConfig from "./builds/vite-prod-config";
const envConfig = {
  development: () => {
    return Object.assign({}, viteBaseConfig, viteDevConfig);
  },
  production: () => {
    return Object.assign({}, viteBaseConfig, viteProdConfig);
  },
};

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("当前开发环境", mode);
  console.log("环境变量", env.APP_KEY);
  return envConfig[mode]();
});
