let arrayA:number[] = [-10, -2, 3, 6, 8]
let negativo:number = 0


for(let j:number =arrayA[0]; j <= arrayA.length; j++){
    if(arrayA[j] < 0 ){
        negativo ++
    }
      
}

console.log(negativo)