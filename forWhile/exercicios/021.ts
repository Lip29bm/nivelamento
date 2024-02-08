import readline from "readline-sync"
function primoOuNao(primo:number){
    let numeroInserido:number=Number(readline.question(`insira um numero aqui:`))
    let raiz:number=numeroInserido**0.5
    for(let i:number=2;i<=raiz;i++){
        if(numeroInserido<=0){
            break;
        }else if(numeroInserido%i===0){
            primo++
    }
}
if(primo>0){
    console.log(`o ${numeroInserido} nao e primo`)
}else{
    console.log(`o ${numeroInserido} e primo`)
}
}
primoOuNao(0)