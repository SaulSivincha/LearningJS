class Publicacion {
 constructor(Titulo, Autor, AnioPublicacion){
  this.Titulo = Titulo;
		this.Autor = Autor;
		this.AnioPublicacion = AnioPublicacion;
	}

	obtenerResumen(){
  return `${this.Titulo} escrita por ${this.Autor} en ${this.AnioPublicacion}`;
	}

	static compararAnios(Publicacion1, Publicacion2){
		if (Publicacion1.anioPublicacion < Publicacion2.anioPublicacion){
   return Publicacion1;
		}
 
  return Publicacion2;
	}

	get titulo(){
		return `${this.Titulo}`;
	} 

	get autor(){
		return `${this.Autor}`;
	}

	get anioPublicacion(){
		return `${this.AnioPublicacion}`
	}

	set titulo(Titulo){
	 this.Titulo = Titulo;
	}
 
 set autor(Autor){
  this.Autor = Autor;
	}

	set anioPublicacion(AnioPublicacion){
  this.AnioPublicacion = AnioPublicacion;
	}
	I
}

export default Publicacion;
