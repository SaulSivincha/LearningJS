
import Vuelo from './Vuelo.js'

const duracionVuelo = parseInt(prompt("Ingrese la duracion del vuelo"));
const edad = parseInt(prompt("Ingrese la edad del pasajero"));

const pasaje = new Vuelo(edad, duracionVuelo);
pasaje.calcularPrecioFinal();
pasaje.generarNumeroReserva();
pasaje.generarFechas();
console.log(pasaje.imprimir());
