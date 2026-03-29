let usuario1 = {
  id: 1,
  nombre: "Saul",
  email: "ssaul@gmail.com",
  activo: true,
  perfil: {
    ciudad: "Arequipa",
    cargo: "Freelancer",
  },
  preferencias: {
    tema: "Oscuro",
  },
};

let usuario2 = {
  id: 2,
  nombre: "Lucia",
  email: "lucia.dev@gmail.com",
  activo: false,
  perfil: {
    ciudad: "Lima",
    cargo: "",
  },
  preferencias: {
    tema: "Claro",
  },
};

let usuario3 = {
  id: 3,
  nombre: "Mateo",
  email: "",
  activo: true,
  perfil: {
    ciudad: "",
    cargo: "Diseñador",
  },
  preferencias: {
    tema: "Oscuro",
  },
};

let usuario4 = {
  id: 4,
  email: "camila21@gmail.com",
  activo: true,
  perfil: {
    ciudad: "Cusco",
  },
};

let usuario5 = {
  id: 5,
  nombre: "Valeria",
  email: "valeria@gmail.com",
  activo: false,
  perfil: null,
};

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];

// Función para leer propiedades y validar si el usuario está completo
function leerPropiedades(usuario) {
  let { id, nombre, email, activo, perfil, preferencias } = usuario;

  if (
    id == null ||
    typeof activo !== "boolean" ||
    (nombre?.trim() ?? "") === "" ||
    (email?.trim() ?? "") === "" ||
    (perfil?.ciudad?.trim() ?? "") === "" ||
    (perfil?.cargo?.trim() ?? "") === "" ||
    (preferencias?.tema?.trim() ?? "") === ""
  ) {
    return false;
  }

  return true;
}

// Función para crear usuarios listos para renderizar
function crearUsuariosUI(usuarios) {
  return usuarios.map((usuario) => {
    let { id, nombre, email, activo, perfil, preferencias } = usuario;

    let { ciudad, cargo } = perfil ?? {};
    let { tema } = preferencias ?? {};

    let nombreMostrado =
      (nombre?.trim() ?? "") === "" ? "Sin nombre" : nombre.trim();

    let emailMostrado =
      (email?.trim() ?? "") === "" ? "Sin email" : email.trim();

    let ciudadMostrada =
      (ciudad?.trim() ?? "") === "" ? "Sin ciudad" : ciudad.trim();

    let cargoMostrado =
      (cargo?.trim() ?? "") === "" ? "Sin cargo" : cargo.trim();

    let temaMostrado =
      (tema?.trim() ?? "") === "" ? "Tema no definido" : tema.trim();

    let resumen = `${(activo && "[ACTIVO] ") || ""}${nombreMostrado} - ${emailMostrado} - ${ciudadMostrada} - ${cargoMostrado} - ${temaMostrado}`;

    return {
      id,
      nombreMostrado,
      emailMostrado,
      ciudadMostrada,
      cargoMostrado,
      temaMostrado,
      resumen,
    };
  });
}

let usuariosUI = crearUsuariosUI(usuarios);

// Mostrar usuarios originales
console.log("USUARIOS ORIGINALES:");
console.log(usuarios);

// Mostrar validación de cada usuario
console.log("USUARIOS COMPLETOS:");
usuarios.forEach((usuario) => {
  console.log(`Usuario ${usuario.id}:`, leerPropiedades(usuario));
});

// Mostrar usuarios UI
console.log("USUARIOS UI:");
console.log(usuariosUI);

// Mostrar solo los resúmenes
console.log("RESÚMENES:");
usuariosUI.forEach((usuario) => {
  console.log(usuario.resumen);
});