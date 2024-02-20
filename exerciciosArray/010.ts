function vetorDeNumeros():void{
    let lista: number [] = [
        50, 55, 60, 20, 40, 15, 12, 30, 90, 10 
    ]
    type objeto = { 
        numero:number 
        index:number
    }
    let numerosMaioresQueCinquenta:objeto [] = []
    for(let i:number = 0; i < lista.length; i++){ 
    if(lista[i] > 50){
   let numeroIdentificado: objeto = { 
    numero:lista[i],
    index:i
    }
    numerosMaioresQueCinquenta.push(numeroIdentificado)
}
}
if(numerosMaioresQueCinquenta.length <0){
    console.log("Nao existe nenhum número que atenda a esta condicao")
}else{
    console.log(numerosMaioresQueCinquenta)
}
}
vetorDeNumeros()