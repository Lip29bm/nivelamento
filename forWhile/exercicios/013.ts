import readline from "readline-sync";
function identificarParOuImpar(totalPar:number, totalImpar:number):void{
    let i:number = 0
    while(i <10){
        let numeros:number = Number(readline.question(("digite um número:")))
        if(numeros < 0){
            break
        }else if(numeros %2 ===0){
            totalPar ++
        }else{
            totalImpar ++
        }
        i++
    } 
    console.log('foram digitados ' + totalPar + ' numeros pares e ' + totalImpar + ' numeros impares')
    
}
identificarParOuImpar(0, 0)









