import readline from "readline-sync";
function corrigindoProvas(aprovados:number): void {
  type prova = {
    nome: string;
    questao1: number;
    questao2: number;
    questao3: number;
    questao4: number;
    questao5: number;
      questao6: number;
      questao7: number;
      questao8: number;
    notaFinal:number
  };
  let provasDaTurma1: prova[] = [
    {
      nome: "gabarito",
      questao1: 0,
      questao2: 1,
      questao3: 1,
      questao4: 0,
      questao5: 0,
      questao6: 0,
      questao7: 0,
      questao8: 0,
      notaFinal:4
    },
  ];
  for(let i :number=0;i<=10;i++){
    let fazendoProva:prova={
        nome: String(readline.question(`digite seu nome: `)),
        questao1: Number(readline.question(`a resposta da questao 1 e 0 ou 1? `)),
        questao2: Number(readline.question(`a resposta da questao 2 e 0 ou 1? `)),
        questao3: Number(readline.question(`a resposta da questao 3 e 0 ou 1? `)),
        questao4: Number(readline.question(`a resposta da questao 4 e 0 ou 1? `)),
        questao5: Number(readline.question(`a resposta da questao 5 e 0 ou 1? `)),
        questao6: Number(readline.question(`a resposta da questao 6 e 0 ou 1? `)),
        questao7: Number(readline.question(`a resposta da questao 7 e 0 ou 1? `)),
        questao8: Number(readline.question(`a resposta da questao 8 e 0 ou 1? `)),
        notaFinal:0
    }
    provasDaTurma1.push(fazendoProva)
  }
  for(let i:number=1;i<provasDaTurma1.length;i++){
if(provasDaTurma1[i].questao1 === provasDaTurma1[0].questao1){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao2 === provasDaTurma1[0].questao2){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao3 === provasDaTurma1[0].questao3){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao4 === provasDaTurma1[0].questao4){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao5 === provasDaTurma1[0].questao5){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao6 === provasDaTurma1[0].questao6){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao7 === provasDaTurma1[0].questao7){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].questao8 === provasDaTurma1[0].questao8){
    provasDaTurma1[i].notaFinal++
}if(provasDaTurma1[i].notaFinal>=6){
    aprovados++
}
console.log(`O aluno(a) ${provasDaTurma1[i].nome} tirou a nota ${provasDaTurma1[i].notaFinal} em sua prova`)
  }
  let porcentaemDeAprovacao: number=(aprovados/(provasDaTurma1.length-1))*100
console.log(`A porcentagem de aprovaca da turma foi de ${porcentaemDeAprovacao}%`)
}
corrigindoProvas(0)
