class Persona{

    static contadorPersonas = 0;//atributos de la clase

    static get MAX_OBJ (){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log("Se han superdo el máximo de objetos permitidos")
        }
    }

// gets and sets
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
         this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    
    toString(){
        // Polimorfismo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde static");
    }
    static saludar2 (persona){
        console.log(persona.nombre + " " + persona.apellido);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;

    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;
        
    }

}

let persona1 = new Persona("Juan","Perez");
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas)

let persona2 = new Persona("Koala", "Cachin");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona("Benito", "Ramirez");
console.log(persona3.toString());

let persona4 = new Persona("Sacarias", "Piedarasdelrio");
console.log(persona4.toString());

let persona5 = new Persona("Laura", "Es");
console.log(persona5.toString());



console.log(Persona.MAX_OBJ);
