/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i=1; i <= 20; i++ ) {
    console.log(i);
}
"--------------------------------"
let i=1;
while (i<=20) {
    console.log(i);
    i++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let total
for (let sum=0, i=0; i<=100; i++) {
    sum += i;
    total = sum;
}
console.log(total);

"----------------------------------------"
let total2;
let sum = 0;
i=0;
while(i<=100){
    sum += i++;
    total2=sum;
}
console.log(total2);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i=1; i<=50; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["Luis","Gerardo","Darwin","Albert","Galileo"]
while (myArray.length>0) {
    console.log(myArray.shift());
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "contando vocales de esta cadena";
let contadorVocales = 0;
let vocales = "aeiouAEIOU";

for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        contadorVocales++;
    }
}
console.log(`El número de vocales en la cadena es: ${contadorVocales}`);

//for of, me parece la opcion mas simple para este bucle
//let cadena = "contando vocales de esta cadena";
//let contadorVocales = 0;
//let vocales = "aeiouAEIOU";

for (let caracter of cadena) {
    if (vocales.includes(caracter)) {
        contadorVocales++;
    }
}
console.log(`El número de vocales en la cadena es: ${contadorVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArray2 = [1, 2, 3, 4, 5];
let producto = 1;

for (let nums of myArray2) { 
    producto *= nums;
}
console.log(`El producto de los números es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let m=0;
do{    
    console.log(`5*${m} => `+ 5*`${m}`);
    m++
}while(m <= 12)

// 8. Usa un bucle para invertir una cadena de texto
let cadena1 = "Hola, se me entiende?";
let cadenaInvertida = "";

for (let i = cadena1.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena1[i];
}
console.log(`La cadena invertida es: "${cadenaInvertida}"`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let n = 10;
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) { 
    let siguiente = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(siguiente);
}
console.log(fibonacci);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let myArray3 = [1,2,3,10,11,15,20,30,50]
let newArray4 = []
for(let value of myArray3){
    if(value > 10) {
        newArray4.push(value);
}}
console.log(newArray4)
