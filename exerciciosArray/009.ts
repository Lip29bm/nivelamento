import readline from "readline-sync";
function verificarNotas(): void {
  type participantes = {
    nome: string;
    nota: number;
  };
  let chamada: participantes[] = [];
  let aprovados: participantes[] = [];
  for (let i: number = 1; i <= 200; i++) {
    let listandoChamada: participantes = {
      nome: String(readline.question(`nome do participante ${i}: `)),
      nota: Number(readline.question(`nota do participante ${i}: `)),
    };
    if (listandoChamada.nome == "" || listandoChamada.nota < 0) {
      break;
    }
    chamada.push(listandoChamada);
  }
  for (let i: number = 0; i < chamada.length; i++) {
    if (chamada[i].nota >= 70) {
      aprovados.push(chamada[i]);
    }
  }
  console.log(`lista de participantes: `);
  for (let participante of chamada) {
    console.log(`${participante.nome}: ${participante.nota}`);
  }
  console.log(`Lista de Aprovados: `);
  for (let participante of aprovados) {
    console.log(`${participante.nome}: ${participante.nota}`);
  }
}
verificarNotas();
