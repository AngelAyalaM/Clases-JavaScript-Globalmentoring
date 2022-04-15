function miFuncion1(){
    console.log("funcion 1");
}
function miFuncion2(){
    console.log("funcion 2");
}

miFuncion1();
miFuncion2();

//Función de tipo Callback
function imprimir (mensaje){
    console.log(mensaje);
}

function suma(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

suma(5, 20, imprimir);

//llamadas asíncronas con usi setTimeout
function miFuncionCallback (){
    console.log("Saludo asíncromatico después de 3 seg");
}

setTimeout(miFuncionCallback,3000);

setTimeout(function(){console.log("Saludo asincrono 2")}, 4000);

setTimeout(()=> {console.log("Saludo asíncrono 3")}, 4000); 