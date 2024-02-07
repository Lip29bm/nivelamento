function dataDeNascimento(dia: number, mes: number, ano: number): void {
const dataAtual: { dia: number; mes: number; ano: number } = {
    dia: 25,
    mes: 1,
    ano: 2024,
  };
  const diasNoMes:number= 30
  const mesesNoAno:number = 12
  let anosDeVida:number= (dataAtual.ano - ano) -1
  let mesesDeVida:number= (anosDeVida * mesesNoAno) + (dataAtual.mes - mes)
  let diasDeVida:number= (mesesDeVida* diasNoMes) + (dataAtual.dia - dia)
  console.log(diasDeVida)
}
dataDeNascimento(29, 1, 2006)
