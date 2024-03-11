/*
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
const array = [3, 6, 12, 5, 100, 1 ];

function bubble(){
    const n = array.length;

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if( array[j] > array[j + 1]){
                const m = array[j];
                array[j] = array[j + 1];
                array[j + 1] = m;
            }
        }
    }
    //console.log(`El array en orden es: ${arreglo}`);
    return `El array en orden es: ${array}`;
}

//bubble(array);

function mostrar(){
    const resultadoElemento = document.getElementById("resultado");
    const resultado = bubble();
    resultadoElemento.innerHTML = resultado;
}
