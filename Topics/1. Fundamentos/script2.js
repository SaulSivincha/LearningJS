// Ejercicio 2
alert("Ingrese sus datos para ver si aplica a una beca");

let nombre = prompt("Ingresa tu nombre");
let edad = Number(prompt("Ingresa tu edad"));
let promedio = Number(prompt("Ingrese su promedio"));
let ingresosFamiliares = Number(prompt("Ingrese sus ingresos familiares"));
let numeroHermanos = Number(prompt("Ingrese el número de hermanos"));
let esProvincia = prompt(
  "¿Eres de provincia? Responde 'si' o 'no'",
).toLowerCase();
let tieneDiscapacidad = prompt(
  "¿Tiene discapacidad? Responde 'si' o 'no'",
).toLowerCase();

function evaluarRespuestas(
  nombre,
  edad,
  promedio,
  ingresosFamiliares,
  numeroHermanos,
  esProvincia,
  tieneDiscapacidad,
) {
  let esValido = true;

  if (nombre === null || nombre.trim() === "") {
    console.log("El nombre no puede estar vacío");
    esValido = false;
  } else {
    console.log("Nombre válido");
  }

  if (edad < 0 || edad > 100 || Number.isNaN(edad)) {
    console.log("La edad ingresada no es válida");
    esValido = false;
  } else {
    console.log("Edad válida");
  }

  if (promedio < 0 || promedio > 20 || Number.isNaN(promedio)) {
    console.log("Ingrese un promedio válido entre 0 y 20");
    esValido = false;
  } else {
    console.log("Promedio válido");
  }

  if (ingresosFamiliares < 0 || Number.isNaN(ingresosFamiliares)) {
    console.log("Ingrese un valor válido para ingresos familiares");
    esValido = false;
  } else {
    console.log("Ingresos familiares válidos");
  }

  if (numeroHermanos < 0 || Number.isNaN(numeroHermanos)) {
    console.log("Ingrese un número válido de hermanos");
    esValido = false;
  } else {
    console.log("Número de hermanos válido");
  }

  if (esProvincia !== "si" && esProvincia !== "no") {
    console.log("En provincia debe responder solo 'si' o 'no'");
    esValido = false;
  } else {
    console.log("Respuesta de provincia válida");
  }

  if (tieneDiscapacidad !== "si" && tieneDiscapacidad !== "no") {
    console.log("En discapacidad debe responder solo 'si' o 'no'");
    esValido = false;
  } else {
    console.log("Respuesta de discapacidad válida");
  }

  return esValido;
}

function determinarBeca(
  promedio,
  ingresosFamiliares,
  numeroHermanos,
  esProvincia,
  tieneDiscapacidad,
) {
  let resultado = "";

  if (promedio >= 18) {
    resultado = "Obtiene beca por excelencia académica";
  } else if (promedio >= 14 && ingresosFamiliares < 1500) {
    resultado = "Obtiene beca por condición económica";
  } else if (
    promedio >= 12 &&
    (tieneDiscapacidad === "si" || esProvincia === "si" || numeroHermanos >= 3)
  ) {
    resultado = "Obtiene beca por prioridad social";
  } else {
    resultado = "No obtiene beca porque no cumple los requisitos";
  }

  return resultado;
}

let validarUsuario = evaluarRespuestas(
  nombre,
  edad,
  promedio,
  ingresosFamiliares,
  numeroHermanos,
  esProvincia,
  tieneDiscapacidad,
);

let mensajeFinal = validarUsuario
  ? determinarBeca(
      promedio,
      ingresosFamiliares,
      numeroHermanos,
      esProvincia,
      tieneDiscapacidad,
    )
  : "Se debe validar la información antes de determinar la beca";

console.log(mensajeFinal);
