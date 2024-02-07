let variosNumeros: number[] =[32,78,34,65,2,7,9,23,90]
let pares:number=0
let somaPares:number=0
let impares:number=0
let quantiaNum:number=0
let somaTotal:number=0

for(let i :number= 0;i<variosNumeros.length;i++){
    quantiaNum++    
    somaTotal+=variosNumeros[i]
    if(variosNumeros[i]%2===0){
        pares++
        somaPares+=variosNumeros[i]
    }else{
        impares++
    }
   
}
let parMedia:number= somaPares/pares
let mediaGeral:number= somaTotal/quantiaNum
console.log(pares)
console.log(impares)
console.log(parMedia)
console.log(mediaGeral)
