// Ejercicio 1
console.log("Inscripción:");

let nombre = prompt("Ingresa tu nombre");
let edad = Number(prompt("Ingresa tu edad"));
let tieneDoc = prompt("¿Tiene documento? Ingresa 'si' o 'no'").toLowerCase();
let documento = "";
let email = prompt("Ingrese su email");
let saldo = Number(prompt("Ingrese su saldo"));

if (tieneDoc === "si") {
  documento = prompt("Ingrese su documento");
}

function validarUsuario(nombre, edad, tieneDoc, documento, email, saldo) {
  let esValido = true;

  if (nombre === "" || nombre === null) {
    console.log("El nombre no puede estar vacío");
    esValido = false;
  } else {
    console.log("Nombre válido");
  }

  if (edad < 0 || edad > 100 || Number.isNaN(edad)) {
    console.log("La edad ingresada no es válida");
    esValido = false;
  } else if (edad < 18) {
    console.log("Debe ser mayor de edad para registrarse");
    esValido = false;
  } else {
    console.log("Edad válida");
  }

  if (tieneDoc !== "si" && tieneDoc !== "no") {
    console.log("Debe responder solo 'si' o 'no' en documento");
    esValido = false;
  } else if (tieneDoc === "no") {
    console.log("No puede registrarse sin documento");
    esValido = false;
  } else {
    console.log("Documento declarado correctamente");
  }

  if (tieneDoc === "si") {
    if (documento === "" || documento === null) {
      console.log("Debe ingresar un número de documento");
      esValido = false;
    } else {
      console.log("Documento válido");
    }
  }

  if (!email.includes("@") || !email.includes(".com")) {
    console.log("Ingrese un correo válido");
    esValido = false;
  } else {
    console.log("Email válido");
  }

  if (saldo <= 0 || Number.isNaN(saldo)) {
    console.log("Ingrese un saldo válido mayor a 0");
    esValido = false;
  } else {
    console.log("Saldo válido");
  }

  return esValido;
}

let resultado = validarUsuario(nombre, edad, tieneDoc, documento, email, saldo);

console.log(
  resultado
    ? "Usuario válido para registrarse"
    : "Usuario no válido para registrarse",
);
console.log("Registro concluido");
