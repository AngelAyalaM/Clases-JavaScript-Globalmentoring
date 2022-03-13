let suma = function (a=8, b=10){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}

let resultado = suma(5, 6, 9);
console.log(resultado);