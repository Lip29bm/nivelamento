import readline from "readline-sync";
function consercionaria(): void {
  const modelosDosCarros: string[] = [];
  const consumoDosCarros: number[] = [];
  let i: number = 0;
  while (i <= 5) {
    modelosDosCarros.push(readline.question(`qual o modelo do carro: `));
    consumoDosCarros.push(
      Number(readline.question(`quantos km esse carro az por litro: `))
    );
    i++;
  }
  let maisEconomico: number = 0;
  for (let j: number = 0; j < consumoDosCarros.length; j++) {
    if (consumoDosCarros[j] < consumoDosCarros[maisEconomico]) {
      maisEconomico = j;
    }
  }
  console.log(
    `o carro mais economico inserido foi o ${modelosDosCarros[maisEconomico]} rodando 1km com ${consumoDosCarros[maisEconomico]} litros de gasolina`
  );
  let gasolinaPor1000km: number = 0;
  for (let j: number = 0; j < modelosDosCarros.length; j++) {
    gasolinaPor1000km = 1000 / consumoDosCarros[j];
    console.log(
      `o carro ${modelosDosCarros[j]} precisa de ${gasolinaPor1000km} litros de gasolina para percorrer 1000km`
    );
  }
}
consercionaria();
