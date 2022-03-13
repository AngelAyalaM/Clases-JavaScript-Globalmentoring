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
console.log(persona["apellido"]);

//for in 
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

// agregar o eliminar propiedad
persona.tel = "2321321";
persona.tel = "13535353";

console.log(persona);

delete persona.tel;

console.log(persona);

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString)