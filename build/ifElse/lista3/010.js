"use strict";
function emprestimo(salarioBruto, valorDaPrestacao) {
    let porcentagem = 1.3;
    let salarioPorCento = (salarioBruto * porcentagem) - salarioBruto;
    if (valorDaPrestacao > salarioPorCento) {
        console.log("O empréstimo nao pode ser concedido!");
    }
    else {
        console.log("O empréstimo pode ser concedido!");
    }
}
emprestimo(2000, 200);
