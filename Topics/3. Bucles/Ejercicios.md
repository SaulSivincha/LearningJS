
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