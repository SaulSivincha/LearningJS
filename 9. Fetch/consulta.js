window.onload =  () => {
	window.alert(`La URL actual es ${window.location.href}`);
 window.alert(`Estas usando: ${navigator.userAgent}`);
 const pokeUser = prompt("Escoga el nombre de algun pokemon para buscar");
 obtenerPokemon(pokeUser);
	guardarPokemon(pokeUser);
}

async function obtenerPokeApi() {
 try {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
	 
		// si la respueta es false entonces se lanza una exception para luego transferir el control a catch
		if (!response.ok){
   throw new Error(`Error al obtener los datos`);// se lanza una expcecion 
		}
  
  const pokemon = await response.json();
		console.log(`Nombre del pokemon: ${pokemon.name}`);

	} catch (error) {
  console.error(error);
	}
}

obtenerPokeApi().catch(error => {
	console.error("Se encontro un error:", error.message);
});


async function obtenerPokemon(pokemon){
 try {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

		if(!response.ok) {
   throw new Error(`No se pudo obtener ese pokemon`);
		}

		pokemon = await  response.json();
	 console.log(`Nombre: ${pokemon.name}`);
		console.log(`Altura: ${pokemon.height}`);
		console.log(`Peso: ${pokemon.weight}`);
		} catch (error) {
  console.error(error);
	}
}

async function guardarPokemon(pokemon){

	try {
	 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

	 if (!response.ok){
   throw new Error("No se pudo obtener el pokemon");
	 }

	 pokemon = await response.json();
		localStorage.setItem(`${pokemon.name}`, pokemon.sprites.front_default);
		console.log("sprite del pokemon guardado correctamente");
 } catch (error) {
  console.error(error);
	}
}
