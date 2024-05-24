import screen from "./screen.jpg";
console.log("图片引用", screen);
const img = document.createElement("img");
img.setAttribute("src", screen);
img.style.width = "100px";
document.body.appendChild(img);
