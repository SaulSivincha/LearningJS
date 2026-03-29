
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

---

### Elementos / sintaxis obligatoria

- Uso de `trim`
- Uso de `split`
- Uso de `filter`
- Uso de `map`
- Uso de `join`
- Uso de `length`
- Funciones con `return`
- Uso de `console.log`

### Entradas

- " admin lopez invitado "
- "(aqui hay 3 espacios en blanco) maria lopez "
- "ADMIN maria LOPEZ invitado"

### Salidas

- Trabajador: Usuario Lopez
- Trabajador: Maria Lopez
- Trabajador: Usuario Maria Lopez

---