let algoritimo:number[]=[2, 5, 1]
function ascendente (): void{
    algoritimo.sort(function (a, b){
        return a-b
     })
     console.log(algoritimo)
    }
ascendente()