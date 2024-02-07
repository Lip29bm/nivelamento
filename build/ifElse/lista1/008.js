"use strict";
function notas4(nota1, nota2, nota3, nota4) {
    let mostrarResultado = (nota1 + nota2 + nota3 + nota4) / 4;
    if (mostrarResultado >= 7) {
        console.log("APROVADO!");
    }
    else if (mostrarResultado < 7 && mostrarResultado >= 4) {
        console.log("EXAME!");
    }
    else if (mostrarResultado < 4)
        console.log("REPROVADO!");
    else {
        console.log("ANALISE!");
    }
}
notas4(6, 8, 6, 0);
