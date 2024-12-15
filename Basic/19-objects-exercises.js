/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let person = {
    name: "Luis",
    age: 20,
    country: "Peru",
}

// 2. Accede y muestra su valor
console.log(person)
console.log(typeof person)

// 3. Agrega una nueva propiedad
person.email = "luis@gmail.com"
console.log(person)

// 4. Elimina una de las 3 primeras propiedades
delete person.country
console.log(person)

// 5. Agrega una función e invócala
person.walk = function(){
        console.log("Luis caminando...")
    }
person.walk()

// 6. Itera las propiedades del objeto
for (let key in person) {
    console.log(key+": "+ person[key])
}

// 7. Crea un objeto anidado
let person2 = {
    name: "Luis",
    age: 8,
    walk: function(){
        console.log("Juanito caminando...")
    },
    parents:{
        mother_name: "Noelia",
        father_name: "Romario",
        work: function(){
            console.log(`${this.mother_name} y ${this.father_name} estan trabajando.`)
        }
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person2.parents)
console.log(person2.parents.mother_name)
console.log(person2.parents.father_name)
person2.parents.work()

// 9. Comprueba si los dos objetos creados son iguales
console.log(person == person2)  //false
console.log(person === person2) //false

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(person.name === person2.name) //true
console.log(person.name === person2.age)  //false
