const producto = parseFloat(prompt("Ingresa el precio del producto"));
const descuento = parseFloat(prompt("Ingresa el porcentaje del descuento"));

console.log(`Precio original del producto: ${producto} soles`)
console.log(`Porcentaje de descuento: ${descuento}%`)
console.log(`El precio final despues de aplicar el descuento es: ${calcularPrecioFinal(producto, descuento).toFixed(2)}`)

function calcularPrecioFinal(producto, descuento){
 return (producto * (1 - descuento / 100));
}


