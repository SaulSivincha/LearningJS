class Vuelo{
 constructor(edadPasajero, duracion){
  this._precio = 250;
		this._edadPasajero = edadPasajero;
		this._duracion = duracion;
  this._codigoUnico = 0;
		this._fechaSalida = 0;
		this._fechaLlegada = 0;
	}
  
  get precio() {
    return this._precio;
  }

  set precio(value) {
    this._precio = value;
  }

  get edadPasajero() {
    return this._edadPasajero;
  }

  set edadPasajero(value) {
    this._edadPasajero = value;
  }

  get duracion() {
    return this._duracion;
  }

  set duracion(value) {
    this._duracion = value;
  }

  get codigoUnico() {
    return this._codigoUnico;
  }

  set codigoUnico(value) {
    this._codigoUnico = value;
  }

  get fechaSalida() {
    return this._fechaSalida;
  }

  set fechaSalida(value) {
    this._fechaSalida = value;
  }

  get fechaLlegada() {
    return this._fechaLlegada;
  }

  set fechaLlegada(value) {
    this._fechaLlegada = value;
  }

	calcularPrecioFinal(){
  if(this._duracion > 4 &&  this._edadPasajero > 60){
   this._precio = 255;
		} else if (this._duracion > 4){
   this._precio = 250;
		} else if (this._edadPasajero > 60){
   this._precio = 212.5;
		} else {
			this._precio = 250;
		}
	}
  
 generarNumeroReserva(){
	 const limiteEnteros = 2 ** 53 - 1;
		const codigoRandom = Math.floor(Math.random() * limiteEnteros);
  this._codigoUnico = BigInt(codigoRandom) + BigInt(Math.floor(Math.random() * 100));
	}

 generarFechas(){
  const fechaActual = new Date();
  this._fechaSalida = fechaActual;
  fechaActual.setHours(fechaActual.getHours() + this._duracion);
  this._fechaLlegada = fechaActual;
 }

 imprimir(){
  return `Para el pasajero de ${this._edadPasajero}, el precio es de ${this._precio}. El vuelo tendra una duracion de ${this._duracion}, su codigo unico es "${this._codigoUnico}" y partira el ${this._fechaSalida}, llegando a su destino el ${this._fechaLlegada} `
 }

}

export default Vuelo;
