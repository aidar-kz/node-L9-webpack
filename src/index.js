import getText from "./getText.js";
import "./styles/main.scss";
import icon from "./assets/reading.png";

const img = document.getElementById("iconImg");
img.src = icon;

const btn = document.getElementById("btn");
btn.addEventListener("click", getText);

console.log("Привет из index.js");

const result = getText();
console.log(result);
