/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array1 = [1, 2, 3]
let [n1, n2, n3] = array1
console.log(n1)
console.log(n2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [n4=10, n5=10, n6=10, n7=10] = array1
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: "Luis",
    age: 20
}

let {name, age} = person
console.log(person.name)
console.log(person.age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: nameNew, age: ageNew} = person
console.log(nameNew)
console.log(ageNew)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person2 = {
    name: "Luis",
    age: 20,
    address: {
        country: "Peru",
        city: "Trujillo",
    }
}
let{address: {country:countryNew}, address:{city:city2}} = person2
console.log(countryNew)
console.log(city2)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array2 = [20, "Veinte"]
let myArray = [...array1, ...array2]
console.log(myArray)

// 7. Usa propagación para crear una copia de un array
let arrayCopy = [...myArray]
console.log(arrayCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let myObject = {...person, ...person2}
console.log(myObject)

// 9. Usa propagación para crear una copia de un objeto
let objectCopy = {...myObject}
console.log(objectCopy)

// 10. Combina desestructuración y propagación
let country = ["Peru", "Mexico"]
let [country1, country2, country3="España"] = country
console.log(country1)
console.log(country2)
console.log(country3)
let [c1=country1, c2=country2] = country
console.log(c1+" y "+c2)

let countryCopy = [...country]
console.log(countryCopy)
