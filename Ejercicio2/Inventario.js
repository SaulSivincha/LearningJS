const nombre = prompt("Ingresa el nombre de un producto");
var cant = prompt("Ingresa la cantidad");
const precio = prompt("Ingresa su precio por unidad")

console.log(`El valor en el inventario de "${nombre}" es de ${cant * precio} soles`);

const vender = prompt(`Que sorpresa, alguien quiere comprar ${nombre}, cuantos quiere llevar?`);

var cant = cant - vender;

console.log(`Ahora tenemos ${cant} en el inventario`);

if (cant <= 3) {
 let add = prompt("Desea aniadir mas productos al inventario?");
  if (add === "si") {
   add = prompt("cuantos desea aniadir?");
   cant = cant + add;
  } else {
   console.log(`cuidado te vas a quedar sin ${nombre}`);
  }
}

console.log(`Ahora tenemos ${cant + " " + nombre} en el inventario por un valor de ${cant * precio} soles`);

