
## Arrays

## Ejercicio 1: Gestión de lista de tareas (enfoque React)

Una aplicación de tareas necesita procesar una lista de pendientes antes de mostrarlas en pantalla. Debes trabajar con un array de tareas y generar nuevas versiones del array sin modificar el original, tal como se hace al actualizar estado en React.

Cada tarea tiene:

- id
- titulo
- completada
- prioridad

### El sistema debe:

1. Crear un array con varias tareas
2. Mostrar todas las tareas en consola
3. Filtrar solo las tareas pendientes usando `filter`
4. Buscar una tarea específica por `id` usando `find`
5. Verificar si existe al menos una tarea completada usando `some`
6. Verificar si todas las tareas tienen título válido usando `every`
7. Crear un nuevo array de tareas formateadas usando `map`
   - Debe incluir una nueva propiedad llamada `estado`
   - Si la tarea está completada: `"Hecha"`
   - Si no está completada: `"Pendiente"`
8. Crear una copia del array original usando spread `...`
9. Agregar una nueva tarea a la copia sin modificar el array original
10. Mostrar:

- array original
- tareas pendientes
- tarea encontrada
- array transformado
- nuevo array con la tarea agregada

### Elementos / sintaxis obligatoria

- Crear arrays de objetos
- Uso de `filter`
- Uso de `find`
- Uso de `some`
- Uso de `every`
- Uso de `map`
- Uso de spread `...`
- No mutar el array original
- Uso de funciones con `return`
- Uso de `console.log`

### Restricciones

- No usar `push` para agregar la nueva tarea al array principal
- Debes crear una copia antes de actualizar
- El código debe funcionar con diferentes listas de tareas

---

## Ejercicio 2: Catálogo de productos para mostrar en una interfaz

Una tienda virtual necesita preparar un catálogo de productos para renderizarlo más adelante en una interfaz hecha con React. Debes tomar un array de productos y generar nuevas listas según filtros, búsquedas y transformaciones.

Cada producto tiene:

- id
- nombre
- precio
- categoria
- disponible

### El sistema debe:

1. Crear un array con varios productos
2. Mostrar cuántos productos hay usando `length`
3. Filtrar solo los productos disponibles usando `filter`
4. Buscar un producto por nombre usando `find`
5. Buscar la posición de un producto por `id` usando `findIndex`
6. Verificar si al menos un producto cuesta más de 100 usando `some`
7. Verificar si todos los productos tienen stock disponible usando `every`
8. Crear un nuevo array usando `map` con una propiedad extra llamada `etiqueta`
   - Ejemplo: `"Mouse - S/ 80"`
9. Ordenar una copia del array por precio de menor a mayor usando `sort` con comparator
10. Crear una nueva lista combinando los productos disponibles con `filter`, lista para mostrarse en tarjetas

### Elementos / sintaxis obligatoria

- Uso de `length`
- Uso de `filter`
- Uso de `find`
- Uso de `findIndex`
- Uso de `some`
- Uso de `every`
- Uso de `map`
- Uso de `sort`
- Uso de comparator
- Copiar arrays antes de ordenar
- Uso de spread `...`
- No mutar el array original
- Uso de funciones con `return`
- Uso de `console.log`

### Restricciones

- No modificar directamente el array original al ordenar
- El resultado debe servir como base para renderizar una lista en React

---

## Ejercicio 3: Carrito de compras con actualización inmutable 

Una tienda virtual guarda los productos del carrito en un array. Debes simular operaciones comunes de una aplicación React: agregar productos, eliminar productos, actualizar cantidades y calcular el total, todo sin mutar el array original.

Cada producto del carrito tiene:

- id
- nombre
- precio
- cantidad

### El sistema debe:

1. Crear un array inicial con varios productos en el carrito
2. Mostrar todos los productos del carrito
3. Agregar un nuevo producto creando un nuevo array con spread `...`
4. Eliminar un producto por `id` usando `filter`
5. Actualizar la cantidad de un producto usando `map`
6. Calcular el total del carrito usando `reduce`
7. Verificar si existe al menos un producto con cantidad mayor a 1 usando `some`
8. Verificar si todos los productos tienen precio mayor a 0 usando `every`
9. Mostrar:

- carrito original
- carrito con producto agregado
- carrito con producto eliminado
- carrito con cantidad actualizada
- total final

### Elementos / sintaxis obligatoria

- Uso de arrays de objetos
- Uso de spread `...`
- Uso de `filter`
- Uso de `map`
- Uso de `reduce`
- Uso de `some`
- Uso de `every`
- Uso de `length`
- No mutar el array original
- Uso de funciones con `return`
- Uso de `console.log`

### Restricciones

- No usar `push`, `splice` ni modificar objetos directamente
- Cada cambio debe generar un nuevo array
- Si actualizas un producto, debes devolver un nuevo objeto
- El ejercicio debe resolverse con mentalidad de estado inmutable

---
