// Variables globales
let botones;
let expresion;

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
            mostrarExpresion(boton);
            expresionToEvaluar(boton);
        });
    });
}

function mostrarExpresion(boton) {
    if (boton.value === "C") {
        expresion.value = "";
    } else if (boton.value === "Del") {
        expresion.value = expresion.value.slice(0, -1);
    } else if (boton.value === "/") {
        expresion.value += "÷";
    } else if (boton.value === "*") {
        expresion.value += "x";
    } else if (boton.value === "expand") {
        console.log("expandiendo calculadora"); //boton para expandir la calculadora
    } else if (boton.value === "=") {
        expresionEvaluada();
    } else {
        expresion.value += boton.value;
    }
}

function expresionEvaluada() {
    expresion.value = eval(expresionToEvaluar());
}

function expresionToEvaluar(boton) {
    let expresionParaEvaluar = "";
    if (boton.value === "C") {
       expresionParaEvaluar = expresionParaEvaluar;
    } else if (boton.value === "Del") {
       expresionParaEvaluar  = expresionParaEvaluar;
    } else if (boton.value === "expand") {
       expresionParaEvaluar = expresionParaEvaluar;
    } else {
       expresionParaEvaluar += boton.value;
    }
    console.log(expresionParaEvaluar);
    return expresionParaEvaluar;
}

