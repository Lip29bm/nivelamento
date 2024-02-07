function identificar (numero:number):void {
    if(numero === 5){
        console.log(`o numero e igual a 5`)
    }else if(numero === 200){
        console.log(`o numero e igual a 200`)
    }else if(numero === 400){
        console.log(`o numero e igual a 400`)
    }else if(numero < 1000 && numero > 500){
        console.log(`o numero esta entre 500 e 1000`)
    }else{
        console.log(`o numero na se encaixa em nenhuma das condicionais anteriores`)
}
}
identificar(200)