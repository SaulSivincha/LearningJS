const boton = document.querySelector("button");
const listaLi = document.querySelectorAll("li");

function cambiarColor(){
 const liColorRed = listaLi[2];
	liColorRed.style.color = "red";
}

boton.addEventListener("click", cambiarColor);
