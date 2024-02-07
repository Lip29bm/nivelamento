function notas4(nota1: number, nota2:number, nota3:number, nota4:number): void{
    let mostrarResultado = (nota1 + nota2 + nota3 + nota4) / 4
    if(mostrarResultado >= 7){
        console.log("APROVADO!")
    } else if(mostrarResultado < 7 && mostrarResultado >= 4){
        console.log("EXAME!")
       
    } else if (mostrarResultado < 4)
    console.log("REPROVADO!")
   else{
    console.log("ANALISE!")
   }

}
notas4(6,8,6,0)