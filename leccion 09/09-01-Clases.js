class Persona{

    static contadorObjetosPersonas = 0;//atributos de la clase

    email ="Valor email";//atributo de los objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersonas++;
        console.log("Se incrementa el contador: " + Persona.contadorObjetosPersonas );
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
        return this._nombre + " " + this._apellido;
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
console.log(persona1.nombre);
console.log(persona1.toString());


let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar();<= esto no es posible
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersonas);
console.log(Persona.contadorObjetosPersonas);

console.log(Empleado.contadorObjetosPersonas);

console.log(persona1.email);
console.log(empleado1.email);
