# Ejercicios en JavaScript

## Fundamentos del lenguaje

## Ejercicio 1: Validación de registro de usuario

Desarrolla un programa en JavaScript que simule la validación de registro de un usuario. Debes declarar variables como nombre, edad, tieneDocumento, email y saldo, y verificar si el usuario puede registrarse evaluando múltiples condiciones: que el nombre no esté vacío, que la edad sea válida y mayor o igual a 18, que tenga documento, que el email contenga "@" y que el saldo sea mayor a 0.

El programa debe mostrar si el usuario es válido o indicar específicamente qué condición falla.

### Elementos / sintaxis obligatoria

- Declaración de variables con `let` y `const`
- Uso de tipos de datos (string, number, boolean)
- Operadores de comparación: `>`, `>=`, `===`
- Operadores lógicos: `&&`, `||`, `!`
- Estructuras condicionales: `if`, `else if`, `else`
- Al menos una función que use `return`
- Uso del operador ternario (`condición ? valor1 : valor2`)
- Uso de `console.log`
- Al menos un caso de conversión de tipos (ej: `Number(edad)`)
- Validación de datos incorrectos o inesperados

---

## Ejercicio 2: Sistema de asignación de becas

Desarrolla un programa en JavaScript que simule un sistema de asignación de becas. Debes evaluar a un estudiante usando variables como nombre, edad, promedio, ingresosFamiliares, numeroHermanos, esDeProvincia y tieneDiscapacidad, y determinar si obtiene la beca.

La evaluación debe considerar tres casos: excelencia académica, condición económica o prioridad social. El programa debe mostrar si obtiene o no la beca, indicar bajo qué condición la obtiene y, si no la obtiene, explicar por qué no califica.

### Elementos / sintaxis obligatoria

- Declaración de variables (`let`, `const`)
- Uso de tipos de datos adecuados
- Operadores de comparación y lógicos combinados
- Condicionales complejos (`if`, `else if`, `else`)
- Al menos una función con `return`
- Uso del operador ternario
- Uso de `console.log`
- Validación de datos (ej: promedio entre 0 y 20)
- Manejo básico de errores (datos inválidos)
- Evitar repetir lógica (organizar bien el código, reutilizar funciones)

---

## Control de flujo

## Ejercicio 1: Sistema de acceso a una plataforma (versión ampliada)

Desarrolla una versión mejorada del sistema de validación de usuario que ya realizaste. Ahora, además de validar los datos del usuario, el programa debe determinar si puede ingresar a una plataforma digital y qué nivel de acceso tendrá. Debes trabajar con variables como nombre, edad, tieneDocumento, email, saldo, rol y estadoCuenta. El sistema debe permitir el ingreso solo si el usuario cumple todas las condiciones necesarias, y además asignar un tipo de acceso según su rol.

El programa debe validar los datos, manejar posibles errores, y finalmente indicar si el usuario puede ingresar, por qué, y qué nivel de acceso tiene.

### Elementos / sintaxis obligatoria

- Uso de `if`, `else if`, `else`
- Uso de operadores lógicos: `&&`, `||`, `!`
- Uso de operador ternario al menos una vez
- Uso de funciones con `return`
- Uso de `try...catch`
- Uso de `throw` para datos inválidos (ej: rol o estado incorrecto)
- Uso de `console.log`

### Reglas del sistema

- El nombre no debe estar vacío
- La edad debe ser válida y mayor o igual a 18
- Debe tener documento
- El email debe contener `"@"`
- El saldo debe ser mayor a 0
- El estado de cuenta debe ser `"activo"`
- El rol puede ser:
  - `"admin"` → acceso total
  - `"editor"` → acceso parcial
  - `"viewer"` → acceso limitado
- Si el rol o el estado de cuenta no son válidos:
  - lanzar un error con `throw`
- Si algún dato es inválido:
  - capturar el error con `try...catch`
- El programa debe mostrar:
  - si el usuario puede ingresar o no
  - el motivo
  - el nivel de acceso asignado

---

## Bucles e iteración

## Ejercicio 1: Sistema de registro de usuarios con múltiples intentos (versión ampliada)

Desarrolla una versión mejorada del sistema de acceso a una plataforma que ya realizaste. Ahora el programa no debe evaluar a un solo usuario, sino permitir registrar y validar varios intentos de ingreso. Debes trabajar con varios usuarios almacenados en un array, y recorrerlos para validar si cada uno puede ingresar a la plataforma. El sistema debe analizar datos como nombre, edad, tieneDocumento, email, saldo, estadoCuenta y accesoCuenta, y mostrar el resultado de validación de cada usuario.

Durante el recorrido, si encuentras usuarios con información incompleta, deberás omitirlos y continuar con el siguiente; sin embargo, si alguno tiene una cuenta en estado "bloqueado" deberas detener el sistema. Al final, el programa debe indicar qué usuarios pueden ingresar, cuáles no, y por qué razón fueron aceptados, rechazados u omitidos.

### Elementos / sintaxis obligatoria

- Uso de `for...of`
- Uso de `break`
- Uso de `continue`
- Uso de `if`, `else if`, `else`
- Uso de funciones con `return`
- Uso de `console.log`

---

### Reglas del sistema

- Debes tener varios usuarios guardados en un array
- Debes recorrer los usuarios con `for...of`
- Debes validar cada usuario usando una función
- Debes mostrar el resultado de cada usuario evaluado
- Debes indicar claramente:
  - qué usuarios pueden ingresar
  - qué usuarios no pueden ingresar
  - qué usuarios fueron omitidos
  - por qué ocurrió cada caso

---

## Funciones

## Ejercicio 1: Sistema de cotización para una tienda

Una tienda maneja tres tipos de clientes: `regular`, `frecuente` y `vip`.
Cada tipo tiene un descuento diferente sobre el total de su compra.

Desarrolla un sistema que reciba el nombre del cliente, su tipo y una
lista de productos (cada uno con nombre y precio), y genere una
cotización detallada.

### El sistema debe:

1. **Validar** los datos de entrada con una función guardada en una
   variable, que pueda reutilizarse en distintas partes del programa.
   Debe verificar que el nombre del cliente no esté vacío y que cada
   producto tenga nombre y precio mayor a 0. Si algo no es válido,
   debe indicarlo y detener el proceso.

2. **Calcular el subtotal** usando una arrow function que sume los
   precios de todos los productos recibidos. La tienda no sabe de
   antemano cuántos productos traerá cada cliente.

3. **Aplicar el descuento correcto** según el tipo de cliente.
   Crea una función que, al recibir el tipo de cliente, devuelva
   otra función lista para calcular el descuento. Así el porcentaje
   queda "recordado" sin necesidad de pasarlo cada vez.
   - `regular` → 0%
   - `frecuente` → 10%
   - `vip` → 20%

4. **Mostrar la cotización** con una función que reciba como argumento
   la instrucción de cómo imprimir cada línea, de modo que en el
   futuro pueda adaptarse a distintos destinos (consola, archivo, etc.).

### Formato de salida esperado:

Cliente: Juan Pérez (vip)

---

Laptop $1200.00
Mouse $25.00

---

Subtotal: $1225.00
Descuento: $245.00
Total: $980.00

### Elementos que deberás usar para resolverlo

- Declaración de función, expresión de función y arrow function
- `...args` para recibir los productos
- Parámetros por defecto
- `return`
- Closures
- Funciones como valores (guardarlas, pasarlas y devolverlas)
- Callbacks
- Scope dentro de funciones
- `console.log`

---

## Strings, Numbers y utilidades básicas

## Ejercicio 1: Sistema de formateo de usuarios

Desarrolla un programa que reciba información de usuarios (nombre completo, email y edad) y genere un formato limpio y estandarizado para mostrar en pantalla.

El sistema debe limpiar los datos, formatearlos correctamente y validar que sean coherentes antes de mostrarlos.

### El sistema debe:

1. Limpiar los datos:
   - Eliminar espacios innecesarios (`trim`)
   - Convertir el nombre a formato correcto (Primera letra mayúscula)
   - Convertir el email a minúsculas

2. Validar los datos:
   - El nombre no debe estar vacío
   - El email debe incluir "@"
   - La edad debe ser un número válido

3. Formatear la salida:
   - Usar template literals
   - Mostrar algo como:
     Usuario: Juan Perez
     Email: juan@email.com
     Edad: 20 años

### Elementos / sintaxis obligatoria

- Métodos de string: `trim`, `toLowerCase`, `slice`
- Template literals `` ` ``
- Conversión de tipos (`Number`)
- Validaciones con `if`
- Uso de funciones con `return`
- Uso de `console.log`
- uso de `includes` para validar el email
- Usa un callback para la funcion que imprimira los datos, como recordatorio del tema anterior
- la funcion de formatear nombre deberia colocar en formato correcto esta entrada "(5 espacios en blanco seguido) sAuL anDRE sivincha machaca "

---

## Ejercicio 2: Sistema básico de limpieza de nombres

Una empresa envio invitaciones a sus trabajadores para una fiesta, pero por error se targiversaron los datos y debes de limpiarlos

---

### Ejemplo de entrada:

"admin juan perez invitado "

### Salida esperada:

Trabajador: Juan Perez

---

### El sistema debe:

1. Limpiar los espacios:
   - Usar `trim` para eliminar espacios al inicio y final

2. Separar el texto:
   - Usar `split(" ")` para convertir el texto en un array

3. Eliminar palabras no válidas:
   - Usar `filter` unicamente para eliminar:
     - espacios vacíos acumulados
     - la palabra `"invitado"`

4. Formatear el nombre:
   - Usar `map` para:
     - convertir a minúsculas
     - capitalizar la primera letra

5. Unir nuevamente el nombre:
   - Usar `join(" ")`

6. Validar el resultado:
   - Usar `length` para verificar la entrada no este vacia

7. Reemplazo opcional:
   - Si el nombre contiene `"admin"` o `"usuario"`, reemplazarlo por `"trabajador"` usando `replace`

---

### Elementos / sintaxis obligatoria

- Uso de `trim`
- Uso de `split`
- Uso de `filter`
- Uso de `map`
- Uso de `join`
- Uso de `length`
- Uso de `replace`
- Funciones con `return`
- Uso de `console.log`

---

### Restricciones

- No usar múltiples `if` innecesarios
- Usar métodos de arrays obligatoriamente
- El código debe funcionar con diferentes nombres

### Entradas
- "   admin   lopez   invitado   "
- "(aqui hay 3 espacios en blanco) maria lopez   "
- "ADMIN maria LOPEZ invitado"

### Salidas
- Trabajador: Usuario Lopez
- Trabajador: Maria Lopez
- Trabajador: Usuario Maria Lopez
---
