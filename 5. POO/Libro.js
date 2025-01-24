import Publicacion from './Publicacion.js'

class Libro extends Publicacion {
 constructor(Titulo, Autor, AnioPublicacion, Genero, NumeroPaginas){
  super(Titulo, Autor, AnioPublicacion);
		this.Genero = Genero;
		this.NumeroPaginas = NumeroPaginas;
	}

	obtenerResumen(){
		return `${super.obtenerResumen()} Genero: ${this.Genero}, Total de Paginas: ${this.NumeroPaginas}`;
	}

	get genero(){
  return `${this.Gemero}`;
	}

	get numeroPaginas(){
  return `${this.NumeroPaginas}`;
	}

	set genero(Genero){
  this.Genero = Genero;
	}

	set numeroPaginas(NumeroPaginas){
  this.NumeroPaginas = NumeroPaginas;
	}
}

export default Libro;
