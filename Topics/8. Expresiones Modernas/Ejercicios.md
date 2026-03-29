# Expresiones modernas de uso diario

A continuación se presenta una versión corregida y mejor redactada de los ejercicios. Se ajustó el enunciado para que:

- quede claro qué debe hacer cada función,
- no haya contradicciones entre los datos y la validación,
- se entienda cuándo usar `?.`, `??`, `&&`, `map`, `...args` y spread,
- y el resultado esperado esté alineado con la solución que realmente se pide.

---

## Ejercicio 1: Convertir usuarios de API en usuarios listos para renderizar

Una aplicación recibe desde una API un array llamado `usuarios`, pero esos datos no están listos para mostrarse directamente en pantalla. Tu tarea es construir un nuevo array llamado `usuariosUI`, donde cada elemento tenga una estructura más clara, completa y segura para renderizar.

### Estructura posible de cada usuario

Cada objeto del array `usuarios` puede contener estas propiedades:

- `id`
- `nombre`
- `email`
- `activo`
- `perfil`
  - `ciudad`
  - `cargo`
- `preferencias`
  - `tema`

Algunos usuarios pueden venir con propiedades faltantes, vacías o incompletas.

### Lo que debes hacer

#### 1. Crear el array original

Crea un array llamado `usuarios` con varios objetos. Algunos deben tener todos sus datos y otros deben tener propiedades faltantes o vacías.

#### 2. Crear una función de validación

Crea una función que reciba un usuario y verifique si tiene completos los datos necesarios para renderizar.

La función debe:

- revisar estas propiedades:
  - `nombre`
  - `email`
  - `perfil.ciudad`
  - `perfil.cargo`
  - `preferencias.tema`
- retornar `false` si alguna no existe o está vacía
- retornar `true` si todas tienen un valor válido

**Importante:**

- `activo` puede valer `true` o `false`, y ambos son valores válidos
- por eso, `activo: false` **no** debe considerarse como dato faltante

#### 3. Crear una función para transformar los usuarios

Crea una función que reciba el array `usuarios` y use `map` para construir un nuevo array llamado `usuariosUI`.

Dentro del `map`, debes:

- desestructurar de cada usuario estas propiedades:
  - `id`
  - `nombre`
  - `email`
  - `activo`
- leer también las propiedades anidadas:
  - `perfil.ciudad`
  - `perfil.cargo`
  - `preferencias.tema`

#### 4. Completar datos faltantes

Si falta un dato o viene vacío, debes reemplazarlo por estos valores:

- `nombre` → `"Sin nombre"`
- `email` → `"Sin email"`
- `ciudad` → `"Sin ciudad"`
- `cargo` → `"Sin cargo"`
- `tema` → `"Tema no definido"`

#### 5. Construir la estructura final de `usuariosUI`

Cada elemento del nuevo array debe tener estas propiedades:

- `id`
- `nombreMostrado`
- `emailMostrado`
- `ciudadMostrada`
- `cargoMostrado`
- `temaMostrado`
- `resumen`

#### 6. Construir la propiedad `resumen`

La propiedad `resumen` debe tener este formato:

- si `activo` es `true`, debe iniciar con `[ACTIVO] `
- luego debe mostrar:
  `nombre - email - ciudad - cargo - tema`

Ejemplo:

```txt
[ACTIVO] Saul - saul@email.com - Arequipa - Desarrollador - oscuro

```

## Ejercicio 2: Generar cotizaciones a partir de una configuración parcial

Una tienda quiere una función reutilizable llamada `generarCotizacion` que reciba una configuración general y una cantidad variable de productos. A partir de esos datos, debe calcular el resumen de una compra sin modificar la configuración original.

### Estructura posible de la configuración

El objeto de configuración puede contener estas propiedades:

- `moneda`
- `descuento`
- `cliente`
  - `nombre`

Algunas propiedades pueden faltar o venir vacías.

### Estructura de cada producto

Cada producto debe tener estas propiedades:

- `nombre`
- `precio`
- `cantidad`

---

### Lo que debes hacer

#### 1. Crear la configuración base

Crea un objeto llamado `configBase`.

Debe tener al menos algunas de estas propiedades:

- `moneda`
- `descuento`
- `cliente.nombre`

Puedes dejar algunas propiedades faltantes para probar la lógica.

#### 2. Crear varios productos

Crea varios objetos producto con:

- `nombre`
- `precio`
- `cantidad`

#### 3. Crear la función `generarCotizacion`

Crea una función llamada `generarCotizacion` que reciba:

- un objeto de configuración
- una cantidad variable de productos usando `...args`

Dentro de la función, debes:

- desestructurar estas propiedades de la configuración:
  - `moneda`
  - `descuento`
  - `cliente`
- usar valores por defecto si faltan:
  - `moneda` → `"PEN"`
  - `descuento` → `0`

#### 4. Leer el nombre del cliente

Debes leer `cliente.nombre`.

Si no existe o viene vacío, debes usar:

- `"Cliente general"`

#### 5. Calcular la cotización

Con los productos recibidos, debes calcular:

- `subtotal` → suma de `precio * cantidad` de todos los productos
- `montoDescuento` → cuánto se descuenta del subtotal
- `totalFinal` → resultado final después del descuento

#### 6. Crear una configuración promocional

A partir de `configBase`, crea un nuevo objeto llamado `configPromo`.

Debes construirlo usando spread `...` y cambiar solo:

- `descuento`

La finalidad es tener una segunda configuración sin modificar la original.

#### 7. Mostrar resultados

Debes mostrar:

- `configBase`
- `configPromo`
- nombre final del cliente
- subtotal
- monto de descuento
- total final

### Formato de salida esperado

```txt
Cliente: Juan Perez
Moneda: PEN
Subtotal: 250
Descuento: 25
Total: 225
```

## Ejercicio 3: Actualizar una tarea dentro de un array de estado

Una aplicación de tareas guarda su información en un array llamado `tareas`. Debes crear una función llamada `actualizarTarea` que reciba ese array y devuelva un nuevo array llamado `tareasActualizadas`, donde solo una tarea cambie y las demás se mantengan igual.

### Estructura de cada tarea

Cada tarea puede tener estas propiedades:

- `id`
- `titulo`
- `completada`
- `prioridad`
- `detalle`
  - `descripcion`
  - `fechaLimite`
- `asignado`
  - `nombre`
  - `email`

Algunas tareas pueden venir con propiedades faltantes dentro de `detalle` o `asignado`.

---

### Lo que debes hacer

#### 1. Crear el array original

Crea un array llamado `tareas` con varios objetos.

Algunas tareas deben tener todos sus datos y otras deben venir con información incompleta.

#### 2. Crear la función `actualizarTarea`

Crea una función llamada `actualizarTarea` que reciba:

- `tareas`
- `idBuscado`
- `cambios`

La función debe devolver un nuevo array llamado `tareasActualizadas`.

#### 3. Recorrer el array con `map`

Dentro de la función, usa `map` para construir `tareasActualizadas`.

En cada iteración:

- si la tarea no coincide con `idBuscado`, debes devolverla sin cambios
- si la tarea sí coincide, debes devolver una nueva versión actualizada

#### 4. Actualizar propiedades simples

Si `cambios` trae propiedades simples como:

- `titulo`
- `completada`
- `prioridad`

debes aplicarlas creando una copia de la tarea con spread `...`.

#### 5. Actualizar propiedades anidadas

Si `cambios` trae un objeto `detalle`, debes crear un nuevo `detalle` combinando:

- el `detalle` anterior
- los nuevos valores de `cambios.detalle`

Si `cambios` trae un objeto `asignado`, debes crear un nuevo `asignado` combinando:

- el `asignado` anterior
- los nuevos valores de `cambios.asignado`

La finalidad es actualizar datos anidados sin modificar el objeto original.

#### 6. Crear el resumen final de cada tarea

Luego de obtener `tareasActualizadas`, debes recorrerlas para generar un resumen por tarea.

Para cada resumen, debes:

- desestructurar:
  - `titulo`
  - `prioridad`
  - `completada`
- leer también:
  - `detalle.descripcion`
  - `detalle.fechaLimite`
  - `asignado.nombre`

#### 7. Completar datos faltantes

Si faltan datos, debes reemplazarlos por:

- `descripcion` → `"Sin descripción"`
- `fechaLimite` → `"Sin fecha límite"`
- `asignado.nombre` → `"Sin responsable"`

#### 8. Construir el texto final

Cada resumen debe tener este formato:

- si `completada` es `true`, debe iniciar con `[HECHA] `
- luego:
  `titulo - prioridad - responsable - fecha límite`

Ejemplo:

```txt
[HECHA] Estudiar React - Alta - Saul - Mañana
```
