const botonCrear = document.getElementById("BotonCrear");
const contenedorParrafo = document.querySelector(".ContenedorParrafo");
const botonEliminar = document.createElement('button');
const parrafoRandom = document.createElement('p');

botonCrear.addEventListener("click", crearParrafo);

function crearParrafo(){
	parrafoRandom.textContent = selectParrafo();
	contenedorParrafo.appendChild(parrafoRandom);
	agregarBotonEliminar();
}

function selectParrafo() {
 const parrafos = ["Hola, se supone que esto es un parrafo",
	                    "No recuerdo como se hacen muchas cosas en JS",
	                    "Canonizen el SENGIE",
	                    "Tengo hambre"];
 return parrafos[Math.floor(Math.random() * 4)];
}

function agregarBotonEliminar(){
 botonEliminar.value = "Eliminar";
	contenedorParrafo.appendChild(parrafoRandom);
}
