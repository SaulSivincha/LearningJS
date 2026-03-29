
## Objetos

## Ejercicio 1: Perfil de usuario para una aplicación (enfoque React)

Una aplicación necesita mostrar la información de un usuario en pantalla y preparar una versión actualizada de sus datos sin modificar el objeto original. Debes trabajar con un objeto que represente un perfil de usuario, tal como luego se haría con `props` o `state` en React.

Cada usuario tiene:

- id
- nombre
- email
- edad
- activo (booleano)

### El sistema debe:

1. Crear un objeto literal con los datos de un usuario
2. Validar que el nombre y el email no estén vacíos
3. Crear una función que reciba el objeto usuario y devuelva un mensaje en consola de todas sus propiedades
4. Agregar una nueva propiedad llamada `rol`
5. Cambiar el valor de la propiedad `activo`
6. Eliminar una propiedad que ya no se necesite
7. Mostrar:
   - objeto original
   - objeto copiado
   - mensaje final del usuario

### Elementos / sintaxis obligatoria

- Agregar propiedades
- Modificar propiedades
- Eliminar propiedades con destructuring y rest
- Uso de spread `...`

### Restricciones

- Debes crear una copia antes de trabajar la versión final
- No debes depender de variables globales dentro de la función
- El código debe funcionar con diferentes usuarios

---
## Ejercicio 2: Configuración de una cuenta de usuario 

Una aplicación guarda la configuración de la cuenta de un usuario dentro de un objeto. Debes mostrar su contenido y crear una versión actualizada de esa configuración sin modificar el objeto original, tal como luego se haría al actualizar `state` en React.

El objeto de configuración tiene:

El objeto de configuración tiene:

- `tema`: modo visual de la aplicación, por ejemplo `"claro"` o `"oscuro"`
- `idioma`: idioma en el que se mostrará la interfaz, por ejemplo `"es"` o `"en"`
- `notificaciones`: indica si el usuario desea recibir notificaciones (`true` o `false`)
- `privacidad`: nivel de visibilidad de la cuenta, por ejemplo `"publica"` o `"privada"`

### El sistema debe:

1. Crear un objeto literal con la configuración de una cuenta.
2. Mostrar todas sus propiedades en consola recorriendo el objeto, imprimiendo cada clave junto con su valor.
3. Mostrar por separado:
   - las claves del objeto usando `Object.keys`
   - los valores del objeto usando `Object.values`
   - las entradas del objeto usando `Object.entries`

4. Desestructurar al menos dos propiedades del objeto para guardarlas en variables independientes.
   - Por ejemplo, extraer `tema` e `idioma` para poder usarlos directamente sin escribir siempre `configuracion.tema` o `configuracion.idioma`.

5. Crear una copia del objeto usando spread `...`.
   - La copia debe guardarse en otra variable, para que el objeto original permanezca igual.

6. Actualizar al menos dos propiedades en la copia.
   - Por ejemplo:
     - cambiar el `tema` de `"oscuro"` a `"claro"`
     - cambiar `notificaciones` de `true` a `false`

7. Mostrar en consola:
   - la configuración original
   - la configuración actualizada

8. Comparar visualmente ambos resultados para comprobar que:
   - el objeto original conserva sus valores iniciales
   - solo la copia contiene los cambios realizados

### Elementos / sintaxis obligatoria

- Uso de `Object.keys`
- Uso de `Object.values`
- Uso de `Object.entries`
- Recorrido de objetos
- Desestructuración de objetos
- Uso de spread `...`
- Copia superficial
- Uso de `console.log`

### Restricciones

- No modificar directamente el objeto original
- Debes usar desestructuración al menos una vez
- La versión actualizada debe crearse a partir de una copia

---

## Ejercicio 3: Perfil de usuario con información anidada 

Una aplicación guarda el perfil de un usuario en un objeto que contiene otros objetos dentro. Debes acceder a esa información y crear una versión actualizada del perfil sin modificar el original, tal como se hace al actualizar datos anidados en React.

Cada perfil tiene:

- id
- nombre
- contacto
  - email
  - telefono
- direccion
  - ciudad
  - pais
- preferencias
  - tema
  - notificaciones

### El sistema debe:

1. Crear un objeto con información anidada
2. Mostrar en consola:
   - el nombre del usuario
   - su email
   - su ciudad
3. Crear una copia usnado `...` y actualizar solo el email dentro de `contacto` sin modificar el objeto original
5. Actualizar solo el tema dentro de `preferencias` sin modificar el objeto original
6. Mostrar en consola:
   - perfil original
   - perfil actualizado
   - resumen del usuario

### Elementos / sintaxis obligatoria

- Objetos anidados
- Acceso a propiedades anidadas
- Uso de spread `...`
- Copia superficial
- Referencias vs copias
- Uso de funciones con `return`
- Uso de `console.log`

### Restricciones

- No modificar directamente el objeto original
- Para actualizar una propiedad anidada, debes copiar también el objeto interno correspondiente
- El perfil actualizado debe conservar las demás propiedades sin cambios