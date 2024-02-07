let definir:number[]=[9, 3, 5]
function decrescente (): void{
    definir.sort(function (a, b){
        return a-b
     })
     console.log(definir)
    }
decrescente()