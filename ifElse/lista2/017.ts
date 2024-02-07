function medidas(medidaEmPes:number):void{
    const polegadasEmPes:number = 12
    const pesEmJardas:number = 3
    const jardasEmMilhas:number= 1760
    let medidaEmPolegadas:number= medidaEmPes * polegadasEmPes
    console.log(medidaEmPolegadas)
    let medidaEmJardas: number = medidaEmPes / pesEmJardas
    console.log(medidaEmJardas)
    let medidaEmMilhas:number =medidaEmJardas / jardasEmMilhas
    console.log(medidaEmMilhas)
}
medidas(1200000)