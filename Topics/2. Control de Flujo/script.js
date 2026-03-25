// Ejercicio 1
console.log("Inscripción:");

let nombre = prompt("Ingresa tu nombre");
let edad = Number(prompt("Ingresa tu edad"));
let tieneDoc = prompt("¿Tiene documento? Ingresa 'si' o 'no'").toLowerCase();
let documento = "";
let email = prompt("Ingrese su email");
let saldo = Number(prompt("Ingrese su saldo"));
let estadoCuenta = prompt("Ingrese su estado de cuenta");
let accesoCuenta = prompt("Ingrese el nivel de acceso de su cuenta");

if (tieneDoc === "si") {
  documento = prompt("Ingrese su documento");
}

function validarUsuario(
  nombre,
  edad,
  tieneDoc,
  documento,
  email,
  saldo,
  estadoCuenta,
  accesoCuenta,
) {
  let esValido = true;

  if (nombre === "" || nombre === null) {
    esValido = false;
    throw new Error("El nombre no puede estar vacío");
  } else {
    console.log("Nombre válido");
  }

  if (edad < 0 || edad > 100 || Number.isNaN(edad)) {
    esValido = false;
    throw new Error("La edad ingresada no es válida");
  } else if (edad < 18) {
    esValido = false;
    throw new Error("Debe ser mayor de edad para registrarse");
  } else {
    console.log("Edad válida");
  }

  if (tieneDoc !== "si" && tieneDoc !== "no") {
    esValido = false;
    throw new Error("Debe responder solo 'si' o 'no' en documento");
  } else if (tieneDoc === "no") {
    esValido = false;
    throw new Error("No puede registrarse sin documento");
  } else {
    console.log("Documento declarado correctamente");
  }

  if (tieneDoc === "si") {
    if (documento === "" || documento === null) {
      esValido = false;
      throw new Error("Debe ingresar un número de documento");
    } else {
      console.log("Documento válido");
    }
  }

  if (!email.includes("@") || !email.includes(".com")) {
    esValido = false;
    throw new Error("Ingrese un correo válido");
  } else {
    console.log("Email válido");
  }

  if (saldo <= 0 || Number.isNaN(saldo)) {
    esValido = false;
    throw new Error("Ingrese un saldo válido mayor a 0");
  } else {
    console.log("Saldo válido");
  }

  if (estadoCuenta === "inactivo") {
    esValido = false;
    throw new Error("la cuenta esta inactiva");
  } else {
    console.log("Estado de cuenta valido");
  }

  if (
    accesoCuenta !== "admin" &&
    accesoCuenta !== "editor" &&
    accesoCuenta !== "viewer"
  ) {
    esValido = false;
    throw new Error("Ingrese el acceso a cuenta que tiene");
  } else {
    console.log("Acceso a cuenta correcto");
  }

  return esValido;
}

function accesoaCuenta(accesoCuenta) {
  if (accesoCuenta === "admin") {
    alert("Tienes acceso completo a todo");
  } else if (accesoCuenta === "editor") {
    alert("Tiene acceso a solo editar algunos contenidos");
  } else {
    alert("Solo tienes acceso para ver");
  }
}

let resultado = false;
try {
  resultado = validarUsuario(
    nombre,
    edad,
    tieneDoc,
    documento,
    email,
    saldo,
    estadoCuenta,
    accesoCuenta,
  );
} catch (e) {
  console.log(e.message);
}

if (resultado) {
  console.log("Usuario válido para registrarse");
  console.log(accesoCuentaTexto(accesoCuenta));
} else {
  console.log("Usuario no válido para registrarse");
}

console.log("Registro concluido");
