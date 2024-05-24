import componentCssB from "./componentCssB.module.css";
console.log("componentCssB", componentCssB);
const div = document.createElement("div");
div.className = componentCssB.footer;
document.body.appendChild(div);
