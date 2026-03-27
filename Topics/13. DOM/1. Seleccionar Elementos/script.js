const boton = document.querySelector("button");
const listaLi = document.querySelectorAll("li");

function cambiarColor(){
 const liColorRed = listaLi[2];
	if (liColorRed.style.color !== "red"){
	 liColorRed.style.color = "red";
	}	else {
  liColorRed.style.color = "blue";
	}
}

boton.addEventListener("click", cambiarColor);
