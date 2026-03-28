let producto1 = {
  id: 1,
  nombre: "mouse",
  precio: 60,
  cantidad: 10,
};

let producto2 = {
  id: 2,
  nombre: "mousepad",
  precio: 20,
  cantidad: 30,
};

let producto3 = {
  id: 3,
  nombre: "teclado",
  precio: 120,
  cantidad: 5,
};

let carrito = [producto1, producto2, producto3];

function mostrarProducto(carrito) {
  carrito.forEach((producto, indice) => {
    console.log(`Producto ${indice + 1}: ${producto.nombre}`);
  });
}

function agregarProducto(carrito, newProducto) {
  return [...carrito, newProducto];
}

function eliminarProducto(carrito, id) {
  return carrito.filter((producto) => producto.id !== id);
}

function actualizarProducto(carrito, cantidad, id) {
  return carrito.map((producto) =>
    producto.id === id ? { ...producto, cantidad: cantidad } : producto
  );
}

function calcularTotal(carrito) {
  return carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
    0
  );
}

let nuevoProducto = {
  id: 4,
  nombre: "audifonos",
  precio: 80,
  cantidad: 2,
};

let carritoAgregado = agregarProducto(carrito, nuevoProducto);
let carritoEliminado = eliminarProducto(carrito, 2);
let carritoActualizado = actualizarProducto(carrito, 50, 3);
let totalFinal = calcularTotal(carrito);

console.log("Carrito original:", carrito);
console.log("Carrito con producto agregado:", carritoAgregado);
console.log("Carrito con producto eliminado:", carritoEliminado);
console.log("Carrito con cantidad actualizada:", carritoActualizado);
console.log("Total final:", totalFinal);