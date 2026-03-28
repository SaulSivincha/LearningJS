// objeto literal
let usuario = {
  id: 1,
  nombre: "Saul",
  email: "ssaul@gmail.com",
  edad: 20,
  activo: true,
};

// acceso con punto
console.log(`Nombre con punto: ${usuario.nombre}`);

// acceso con corchetes
console.log(`Nombre con corchetes: ${usuario["nombre"]}`);

// validar nombre y email
function validarNombreEmail(usuario) {
  let validado = true;

  if (
    usuario.nombre === "" ||
    usuario.nombre === null ||
    usuario.email === "" ||
    usuario.email === null
  ) {
    validado = false;
  }

  return validado;
}

// mensaje formateado
function imprimir(usuario) {
  return `Usuario: ${usuario.nombre}
Email: ${usuario.email}
Edad: ${usuario.edad ?? "No disponible"}
Estado: ${usuario.activo ? "Activo" : "Inactivo"}`;
}

// copiar y agregar rol
function nuevaFuncionRol(usuario) {
  return { ...usuario, rol: "usuario" };
}

// copiar y cambiar estado
function cambiarEstadoActivo(usuario) {
  return {
    ...usuario,
    activo: !usuario.activo,
  };
}

// copiar y eliminar edad
function eliminarEdad(usuario) {
  const { edad, ...usuarioSinEdad } = usuario;
  return usuarioSinEdad;
}

// objeto copiado con cambios
let usuarioCopiado = nuevaFuncionRol(usuario);
usuarioCopiado = cambiarEstadoActivo(usuarioCopiado);
usuarioCopiado = eliminarEdad(usuarioCopiado);

// validar
if (validarNombreEmail(usuario)) {
  console.log("Objeto original:");
  console.log(usuario);

  console.log("Objeto copiado:");
  console.log(usuarioCopiado);

  console.log("Mensaje final del usuario:");
  console.log(imprimir(usuarioCopiado));
} else {
  console.log("Nombre y email son obligatorios");
}
