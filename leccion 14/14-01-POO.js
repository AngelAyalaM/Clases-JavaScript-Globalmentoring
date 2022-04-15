
class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles (){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log("Es un Gerente")
    }else if (tipo instanceof Empleado){
        console.log("Es un Empleado")
    }else if(tipo instanceof Object){
        console.log("Es un Empleado")
    }
}

let gerente = new Gerente("carlos", 400, "Sistemas");
console.log(gerente.obtenerDetalles());

let empleado1 = new Empleado("juanito", 422);
console.log(empleado1.obtenerDetalles());

determinarTipo(empleado1);
determinarTipo(gerente);