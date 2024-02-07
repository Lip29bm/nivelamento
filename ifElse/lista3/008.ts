function multiplos(numero1 : number, numero2: number):  void{
    if( numero1 % numero2 ==0){
        console.log(`o numero ${numero1} e divisivel pelo numero ${numero2}`)
    }else{
        console.log(`o numero ${numero1} nao e divisivel pelo numero ${numero2}`)
    }
}
multiplos(9, 10)