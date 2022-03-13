let a = 10;

if(a % 2 == 0){
    console.log("Es un numero par");
}else{
    console.log("Es un numero impar");
} 


let edad = 20, adulto = 18;

if (edad >= adulto) {
    console.log("Es una adulto");
}else{
    console.log("Es menor de edad");
}

// Ejemplo And (&&) es verdadedro si y solo si todas las operaciones son verdaderas

a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("dentro del rango");
}else{
    console.log("Fuera de rango");
}
 
// Ejemplo OR (||) Es verdadero si cualquiera de las opciones es verdadera

let vacaciones = false, diaDescanso = true;

if (vacaciones || diaDescanso) {
    console.log("Padre puede asistir al juego del hijo");
} else {
    console.log("El padre está ocupado");
}



 