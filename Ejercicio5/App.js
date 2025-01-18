import Revista from './Revista.js';
import Libro from './Libro.js';

const libro1 = new Libro('Cien Años de Soledad', 'Gabriel García Márquez', 1967, 'Realismo Mágico', 417);
console.log(libro1.obtenerResumen());

const revista1 = new Revista('National Geographic', 'Varios Autores', 2023, 150, 5);
console.log(revista1.obtenerResumen());
