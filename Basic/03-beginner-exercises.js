/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// comentario de una linea✅

// 2. Escribe un comentario en varias líneas
/* Esto es
comentario de
varias lineas✅
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Luis"
let edad = 20
let isStudent = true
let undefinedValue
let sinvalor = null
//✅

// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(edad)
console.log(isStudent)
console.log(undefinedValue)
console.log(sinvalor)
//✅

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(nombre))
console.log(typeof(edad))
console.log(typeof(isStudent))
console.log(typeof(undefinedValue))
console.log(typeof(sinvalor))
//✅

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Gerardo"
edad = 21
isStudent = false
//✅
console.log(nombre)
console.log(edad)
console.log(isStudent)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 20
edad = "Luis"
isStudent = 1
//✅
console.log(typeof(nombre))
console.log(typeof(edad))
console.log(typeof(isStudent))

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const name = "Luis"
const year = 20
const isTeacher = true
//const undefinedValue
const nullValue = null
//✅
console.log(name)
console.log(year)
console.log(isTeacher)
console.log(nullValue)

// 9. A continuación, modifica los valores de las constantes
//const name = "Gerardo"
//const year = 21
//const isTeacher = false
//✅

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//Comente el ejercicio9 ya que no se pueden modificar los valores de un const
//✅