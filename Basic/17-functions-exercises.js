/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
let a = 6
let b = 9
function sum(a,b){
    console.log("La suma de la funcion es: ", a+b);
}
sum (a, b) //suma con variables definidas
sum(4,5) //defiendo valores para la funcion

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArray = [1, 2, 3, 4];

function mayor(myArray) {
    let maximo = myArray[0];
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > maximo) { 
            maximo = myArray[i];
        }
    }
    console.log("El número mayor es:", maximo);
}
mayor(myArray);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let string1 = "cuantas vocales tiene";
let string2 = "AaEeiIOouU";
function contarVocales(string){
    let vocales = "aeiouAEIOU";
    let contador = 0
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes([string[i]])) {
            contador++;
        }     
    }console.log("Total de vocales: ",contador);
}
contarVocales(string1);
contarVocales(string2);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let array1 = ["hola", "hello", "bonjour"];

function arrayMayusc(array) {
    let nuevoArray = []; 
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase());
    }
    console.log(nuevoArray);
}

arrayMayusc(array1);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let num = 7;

function numPrimo(num) {
    if (num < 2) return false; // Los números menores que 2 no son primos

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(numPrimo(num));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array2 = [1, 2, "abc", "xyz", 6, 8, false];
let array3 = [2, "abc", 12, 15, false,"xyz"];

function datosComun(arrayA, arrayB) {
    let nuevoArray = arrayB.filter(elemento => arrayA.includes(elemento));
    console.log(nuevoArray)
}
datosComun(array2, array3);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let arrayNum = [1, 2, 3, 4, 8];

function suma(array) {
    let sumTotal = 0; 
    for (let i = 0; i < array.length; i++) { 
        if (array[i] % 2 === 0) {
            sumTotal += array[i]; 
        }
    }
    console.log(sumTotal);
}
suma(arrayNum);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let array = [1, 2, 3, 4, 5]

function arrayElev(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i]**2)
    }
    console.log(nuevoArray);
}
arrayElev(array);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadena = "una nueva cadena";

function invertirPalabras(cadena) {
    let palabras = cadena.split(" ");
    let palabrasInvertidas = palabras.reverse();
    let cadenaInvertida = palabrasInvertidas.join(" ");
    console.log(cadenaInvertida);
}
invertirPalabras(cadena);

// 10. Crea una función que calcule el factorial de un número dado
let numF = 5;

function factorial(numF) {
    let resultado = 1;
    if (numF < 0) {
        console.log("El factorial no está definido para números negativos.");
    }else{
        for (let i = 1; i <= numF; i++) {
            resultado *= i;
        }
        console.log(resultado);
    }
}
factorial(numF);
