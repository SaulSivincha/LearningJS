let producto1 = { nombre: "chompa", precio: 150 };
let producto2 = { nombre: "polera", precio: 70 };
let producto3 = { nombre: "pantalon", precio: 80 };

let cliente1 = { nombre: "Saul", tipo: "Regular" };
let cliente2 = { nombre: "Jordan Gay", tipo: "Frecuente" };
let cliente3 = { nombre: "Daniel", tipo: "VIP" };

// Expresión de función - validar clientes
const validarCliente = function (...clientes) {
  clientes.forEach((cliente) => {
    if (!cliente.nombre || cliente.nombre.trim() == "") {
      throw new Error("El nombre del cliente no es válido");
    }
    if (!cliente.tipo || cliente.tipo.trim() == "") {
      throw new Error("El tipo de cliente no es válido");
    }
  });
  return true;
};

// Expresión de función - validar productos
const validarProductos = function (...productos) {
  productos.forEach((producto) => {
    if (!producto.nombre || producto.nombre.trim() == "") {
      throw new Error("El nombre del producto no es válido");
    }
    if (!producto.precio || producto.precio <= 0) {
      throw new Error("El precio del producto no es válido");
    }
  });
  return true;
};

// Closure - devuelve función con descuento "recordado"
function aplicarDescuento(cliente) {
  if (cliente.tipo == "VIP")
    return function (subtotal) {
      return subtotal * 0.8;
    };
  if (cliente.tipo == "Frecuente")
    return function (subtotal) {
      return subtotal * 0.9;
    };
  return function (subtotal) {
    return subtotal;
  };
}

function mostrarEnConsola(cliente, productos, subtotal, total) {
  console.log("Cliente: " + cliente.nombre + " (" + cliente.tipo + ")");
  console.log("------------------------");
  productos.forEach((p) => {
    console.log(p.nombre + "        $" + p.precio.toFixed(2));
  });
  console.log("------------------------");
  console.log("Subtotal:    $" + subtotal.toFixed(2));
  console.log("Descuento:   $" + (subtotal - total).toFixed(2));
  console.log("Total:       $" + total.toFixed(2));
}

// Callback - imprime la boleta usando la función que se le pase
function imprimirBoleta(cliente, productos, subtotal, total, callback) {
  callback(cliente, productos, subtotal, total);
}

// Función principal con ...args para los productos
function generarCotizacion(cliente, ...productos) {
  validarCliente(cliente);
  validarProductos(...productos);

  const subtotal = (() => {
    let subTotal = 0;
    productos.forEach((producto) => {
      subTotal += producto.precio;
    });
    return subTotal;
  })(); //los parentesis al final la llaman inmediatamente

  const calcularTotal = aplicarDescuento(cliente);
  const total = calcularTotal(subtotal);

  imprimirBoleta(cliente, productos, subtotal, total, mostrarEnConsola);
}

try {
  console.log("Cotización 1");
  generarCotizacion(cliente1, producto1, producto2);

  console.log("Cotización 2");
  generarCotizacion(cliente2, producto2, producto3);

  console.log("Cotización 3");
  generarCotizacion(cliente3, producto1, producto2, producto3);
} catch (e) {
  console.log("Error: " + e.message);
}