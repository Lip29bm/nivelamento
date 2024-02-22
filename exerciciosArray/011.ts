import readline from "readline-sync";
type prova = {
  nome: string;
  questoes: boolean[];
  notaFinal?: number;
};
function corrigindoProvas(aprovados: number): void {
  let provasDaTurma: prova[] = [];

  const resultadoQuestoes: boolean[] = [];
  for (let j: number = 1; j <= 8; j++) {
    const resposta = readline.question(`responda a questao: `);
    if (resposta === "true") {
      resultadoQuestoes.push(true);
    } else {
      resultadoQuestoes.push(false);
    }
  }
  const gabarito: prova = {
    nome: `gabarito`,
    questoes: resultadoQuestoes,
  };
  const respostas: boolean[] = [];
  for (let i: number = 1; i <= 10; i++) {
    for (let j: number = 1; j <= 8; j++) {
      const resposta = readline.question(`responda a questao: `);
      if (resposta === "true") {
        respostas.push(true);
      } else {
        respostas.push(false);
      }
    }
    let fazendoProva: prova = {
      nome: String(readline.question(`digite seu nome: `)),
      questoes: respostas,
    };
    provasDaTurma.push(fazendoProva);
  }
  provasDaTurma.forEach(function (prova) {
    prova.questoes.forEach(function (questao,index) {
      if()
    });
  });
}
corrigindoProvas(0);
