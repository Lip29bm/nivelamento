function numeros(Inserido1:number, Inserido2:number):void{
    if(Inserido1 > Inserido2){
        let resultado1 = Inserido1 ** 0.5
        console.log(resultado1)
        let resultado2 = Inserido2 ** 2
        console.log(resultado2)
    }else{
        let resultado1 = Inserido2 ** 0.5
        console.log(resultado1)
        let resultado2 = Inserido1 ** 2
        console.log(resultado2)
    }

}
numeros(18,16)