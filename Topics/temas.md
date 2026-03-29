1) Fundamentos del lenguaje
Qué es JavaScript y cómo se ejecuta en el navegador.
Sintaxis básica.
Comentarios.
Sentencias y expresiones.
Sensibilidad a mayúsculas/minúsculas.
let, const y var.
Diferencia entre variable mutable y referencia inmutable.
Tipos primitivos: string, number, boolean, null, undefined, symbol, bigint.
Literales.
Conversión de tipos.
Truthy y falsy.
Scope: global, de bloque y de función.
Hoisting, al menos a nivel práctico.
Operadores básicos: aritméticos, comparación, lógicos, asignación.
Igualdad estricta === vs igualdad débil ==. MDN cubre estos fundamentos en “Grammar and types”, “Expressions and operators” y “Control flow and error handling”.
2) Control de flujo
if, else if, else.
Operador ternario.
switch.
&&, || y ! en condiciones.
return.
try, catch, finally.
Lanzar errores con throw. React usa mucho la lógica condicional con JavaScript normal; su documentación oficial muestra condicionales con if, ternario y && dentro de JSX.
3) Bucles e iteración
for.
while.
do...while.
break y continue.
for...of.
Diferencia entre for...of y for...in. MDN trata estos mecanismos en “Loops and iteration”, y for...of se conecta con iterables y arrays, que luego aparecen mucho en React.
4) Funciones
Declaración de función.
Expresión de función.
Arrow functions.
Parámetros y argumentos.
return.
Parámetros por defecto.
Rest parameters ...args.
Scope dentro de funciones.
Closures, al menos bien entendidas en práctica.
Funciones como valores: pasarlas, devolverlas, guardarlas.
Callbacks. JavaScript es multiparadigma y trata a las funciones como objetos de primera clase; esto es base para callbacks, handlers y componentes funcionales en React.
5) Strings, numbers y utilidades básicas
Métodos de string más usados: slice, includes, toLowerCase, trim, replace.
Template literals `hola ${nombre}`.
Números y redondeo básico.
Math.
Conversión entre string y number.
Comparaciones y ordenamiento simple. MDN agrupa estas bases en “Numbers and strings”.
6) Arrays
Crear arrays.
Acceder por índice.
length.
Recorrer arrays.
Métodos mutables e inmutables.
push, pop, shift, unshift.
slice y splice.
concat.
includes.
find, findIndex.
some, every.
map.
filter.
reduce al menos a nivel intermedio.
sort y su comparator.
Copiar arrays.
Spread ....
Desestructuración de arrays. React usa explícitamente map() y filter() para renderizar listas, y exige actualizar arrays en estado creando una copia nueva en vez de mutarlos directamente.
7) Objetos
Crear objetos literales.
Propiedades y métodos.
Acceso con punto y con corchetes.
Agregar, cambiar y eliminar propiedades.
Recorrer objetos.
Object.keys, Object.values, Object.entries.
Desestructuración de objetos.
Spread en objetos.
Copia superficial.
Referencias vs copias.
Objetos anidados. React usa objetos como props y estado, y su documentación oficial insiste en no mutar directamente los objetos guardados en state: hay que crear una copia y luego reemplazar el estado.
8) Expresiones modernas de uso diario
Destructuring.
Spread syntax.
Rest syntax.
Optional chaining ?.
Nullish coalescing ??
Short-circuiting con && y ||.
Asignación por defecto. Estos temas no siempre aparecen como “capítulo único”, pero forman parte del JavaScript moderno que React usa a diario en JSX, props y estado. React muestra objetos dentro de llaves, lógica condicional y acceso a valores JavaScript en JSX.
9) Módulos
Qué es un módulo.
export.
export default.
import.
Importaciones nombradas.
Importaciones por defecto.
Renombrar imports.
Organización básica en archivos. Esto sí es obligatorio para React moderno. La guía oficial de React usa export default e import, y React recomienda un entorno JavaScript modular para usar JSX, dividir archivos y traer paquetes desde npm.
10) Asincronía
Qué es código síncrono vs asíncrono.
Callbacks.
Promesas.
.then().
.catch().
.finally().
async.
await.
Manejo de errores en async con try/catch.
Entender que async devuelve una Promise. MDN documenta que las promesas son objetos a los que se les adjuntan callbacks, y que async/await simplifica el consumo de APIs basadas en promesas. await solo puede usarse dentro de funciones async o al nivel superior de un módulo.
11) JSON y consumo de APIs
Qué es JSON.
Diferencia entre objeto JS y JSON.
JSON.parse.
JSON.stringify.
fetch().
Leer respuestas HTTP.
Convertir respuesta a JSON.
Manejar errores de red y de parsing.
async/await con fetch. Para aplicaciones React reales, esto es muy importante. MDN explica JSON como formato común para transmitir datos en apps web, y Fetch como la API moderna para hacer peticiones HTTP; además, las peticiones suelen devolver JSON que luego se usa para actualizar la UI.
12) DOM y eventos, pero a nivel básico
Qué es el DOM.
Seleccionar elementos.
Leer y cambiar texto o atributos.
Crear y eliminar elementos.
Escuchar eventos.
Objeto event.
Formularios básicos.
input, change, submit.
preventDefault(). React abstrae buena parte del manejo directo del DOM, pero seguir entendiendo DOM y eventos te ayuda mucho a comprender qué problema resuelve React. MDN presenta la manipulación del DOM como una de las tareas más comunes del JavaScript del navegador, y los eventos como señales a las que tu código responde.