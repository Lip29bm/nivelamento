import  readlineSync from 'readline-sync';
function somandoNumeros(somaTotal:number):void{
  for(let i:number=0;i<=10;i++){
    let numeros:number=Number(readlineSync.question('Digite um numero: '));
    if(numeros<=-1){
      break;
    }
somaTotal+= numeros
  }
  console.log(`foram  ${somaTotal} numero(s)`)
}
somandoNumeros(0)
