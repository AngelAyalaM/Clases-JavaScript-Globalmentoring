
/*for(let contador = 0; contador < 3 ; contador++ ){
    console.log(contador);
}

console.log("fin ciclo for");
*/
inicio:
for(let contador = 0; contador <= 10; contador++){
    if (contador % 2 !== 0) {
        continue inicio;//ir a la siguente iteracion
    }
    console.log(contador);
}

console.log("fin ciclo for");