// funcion constructor de objeto de tipo persona
function Persona (nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
} 


Persona.prototype.tel = "564423";


let padre = new Persona("Juan", "perez", "jperez@mail.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Laura", "Quintero", "Lquintero@mail.com");
console.log(madre.nombreCompleto());

// cambiar atributos
padre.nombre = "Carlos";
padre.tel ="5646545"; 
madre.tel = "6465468";
console.log(padre.tel );
console.log(madre.tel );

let miObjeto = new Object();
let miObjeto2 = {};
let miObjeto1 = new String ("Hola");
let miObjeto3 = "Hola";

let miNumero = new Number (1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray1 = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};


//----------------------------------------------------------------------------------------------
let persona = {
    nombre: "juan",
    apellido: "Pericos",
    email: "fjuan@mail.com",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +" "+ this.apellido;
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);