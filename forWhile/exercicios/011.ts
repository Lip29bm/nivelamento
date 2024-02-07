import readline from "readline-sync";
function contandoNumeros(quatia:number):void{
  for(let i:number=0;i<=10;i++){
    let numeros:number=Number(readline.question('Digite um número: '));
    if(numeros<=-1){
      break;
    }
    quatia++
  }
  console.log(`foram digitados ${quatia} numero(s)`)
}
contandoNumeros(0)