import readline from "readline-sync";
function data(): void {
  let dataInserida: string = String(readline.question(`digite a data: `));
  let separaData: string[] = dataInserida.split(`/`);
  const dia: string = separaData[0];
  const mes: string = separaData[1];
  const ano: string = separaData[2];
  console.log(`dia: ${dia}, mes: ${mes}, ano: ${ano}`);
}
data();
