function preco(valorUnitario:number, quantidadeVendida:number){
    let valorTotalDaVenda = valorUnitario * quantidadeVendida
    if(valorTotalDaVenda > 100){
        console.log("Bonificaçao de 10% para o vendedor!")
 }else{
    console.log(valorTotalDaVenda)
 }
}
preco(1.50, 75)