//Tipos primitivos
let x = 10;

function cambiarValor (a){
    a = 20;
}

//Paso por valor
cambiarValor(x);
console.log(x);

const persona = {
    nombre: "Jose",
    apellido: "Cardenas"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Juanito";
    p1.apellido = "Alimaña";
}

//paso por referencia
cambiarValorObjeto(persona);
console.log(persona);