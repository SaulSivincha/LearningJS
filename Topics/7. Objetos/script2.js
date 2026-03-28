let configCuenta = {
  tema: "claro",
  idioma: "es",
  notificaciones: true,
  privacidad: "publica",
};

function displayConfig(configCuenta) {
  console.log(`Tema: ${configCuenta.tema}`);
  console.log(`Iidioma: ${configCuenta.idioma}`);
  console.log(
    `Notificaciones: ${configCuenta.notificaciones ? "Activa" : "Desactivada"}`,
  );
  console.log(`Privacidad: ${configCuenta.privacidad}`);
}

function displayConfigKeys(configCuenta) {
  console.log(`Claves: ${Object.keys(configCuenta)}`);
}

function displayConfigValues(configCuenta) {
  console.log(`Valores: ${Object.values(configCuenta)}`);
}

function displayConfigEntradas(configCuenta) {
  Object.entries(configCuenta).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
  });
}

function extraerTemaIidioma(configCuenta) {
  const { tema: usuarioTema, idioma: usuarioIdioma } = configCuenta;
  return { usuarioTema, usuarioIdioma };
}

function crearCopiaModificada(configCuenta) {
  return {
    ...configCuenta,
    tema: configCuenta.tema === "claro" ? "oscure" : "claro",
    notificaciones: !configCuenta.notificaciones,
  };
}

function imprimirObjetos(configCuenta, configCuentaModificada) {
  for (let prop in configCuenta) {
    console.log(`${prop}: ${configCuenta[prop]}`);
  }

  for (let prop in configCuentaModificada) {
    console.log(`${prop}: ${configCuentaModificada[prop]}`);
  }
}
