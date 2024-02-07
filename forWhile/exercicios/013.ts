let arraySeteNumeros: number[] = [32, 42, 1, 17, 39, 27, 8, 25]
let totalImpar:number = 0        
let totalPar:number = 0
for(let i:number=0; i<=arraySeteNumeros.length; i++ ){
    if(arraySeteNumeros[i]%2 ==0){
       totalPar ++
    } else if(arraySeteNumeros[i]%2 !=0){
        totalImpar ++ 
    }
}   
console.log(totalImpar)
console.log(totalPar)