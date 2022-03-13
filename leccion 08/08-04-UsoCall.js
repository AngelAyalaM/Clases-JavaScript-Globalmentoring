let persona1 = {
    nombre: "Juan",
    apellido: "Perizco",
    nombreCompleto: function(titulo,ID){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + ID;
    }
}

let persona2 = {
    nombre: "Dante",
    apellido: "Inferno"
}

//Uso call para usar metodo de un objeto a otro
console.log(persona1.nombreCompleto("Guerrero","45354"));

console.log(persona1.nombreCompleto.call(persona2, "Mago", "5645"));

// Uso apply
let arreglo = ["mago","54654"];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));
