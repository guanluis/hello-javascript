/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Concatenando"
let cadena2 = " cadenas de texto"
console.log(cadena1+cadena2)

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena1[0])
console.log(cadena1[11])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase())
console.log(cadena1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadena3 = `Esto es
una cadena de
texto de
varias lineas`
console.log(cadena3)

// 6. Interpola el valor de una variable en un string
let name = "Luis"
let last_name = "Guanilo"
console.log(`Mi nombre es ${name} y mi apellido es ${last_name}.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let guiones = "Los espacios en blanco seran reemplazados"
console.log(guiones.replaceAll(" ","--"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(guiones.includes("espacios"))

// 9. Comprueba si dos strings son iguales
console.log(last_name == name)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(last_name.length == name.length)
