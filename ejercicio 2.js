/*
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

const array = [1,2,3,4,5];

function double(){
    array.forEach ( (numero, i , arr) => arr[i] = numero * 2);
    //console.log(array);
    return array;
}

//double();

function mostrar(){
  const resultadoElemento = document.getElementById("resultado");
  const resultado = double();
  resultadoElemento.innerHTML = resultado;
}

//otra forma

function double1(){
    array.map(i => i * 2);
    console.log(array);
}
double1();

//otra forma
function double2 (){
    let doble = [];
    for(let i=0; i<array.length; i++){
        doble.push (array[i] * 2);
    }
    console.log(doble);
}
double2();