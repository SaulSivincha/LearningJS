let CantVueltas = parseFloat(prompt("Ingresa la cantidad de vueltas que dio el ciclista"));
let TiempoVuelta = [];

for (let i = 0; i < CantVueltas; i++){
 TiempoVuelta.push(parseFloat(prompt(`Ingrese el tiempo de la vuelta "${i + 1}"`)));
}

let TiempoPromedio = 0.0;
for (let i = 0; i < CantVueltas; i++){
 TiempoPromedio += TiempoVuelta[i];
 console.log(`Tiempo de la vuelta ${i + 1}: ${TiempoVuelta[i]}s`)
}

console.log(`Tiempos de cada vuelta ${TiempoVuelta}`);
console.log(`El tiempo promedio es de ${TiempoPromedio / TiempoVuelta.length} segundos`);

