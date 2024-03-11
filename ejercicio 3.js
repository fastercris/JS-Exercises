/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const array = [1, 2, 3, 4];

//Tengo duda de porque el resultado en esta funcion sale NaN de resultado. Gracias
function sumAndProduct() {
    let suma = 0;
    let multiplication = 1;
    for (const operacion of array){
        suma += array[operacion];
        multiplication *= array[operacion];
    }
    console.log(`La suma es: ${suma} y la multiplicacion es: ${multiplication}`);
}

sumAndProduct();

function sumAndProduct1(){
    let suma = 0;
    let multiplication = 1;
    for( let i=0; i<array.length; i++){
        suma += array[i];
        multiplication *= array[i];
    }
    //console.log(`La suma es: ${suma} y la multiplicacion es: ${multiplication}`);
    return `La suma es: ${suma} y la multiplicacion es: ${multiplication}`
}

function mostrar(){
    const resultadoElemento = document.getElementById("resultado");
    const resultado = sumAndProduct1();
    resultadoElemento.innerHTML = resultado;
}

//sumAndProduct1();

//otra forma
function sumAndProduct2(){
    const inic = 1;
    const inicial = 0;
    const sum = array.reduce( (acumulador, valor) => acumulador + valor, inicial);
    const multiplication = array.reduce( (ac, val) => ac * val, inic);
    console.log(`La suma es: ${sum} y la multiplicacion es: ${multiplication}`);
}

sumAndProduct2();


