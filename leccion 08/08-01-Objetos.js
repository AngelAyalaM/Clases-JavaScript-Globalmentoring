let x = 10;
console.log(x.length);

let persona = {
    nombre: "juan",
    apellido: "Pericos",
    email: "fjuan@mail.com",
    edad: 28,
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona);


let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Barrio bajo";
persona2.tel = "4565654";

console.log(persona2.tel);
