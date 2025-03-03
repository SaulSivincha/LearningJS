let botones;
let expresion;
let expresionParaEvaluar = "";

document.addEventListener("DOMContentLoaded", () => {
	console.log("quiero hacer canon el sally");
	botones = document.querySelectorAll(".BtnOperaciones");
	expresion = document.querySelector(".Resultado");
	asignarBotones();
	escribirOperacion();
});

function asignarBotones() {
	botones.forEach((boton) => {
		let valor = boton.textContent.trim();
		if (!isNaN(valor) && valor !== "") {
			boton.name = "numero";
			boton.value = valor;
		} else {
			boton.name = "caracter";
		}
	});
}

function escribirOperacion() {
	botones.forEach((boton) => {
		boton.addEventListener("click", () => {
			calcularExpresion(boton);
		});
	});
}

function calcularExpresion(boton) {
	if (boton.value === "C") {
		expresionParaEvaluar = "";
		expresion.value = "";
	} else if (boton.value === "Del") {
		expresionParaEvaluar = expresion.value.slice(0, -1);
		expresion.value = expresion.value.slice(0, -1);
	} else if (boton.value === "/") {
		expresionParaEvaluar += "/";
		expresion.value += "÷";
	} else if (boton.value === "*") {
		expresion.value += "x";
		expresionParaEvaluar += "*";
	} else if (boton.value === "%") {
		// 1. Buscar el último número
		const lastNumberMatch = expresionParaEvaluar.match(/(\d+(\.\d+)?)$/);
		if (lastNumberMatch) {
			const lastNumber = lastNumberMatch[0];
			// 2. Reemplazar internamente
			expresionParaEvaluar = expresionParaEvaluar.replace(
				/(\d+(\.\d+)?)$/,
				`(${lastNumber}/100)`
			);
			// 3. Mostrar '%' al usuario
			expresion.value += "%";
		}
	} else if (boton.value === "expand") {
		console.log("expandiendo calculadora");
	} else if (boton.value === "=") {
		evaluarExpresion();
	} else {
		expresionParaEvaluar += boton.value;
		expresion.value += boton.value;
	}
}

function evaluarExpresion() {
	try {
		if (expresionParaEvaluar === undefined) {
			throw new Error("Valor Undefined");
		}
		console.log(expresionParaEvaluar);
		expresion.value = eliminarCeros(
     eval(expresionParaEvaluar).toFixed(2)
  );
		expresionParaEvaluar = expresion.value.toString();
	} catch (error) {
		console.error(error.message);
		expresion.value = "Expresion Incorrecta";
		setTimeout(() => {
			expresion.value = "";
		}, 2000);
	}
}

function eliminarCeros(expresion) {
	while (expresion.endsWith("0")) {
		expresion = expresion.slice(0, -1);
	}
	if (expresion.endsWith(".")) {
		expresion = expresion.slice(0, -1);
	}
 
 return expresion;
}


// funciones para botones adicionales
const contCalculadora = document.querySelector(".ContCalculadora");
const btnDisminuir = document.getElementById("BtnDisminuir");

btnDisminuir.addEventListener("mousedown", () => {                 
    contCalculadora.style.position = "absolute";              

    document.addEventListener("mousemove", (event) => {      
        contCalculadora.style.top = `${event.clientY}px`;   // Se agrega 'px'
        contCalculadora.style.left = `${event.clientX}px`;  // Cambié 'bottom' por 'left' para posicionar correctamente
        contCalculadora.style.width = "50%";
					   contCalculadora.style.height = "50%";
				});
});









