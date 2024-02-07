"use strict";
function medidas(medidaEmPes) {
    const polegadasEmPes = 12;
    const pesEmJardas = 3;
    const jardasEmMilhas = 1760;
    let medidaEmPolegadas = medidaEmPes * polegadasEmPes;
    console.log(medidaEmPolegadas);
    let medidaEmJardas = medidaEmPes / pesEmJardas;
    console.log(medidaEmJardas);
    let medidaEmMilhas = medidaEmJardas / jardasEmMilhas;
    console.log(medidaEmMilhas);
}
medidas(1200000);
