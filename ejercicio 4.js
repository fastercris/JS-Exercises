/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


function elementCommon(){
    for(let i=0; i<student1Courses.length; i++){
        for(let j=0; j<student2Courses.length; j++){
            if( student1Courses[i] === student2Courses[j]){
                //console.log(`El arreglo 1 ${student1Courses[i]} es igual al arreglo 2 ${student2Courses[j]}`);
                return `El arreglo 1 ${student1Courses[i]} es igual al arreglo 2 ${student2Courses[j]}`
            }
        }
    }
}
//elementCommon();

function mostrar(){
    const resultadoElemento = document.getElementById("resultado");
    const resultado = elementCommon();
    resultadoElemento.innerHTML = resultado;
}


//otra forma
function elementCommon1(){
    const result = student1Courses.filter((course1) => course1.length > 10);
    const result1 = student2Courses.filter((course2) => course2.length > 10);
    console.log(`El arreglo 1 ${result} es igual al arreglo 2 ${result1}`);

}

elementCommon1();