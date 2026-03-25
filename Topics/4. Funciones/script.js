let producto1 = {
  nombre: "chompa",
  precio: 150,
};

let producto2 = {
  nombre: "polera",
  precio: 70,
};

let producto3 = {
  nombre: "pantalon",
  precio: 80,
};

let cliente1 = {
    nombre: "Saul",
    tipo: "Regular"
}

let cliente2 = {
    nombre: "Jordan Gay",
    tipo: "Regular"
}




function validarCliente()

function validarDatosProducto(...productos) {
  productos.forEach((producto) => {
    if (productos.nombre === "" || productos.nombre === null) {
      throw new Error("El nombre no esta usando un formato aceptado");
    }

    if (
      productos.precio === "" ||
      productos.precio === null ||
      productos.precio <= 0
    ) {
      throw new Error("El formato del precio no esta en un formato aceptado");
    }
  });
}


