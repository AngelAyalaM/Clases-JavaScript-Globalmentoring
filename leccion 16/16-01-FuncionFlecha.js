

let  miFuncion = function (){
    console.log("Dentro de la funcion");
}

/* const miFuncionFlecha = () => {
    console.log("saludos desde mi funcion flecha");
} */

//const miFuncionFlecha = () => console.log("saludos desde la funcion flecha");

//miFuncionFlecha();

/* const saludar = () => {
    return "saludos desde funcion flecha";
} */

const saludar = () => "saludos desde la flecha";

console.log(saludar());

const regresarObjeto = () =>({nombre: "juan", apellido: "Lopez"});
console.log(regresarObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("saludos con el parametro");

//const funcionConVariosParametros = (op1,op2) => op1 + op2;
const funcionConVariosParametros = (op1,op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(5,8));