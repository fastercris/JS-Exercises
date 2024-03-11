/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1. Write a command that prints out all of the people in the list.
console.log(people);

//2. Write the command to remove "Dani" from the array.
people.splice(1, 1);
console.log(people);

//3. Write the command to remove "Juan" from the array.
people.splice(2, 1);
console.log(people);

//4. Write the command to move "Luis" to the front of the array.
people.splice(1,1);
people.unshift("Luis");
//people.splice(0,0, "Luis");
//people.splice(2,1);
console.log(people);

//5. Write the command to add your name to the end of the array.
people.push("Cristian");
console.log(people);

//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
const iterar = (personas, name) => {
    for(let i = 0; i < personas.length; i++){
        if( personas[i] === name){
            console.log(`Detuviste el loop en ${name}`);
            break;
        }
    }
}
iterar(people, "Maria");//si se le pone otro nombre que no esta en el arreglo no muestra nada

//7. Write the command that gives the indexOf where "Maria" is located.
console.log(people.indexOf("Maria"));