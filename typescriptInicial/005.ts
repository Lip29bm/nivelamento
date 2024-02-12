import readline from "readline-sync"
function somaDobrada():void{
    let k:number = Number(readline.question("Digite um numero: "))
    let l:number = Number(readline.question("Digite um numero: "))
    if(k === l){
        let dobroDaSoma:number = k * 2 + l * 2
        console.log(dobroDaSoma)
    } else if(k < 1 || l < 1){
        console.log(-1)
    }else {
        let soma = l + k
        console.log(soma)
    }
}
somaDobrada()