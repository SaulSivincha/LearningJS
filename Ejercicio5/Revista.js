import Publicacion from './Publicacion.js'

class Revista extends Publicacion {
 constructor(Titulo, Autor, AnioPublicacion, Volumen, Numero){
  super(Titulo, Autor, AnioPublicacion);
		this.Volumen = Volumen;
		this.Numero = Numero;
	}

	obtenerResumen(){
		return `${super.obtenerResumen()} Volumen: ${this.Volumen}, Numero: ${this.Numero}`;
	}
 
	get volumen(){
  return `${this.Volumen}`;
	}

	get numero(){
  return `${this.Numero}`;
	}

	set volumen(Volumen){
  this.Volumen = Volumen;
	}

	set numero(Numero){
  this.Numero = Numero;
	}

}

export default Revista;
