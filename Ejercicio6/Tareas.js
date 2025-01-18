import Tarea from './Tarea.js';

let cantTareas = parseInt(prompt("Ingresa la cantidad de tareas que deseas agregar"));
let listaTareas = [];

// 1. agregar tareas
agregarTareas();

// 2. decisión eliminar tareas completadas
let decision = prompt("¿Deseas eliminar las tareas ya completadas?");
if (decision.toLowerCase() === 'si') {
  eliminarTareasCompletadas(listaTareas);
}

// 3. decisión imprimir tareas completas
decision = prompt("¿Deseas imprimir la lista de tareas completas?");
if (decision.toLowerCase() === 'si') {
  imprimirListCompleta(listaTareas);
}

// Funciones
function imprimirListCompleta(listaTareas) {
  listaTareas.forEach(function (tarea) {
    console.log(tarea.imprimir());
  });
}

function eliminarTareasCompletadas(listaTareas) {
  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i].completada === true) {
      listaTareas.splice(i, 1);
      i--; 
    }
  }
}

function agregarTareas() {
  for (let i = 0; i < cantTareas; i++) {
    const miTarea = new Tarea("", false);
    miTarea.descripcion = prompt("Ingresa la descripción de tu tarea");
    miTarea.completada = prompt("Ingresa 'true' si ya fue terminado, sino 'false'").toLowerCase() === 'true';
    listaTareas.push(miTarea);
  }
}

