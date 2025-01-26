const botonCrear = document.getElementById("BotonCrear");
const contenedorPrincipal = document.querySelector(".ContenedorParrafoBoton");

botonCrear.addEventListener("click", crearContenedorIndividual);

function crearContenedorIndividual() {
    const contenedorIndividual = document.createElement('div');
    contenedorIndividual.className = "ContenedorIndividual";

    const parrafoRandom = document.createElement('p');
    parrafoRandom.textContent = selectParrafo();
    contenedorIndividual.appendChild(parrafoRandom);

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        contenedorIndividual.remove();
    });
    contenedorIndividual.appendChild(botonEliminar);

    contenedorPrincipal.appendChild(contenedorIndividual);
}

function selectParrafo() {
    const parrafos = [
        "Hola, se supone que esto es un parrafo",
        "No recuerdo como se hacen muchas cosas en JS",
        "Canonizen el SENGIE",
        "Tengo hambre"
    ];
    return parrafos[Math.floor(Math.random() * parrafos.length)];
}

