"use strict";
function dataDeNascimento(dia, mes, ano) {
    const dataAtual = {
        dia: 25,
        mes: 1,
        ano: 2024,
    };
    const diasNoMes = 30;
    const mesesNoAno = 12;
    let anosDeVida = (dataAtual.ano - ano) - 1;
    let mesesDeVida = (anosDeVida * mesesNoAno) + (dataAtual.mes - mes);
    let diasDeVida = (mesesDeVida * diasNoMes) + (dataAtual.dia - dia);
    console.log(diasDeVida);
}
dataDeNascimento(29, 1, 2006);
