import componentCssA from "./componentCssA.module.css";
console.log("componentCssA", componentCssA);
const div = document.createElement("div");
div.className = componentCssA.footer;
document.body.appendChild(div);
