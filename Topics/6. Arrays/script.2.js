let producto1 = {
  id: 1,
  nombre: "Mouse",
  precio: 30.0,
  categoria: "Electronico",
  disponible: true,
};

let producto2 = {
  id: 2,
  nombre: "Teclado",
  precio: 90.0,
  categoria: "Electronico",
  disponible: false,
};

let productos = [producto1, producto2];

function cantidadProdcutos(productos) {
  console.log(`Hay un total de ${productos.length}`);
}

function productosDisponible(productos) {
  return productos.filter((producto) => producto.disponible === true);
}

function buscarProducto(productos, nombre) {
  return productos.find((producto) => producto.nombre === nombre);
}

function buscarPorID(productos, id) {
  return productos.findIndex((producto) => producto.id === id);
}

function productosCaros(productos, caro) {
  return productos.some((producto) => producto.precio >= caro);
}

function stockDisponible(productos) {
  return productos.every((producto) => producto.disponible === true);
}

function agregarEtiqueta(productos) {
  return productos.map((producto) => ({ ...producto, Etiqueta: "" }));
}

function ordenarMayorMenor(productos) {
  return [...productos].sort((a, b) => b.precio - a.precio);
}

function productosDisponibles(productos) {
  return [...productos].filter((productos) => productos.disponible === true);
}
