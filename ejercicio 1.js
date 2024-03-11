/* 
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
   let phrase = "";
  for( let i=0 ; i<arr.length; i++){
    phrase += arr[i] + " ";
  }
  //console.log(`La frase es: ${phrase}`);
  return `La frase es: ${phrase}`;
}

function mostrar(){
  const resultadoElemento = document.getElementById("resultado");
  const resultado = printOutString();
  resultadoElemento.innerHTML = resultado;
}

//otra forma
console.log(arr.join(" "));

