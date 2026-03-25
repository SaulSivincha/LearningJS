// Ejercicio 1
console.log("Inscripción:");

let persona1 = {
  nombre: "Saul",
  edad: 20,
  tieneDoc: "no",
  documento: "",
  email: "ssivincham@unsa.edu.pe",
  saldo: 1300,
  estadoCuenta: "activo",
  accesoCuenta: "viewer",
};

let persona2 = {
  nombre: "Sebas",
  edad: 21,
  tieneDoc: "si",
  documento: 23432193,
  email: "ssebas@gmail.com",
  saldo: 0,
  estadoCuenta: "inactivo",
  accesoCuenta: "editor",
};

let persona3 = {
  nombre: "Bryan",
  edad: 23,
  tieneDoc: "si",
  documento: 23432193,
  email: "bryan@empresa.com",
  saldo: 1500,
  estadoCuenta: "activo",
  accesoCuenta: "admin",
};

let personas = [persona1, persona2, persona3];

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
  }

  if (edad < 0 || edad > 100 || Number.isNaN(edad)) {
    esValido = false;
    throw new Error("La edad ingresada no es válida");
  } else if (edad < 18) {
    esValido = false;
    throw new Error("Debe ser mayor de edad para registrarse");
  }

  if (tieneDoc !== "si" && tieneDoc !== "no") {
    esValido = false;
    throw new Error("Debe responder solo 'si' o 'no' en documento");
  } else if (tieneDoc === "no") {
    esValido = false;
    throw new Error("No puede registrarse sin documento");
  }

  if (tieneDoc === "si") {
    if (documento === "" || documento === null || documento === undefined) {
      esValido = false;
      throw new Error("Debe ingresar un número de documento");
    }
  }

  if (!email.includes("@")) {
    esValido = false;
    throw new Error("Ingrese un correo válido");
  }

  if (saldo <= 0 || Number.isNaN(saldo)) {
    esValido = false;
    throw new Error("Ingrese un saldo válido mayor a 0");
  }

  if (
    estadoCuenta !== "activo" &&
    estadoCuenta !== "inactivo" &&
    estadoCuenta !== "bloqueado"
  ) {
    esValido = false;
    throw new Error("Estado de cuenta inválido");
  } else if (estadoCuenta === "inactivo") {
    esValido = false;
    throw new Error("La cuenta está inactiva");
  }

  if (
    accesoCuenta !== "admin" &&
    accesoCuenta !== "editor" &&
    accesoCuenta !== "viewer"
  ) {
    esValido = false;
    throw new Error("Ingrese un acceso a cuenta válido");
  }

  return esValido;
}

function accesoCuentaTexto(accesoCuenta) {
  if (accesoCuenta === "admin") {
    return "Tienes acceso completo a todo";
  } else if (accesoCuenta === "editor") {
    return "Tienes acceso para editar algunos contenidos";
  } else {
    return "Solo tienes acceso para ver";
  }
}

for (let persona of personas) {
  if (persona.estadoCuenta === "bloqueado") {
    console.log(`${persona.nombre}: proceso detenido por cuenta bloqueada`);
    break;
  }

  let incompleto = false;

  for (let prop in persona) {
    if (
      persona[prop] === "" ||
      persona[prop] === undefined ||
      persona[prop] === null
    ) {
      console.log(`${persona.nombre}: dato incompleto en ${prop}`);
      incompleto = true;
      break;
    }
  }

  if (incompleto) {
    console.log(
      `${persona.nombre}: usuario omitido por información incompleta`,
    );
    continue;
  }

  try {
    let resultado = validarUsuario(
      persona.nombre,
      persona.edad,
      persona.tieneDoc,
      persona.documento,
      persona.email,
      persona.saldo,
      persona.estadoCuenta,
      persona.accesoCuenta,
    );

    if (resultado) {
      console.log(`${persona.nombre}: usuario válido para registrarse`);
      console.log(accesoCuentaTexto(persona.accesoCuenta));
    }
  } catch (e) {
    console.log(`${persona.nombre}: ${e.message}`);
  }
}

console.log("Registro concluido");
