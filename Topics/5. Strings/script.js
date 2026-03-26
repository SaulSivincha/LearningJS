let persona1 = {
  nombre: "Saul Andre Sivincha Machaca",
  email: "saulan@gmail.com",
  edad: 19,
};

function validarPersona(persona) {
  if (persona.nombre === "" || persona.nombre === null) {
    throw new Error("El nombre no cuenta con el formato correcto");
  }

  if (
    persona.email === "" ||
    persona.email === null ||
    !persona.email.includes("@")
  ) {
    throw new Error("El email no tiene el formato adecuado");
  }

  if (persona.edad === "" || persona.edad === null) {
    throw new Error("La edad no esta en un formato adecuado");
  }
}

function formatearDatos(persona) {
  persona.nombre = persona.nombre
    .trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
    .join(" ");

  persona.email = persona.email.trim();
  persona.edad = Number(persona.edad);

  return persona;
}

function imprimirDatos(persona, callback) {
  callback(persona);
}

function imprimirConsola(persona) {
  console.log(`Usuario: ${persona.nombre}`);
  console.log(`Email: ${persona.email}`);
  console.log(`Edad: ${persona.edad} años`);
}

function validarUsuarios(...personas) {
  for (let persona of personas) {
    try {
      validarPersona(persona);
      persona = formatearDatos(persona);
      imprimirDatos(persona, imprimirConsola);
    } catch (e) {
      console.log(e.message);
    }
  }
}
