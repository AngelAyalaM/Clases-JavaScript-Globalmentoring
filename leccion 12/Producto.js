class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    
    set precio(precio){
        this._precio = precio;
    }

    toString (){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrden = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden (){
        return this._idOrden;
    }

    aregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        } else {
            console.log("no se pueden agregar más productos");
        }
    }
    
    calcularTotal(){
        let totalVentas = 0;
        for(let producto of this._productos){
            totalVentas += producto.precio;
        }
        return totalVentas;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += '\n{'+producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}

let producto1 = new Producto("Pantalon", 300);
let producto2 = new Producto("Camisa", 200);
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.aregarProducto(producto1);
orden1.aregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Cinturon", 50);
orden2.aregarProducto(producto3);
orden2.aregarProducto(producto1);
orden2.aregarProducto(producto2);
orden2.mostrarOrden();