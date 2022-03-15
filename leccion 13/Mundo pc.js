class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRaton = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRaton;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
      return `Raton: [idRaton: ${this.idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
    }
}  

let raton1 = new Raton("usb", "hp");
console.log(raton1.toString());
let raton2 = new Raton("usb", "dell");
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
      return `Teclado: [idTeclado: ${this.idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
    }
}

let teclado1 = new Teclado("usb","sky");
console.log(teclado1.toString());
let teclado2 = new Teclado("ubs", "genius");
console.log(teclado2.toString())

class Monitor {
    static contadorMonitor = 0;
    constructor(tamaño,marca){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._tamaño = tamaño;
        this._marca = marca;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    get marca (){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `Monitor: [idMonitor: ${this.idMonitor}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
    }
} 

let monitor1 = new Monitor(18, "Acer");
let monitor2 = new Monitor(15, "soft");
console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora {
    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor= monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

let computadora1 = new Computadora("HP", monitor1, raton1,teclado1);
let computadora2 = new Computadora("Armada", monitor2, raton2,teclado2);
console.log(`${computadora1}`);
console.log(`${computadora2}`);

class Orden {
    static contadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = []; 
    }

    get idOrden (){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orde1 = new Orden();
orde1.agregarComputadora(computadora1);
orde1.agregarComputadora(computadora2);
orde1.agregarComputadora(computadora2);
orde1.mostrarOrden();