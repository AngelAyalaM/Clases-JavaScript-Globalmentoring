//Hoisting
miFuncion(5,8);

// Declarar función (se puede usar en cualquier momento en el codigo)
function miFuncion (a, b) {
    console.log(arguments.length);
    return a + b;
}

// Llamando a la función
let resultado = miFuncion(5,6);

console.log(resultado);

//Declaración funciones de tipo expreción 
let x = function (a, b){return a + b};

resultado = x(1, 3);
console.log(resultado);

(function (a,b){
    console.log("Dias para el death: " + (a + b));
})(5, 3);

console.log(typeof miFuncion);


var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

