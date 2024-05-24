import { createApp } from "vue";
import App from "./App.vue";
import _ from "lodash-es";
console.log("当前环境变量", import.meta.env);
import "@/styles/variable.css";
import "@/components/componentA.js";
import "@/components/componentB.js";
import "@/assets/images/imageLoader.js";
import "@/assets/json/jsonLoader.js";
import "@/assets/svg/svgLoader.js";

createApp(App).mount("#app");
