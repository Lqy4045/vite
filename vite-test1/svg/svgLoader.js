import stop from "./stop.svg?raw";

console.log("svg读取", stop);

const svg = document.createElement("div");
svg.innerHTML = stop;
document.body.appendChild(svg);
