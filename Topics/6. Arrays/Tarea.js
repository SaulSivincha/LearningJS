class Tarea {
  constructor(descripcion, completada) {
    this._descripcion = descripcion;
    this._completada = completada;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(nuevaDescripcion) {
    this._descripcion = nuevaDescripcion;
  }

  get completada() {
    return this._completada;
  }

  set completada(estado) {
    this._completada = estado;
  }

  imprimir() {
    if (this._completada) {
      return `${this._descripcion}, está completada`;
    }
    return `${this._descripcion}, no está completada`;
  }
}

export default Tarea;

