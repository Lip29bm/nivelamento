"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function empresa(horaTrabalhada, descontoSalarioLiquidoMascuino, descontoSalarioLiquidoFeminino) {
    let salarioBruto = 0;
    let salarioLiquido = 0;
    let salarioTotalFeminino = 0;
    let mediaFeminina = 0;
    let mediaSalarioFeminino = 0;
    let salarioTotalMasculino = 0;
    let mediaMasculina = 0;
    let mediaSalarioMasculino = 0;
    let i = 0;
    while (i <= 6) {
        let codigoDeFuncionario = Number(readline_sync_1.default.question(`insira o codigo do funcionario:`));
        if (codigoDeFuncionario <= -11) {
            break;
        }
        let sexoFuncionario = String(readline_sync_1.default.question(`insira o sexo do funcionario:`));
        let horasTrabalhadasDoFuncionario = Number(readline_sync_1.default.question(`insira a quanidade de horas trabalhadas:`));
        if (sexoFuncionario == "f") {
            salarioBruto = horasTrabalhadasDoFuncionario * horaTrabalhada;
            salarioLiquido = salarioBruto * descontoSalarioLiquidoFeminino;
            salarioTotalFeminino += salarioLiquido;
            mediaFeminina++;
        }
        else {
            salarioBruto = horasTrabalhadasDoFuncionario * horaTrabalhada;
            salarioLiquido = salarioBruto * descontoSalarioLiquidoMascuino;
            salarioTotalMasculino += salarioLiquido;
            mediaMasculina++;
        }
        i++;
    }
    mediaSalarioFeminino = salarioTotalFeminino / mediaFeminina;
    mediaSalarioMasculino = salarioTotalMasculino / mediaMasculina;
    console.log(`a media de salario masculino e de ${mediaSalarioMasculino} e a feminina e de ${mediaSalarioFeminino}`);
}
empresa(26.9, 0.1, 0.06);
