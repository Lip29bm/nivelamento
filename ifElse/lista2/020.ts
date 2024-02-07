function calculo(horastrabalhadas:number):void{
    const salarioMinimo: number = 1400
    const salarioPorHora: number = salarioMinimo/10
    console.log(salarioPorHora)
    let salarioBruto:number = salarioPorHora* horastrabalhadas
    console.log(salarioBruto)
    let imposto = salarioBruto * 0.03
    console.log(imposto)
    let salarioLiquido: number = salarioBruto - imposto
    console.log(salarioLiquido)
    }
    calculo(8)