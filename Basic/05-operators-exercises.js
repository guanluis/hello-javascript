/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let sum = 5 + 10
let resta = 5 - 10
let mult = 5 * 10
let div = 5 / 10
let modulo = 5 % 10 //para saber el residuo de la operacion
let exponente = 5 ** 10
sum++ //incremento
sum-- //decremento
console.log(sum)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let newVariable = 2
newVariable += sum
newVariable -= resta
newVariable *= mult
newVariable /= div
newVariable %= modulo
newVariable **= exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let a = 2
let b = 20
console.log(a != b)
console.log(a == 2)
console.log(b >= 19)
console.log(a <= b)
console.log(a === 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a === "2")
console.log(a != 2)
console.log(a >= 3)
console.log(b <= 10)
console.log(a == true)

// 5. Utiliza el operador lógico and
console.log(b >= 10 && b <= 20)

// 6. Utiliza el operador lógico or
console.log(a === "2" || a == 2)

// 7. Combina ambos operadores lógicos
console.log(b >= 10 && b <= 25 || a === "2")

// 8. Añade alguna negación
console.log(!(a<b))

// 9. Utiliza el operador ternario
const isTall = false
isTall ?
console.log("You are tall") : console.log("You are small")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let c = 5 + 2
let d = 8
console.log(c >= d || !(c == 8))