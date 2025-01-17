let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let estudia = prompt("Ingresa si, si eres estudiante, no, si no lo eres");

if (estudia === "Si") {
 estudia = true;
} else {
 estudia = false;
}

let output = "";
if (estudia === true) {
 output = "al parecer estas estudiando algo"
} else {
 output = "estas pensando en estudiar algo a futuro?"
}

console.log(`Hola ${nombre}, veo que tienes ${edad}, ${output}`);

