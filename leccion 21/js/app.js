console.log("app calculadora");

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) resultado = "la operación no incluye numeros"
    document.getElementById("resultado").innerHTML =`Resultado: ${resultado}` ;
}