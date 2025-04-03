const btnAdelante = document.getElementById("btnAdelante");
const btnAtras = document.getElementById("btnAtras");
const imagen = document.getElementById("imagenGato");
const descripcion = document.getElementById("descripcionGato");

const gatos = {
    "./images/gato1.jpeg": "No naranjoso",
    "./images/gato2.jpeg": "No naranjoso",
    "./images/gato3.jpeg": "Naranjoso"
};

const claves = Object.keys(gatos);
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
    mostrarGato(index);
});

btnAdelante.addEventListener("click", () => {
    index = (index + 1) % claves.length;
    mostrarGato(index);
});

btnAtras.addEventListener("click", () => {
    index = (index - 1 + claves.length) % claves.length;
    mostrarGato(index);
});

function mostrarGato(i) {
    const ruta = claves[i];
    imagen.src = ruta;
    descripcion.textContent = gatos[ruta];
}
