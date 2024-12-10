/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Luis"
if (name == "Luis") {
    console.log(name)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "lguan"
let password = "Luis123"

if (user == "lguan" && password == "Luis123") {
    console.log("Bienvenido! :D")
}else{
    console.log("Usuario o contraseña incorrecto. Intente nuevamente!")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 12

if (number < 0) {
    console.log("Tu numero es negativo")
} else if(number > 0){
    console.log("Tu numero es positivo")
} else{
    console.log("Tu numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 13
let anios_faltantes

if (edad >= 18) {
    console.log("Puede votar. Tiene edad suficiente.")
} else{
    anios_faltantes = 18 - edad
    console.log(`No puede votar. Le falta ${anios_faltantes} años para ser mayor de edad.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let op_ternario = edad >= 18 ? "adulto" : "menor"
console.log(op_ternario)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "diciembre"
let estación

if (mes == "enero" || mes == "febrero" || mes == "marzo"){
    estación = "Invierno"
}else if (mes == "abril" || mes == "mayo" || mes == "junio"){
    estación = "Primavera"
}else if (mes == "julio" || mes == "agosto" || mes == "septiembre"){
    estación = "Verano"
}else if (mes == "octubre" || mes == "noviembre" || mes == "diciembre"){
    estación = "Otoño"
}else{
    estación = "Estacion inexistente."
}
console.log(`Es ${mes}, estamos en ${estación}`)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias

if (mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || 
    mes == "octubre" || mes == "diciembre") {
    dias = 31
}else if (mes == "abril" || mes == "junio" || mes == "septiembre" || mes == "noviembre"){
    dias = 30
}else if (mes == "febrero"){
    dias = 28
}else{
    dias = 0
}

console.log(`El mes de ${mes} tiene ${dias} dias.`)


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "frances"
let saludo

switch(idioma){
    case "español" : 
        saludo = "Hola!"
        break
    case "ingles" : 
        saludo = "Hello!"
        break
    case "frances" : 
        saludo = "Bonjour!"
        break
    default: 
        saludo = "Idioma no registrado."
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case "enero","febrero", "marzo" :
        estación = "Invierno"
        break
    case "abril", "mayo", "junio" :
        estación = "Primavera"
        break
    case "julio", "agosto", "septiembre" :
        estación = "Verano"
        break
    case "octubre", "noviembre", "diciembre" :
        estación = "Otoño"
        break
    default :
        estación = "Estación inexistente"
}
console.log(`Es ${mes}, estamos en ${estación} (switch)`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case "enero","marzo","mayo","julio","agosto","octubre","diciembre":
        dias = 31
        break
    case "abril","junio","septiembre","noviembre":
        dias = 30
        break
    case "febrero":
        dias = 28
        break
    default:
        dias= 0
}
console.log(`El mes de ${mes} tiene ${dias} dias. (switch)`)
