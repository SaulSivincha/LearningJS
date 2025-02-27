// Variables globales
let botones;
let expresion;
let expresionParaEvaluar = "";
let expresionParaUsuario = "";

document.addEventListener("DOMContentLoaded", () => {
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
    } else if (boton.value === "expand") {
        console.log("expandiendo calculadora"); //boton para expandir la calculadora
    } else if (boton.value === "=") {
        try {
            if (expresionParaEvaluar === undefined){
              throw new Error("Valor Undefined");
            }
            expresion.value = eval(expresionParaEvaluar);
        } catch (error) {
            console.error(error.message);
            expresion.value = "Expresion Incorrecta";
            setTimeout(() => {
              expresion.value = "";
            }, 2000);
        }
    } else {
        expresionParaEvaluar += boton.value;
        expresion.value += boton.value;
    }

}

