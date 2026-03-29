
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
