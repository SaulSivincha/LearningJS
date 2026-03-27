let tarea1 = {
  id: 1,
  titulo: "Comer algo",
  completada: false,
  prioridad: "Baja",
};

let tarea2 = {
  id: 2,
  titulo: "Convocatoria LEAD",
  completada: false,
  prioridad: "Media",
};

let tarea3 = {
  id: 3,
  titulo: "Brief del evento",
  completada: true,
  prioridad: "Alta",
};

let tareas = [tarea1, tarea2, tarea3];

function imprimirTareas(tareas) {
  for (let tarea of tareas) {
    console.log(`ID: ${tarea.id}`);
    console.log(`Titulo: ${tarea.titulo}`);
    console.log(`Completada: ${tarea.completada ? "Si" : "No"}`);
    console.log(`Prioridad: ${tarea.prioridad}`);
  }
}

function filtrarPrioridadAlta(tareas) {
  return tareas.filter((tarea) => tarea.prioridad.trim() === "Alta");
}

function filtrarPorID(tareas, id) {
  return tareas.find((tarea) => tarea.id === id);
}

function hayCompletadas(tareas) {
  return tareas.some((tarea) => tarea.completada === true);
}

function tituloValidoTareas(tareas) {
  return tareas.every((tarea) => tarea.titulo && tarea.titulo.trim() !== "");
}

function transformarTareas(tareas) {
  return tareas.map((tarea) => ({
    ...tarea,
    estado: tarea.completada ? "Hecha" : "Pendiente",
  }));
}

function agregarTarea(tareas, tarea) {
  return [...tareas, tarea];
}
