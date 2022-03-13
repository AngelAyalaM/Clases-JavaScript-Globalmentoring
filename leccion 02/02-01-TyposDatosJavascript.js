//tipo de datos string
var nombre = "Angel";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

// Tipo de dato numerico
var numero = 1000;
console.log(typeof numero);


//Tipo de dato object

var object = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}

console.log(object);

//Tipo de dato boolean (true , false)

var bandera = true

console.log(typeof bandera);

//tipo de dato function

function miFuncion (){}

console.log(typeof miFuncion);

//Tipo de dato Symbol

var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

// Tipo clase es una function

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Tipo undefined

var x;
console.log(typeof x);

// null = ausencia de valor
var y = null;

console.log(typeof y);

var autos = ['BMW','Audi','Volvo'];

console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);







