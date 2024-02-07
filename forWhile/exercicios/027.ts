function comparandoCrescimento(chico:number,ze:number,anosPassados:number){
    while(chico>=ze){
    chico+=0.02
    ze+=0.03
    anosPassados++
    }
    console.log(`foram necessarios ${anosPassados} anos para que ze ficasse mais alto que chico`)
    }
    comparandoCrescimento(1.50,1.10,0)