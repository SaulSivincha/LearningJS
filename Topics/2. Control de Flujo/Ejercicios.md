
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