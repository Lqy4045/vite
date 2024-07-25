import "./a.css";
import svgA from "./svg/stop.svg";
import screen from "./screen.jpg";
import jsonA from "./a.json";
let box = document.createElement("div");
let img1 = document.createElement("img");
let img2 = document.createElement("img");
img1.src = screen;
box.appendChild(img1);
img2.src = svgA;
// document.querySelector(box).appendChild(img2);

box.className = "box";
box.innerText = jsonA;

document.body.appendChild(box);
document.body.appendChild(img1);
document.body.appendChild(img2);
