'use strict'
try{
    let x=10;
    throw "mi error";

}catch(error){
    console.log(error)
}

finally{
    console.log("termina la revicion de errores")
}

console.log("Reparado");

let resultado = -2;

try{
    if (isNaN(resultado)) throw 'No es un numero';
    else if(resultado == '') throw "Es una cadena vacia";
    else if(resultado >= 0 ) throw "Valor Positivo";
    else if(resultado < 0 ) throw "Valor Negativo";

}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}