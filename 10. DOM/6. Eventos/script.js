const btnSolid = document.getElementById("BtnSolid");
const btnLinear = document.getElementById("BtnLinear");
const btnCircle = document.getElementById("BtnCircle");
const body = document.body;
const active = false;
const color = [];

document.addEventListener("DOMContentLoaded", () => {
    randomColor();
});

btnSolid.addEventListener("click", () => {
    body.style.background = `rgb(${color[0]}, ${color[1]}, ${[color[2]]})`;
    randomColor();
});

btnCircle.addEventListener("click", () => {
    const firstColor = `rgb(${color[0]}, ${color[1]}, ${[color[2]]})`;
    randomColor();
    const secondColor = `rgb(${color[0]}, ${color[1]}, ${[color[2]]})`;
    body.style.background = `Radial-gradient(circle, ${firstColor}, ${secondColor})`;
});

btnLinear.addEventListener("click", () => {
    const firstColor = `rgb(${color[0]}, ${color[1]}, ${[color[2]]})`;
    randomColor();
    const secondColor = `rgb(${color[0]}, ${color[1]}, ${[color[2]]})`;
    body.style.background = `Linear-gradient(to right, ${firstColor}, ${secondColor})`;
});

function randomColor() {
    color.length = 0;
    for (let i = 0; i < 3; i++){
        let currentRandom = Math.floor(Math.random() * 256);
        color.push(currentRandom);
    }
}