let usuario = {
  id: 1,
  nombre: "Saul Sivincha",
  contacto: {
    email: "ssaul@gmail.com",
    telefono: 999321333,
  },
  direccion: {
    ciudad: "Pekin",
    pais: "China",
  },
  preferencias: {
    tema: "Oscuro",
    notificaciones: false,
  },
};

function imprimirInfoImportante(usuario) {
  console.log(`Nombre: ${usuario.nombre}`);
  console.log(`Email: ${usuario.contacto.email}`);
  console.log(`Ciudad: ${usuario.direccion.ciudad}`);
}

function actualizarEmail(usuario, email) {
  return {
    ...usuario,
    contacto: {
      ...usuario.contacto,
      email: email,
    },
  };
}

function actualizarTema(usuario, tema) {
  return {
    ...usuario,
    preferencias: {
      ...usuario.preferencias,
      tema: tema,
    },
  };
}

function mostrarResumen(usuario) {
  console.log(
    `Resumen: ${usuario.nombre} - ${usuario.contacto.email} - ${usuario.direccion.ciudad} - ${usuario.preferencias.tema}`,
  );
}

imprimirInfoImportante(usuario);

let usuarioConEmailActualizado = actualizarEmail(
  usuario,
  "nuevoemail@gmail.com",
);
let usuarioActualizado = actualizarTema(usuarioConEmailActualizado, "Claro");

console.log("Perfil original:", usuario);
console.log("Perfil actualizado:", usuarioActualizado);
mostrarResumen(usuarioActualizado);
