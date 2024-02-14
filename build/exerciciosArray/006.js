"use strict";
function intervaloMedia() {
    let lista = [5.2, 6, 3.4, 7.4, 5.6, 8, 5, 6.4, 8.5, 5, 7, 9, 3.5, 2.3, 7.8, 4, 6.4, 3, 2.4, 5.6, 7.4, 7.4, 7, 4.6, 3.5, 2.4, 6.4, 3, 10, 7.4, 8.5, 2.4, 5.3, 6.4, 2.4, 5.3, 6, 4.6, 3, 2.4, 7, 5, 8.5, 4.6, 4.3, 7, 8.6, 5.4, 3.5, 8.5];
    let quantia = 0;
    let somaTotal = 0;
    let media = 0;
    let notasNoLimiteDaMedia = 0;
    for (let i = 0; i < lista.length; i++) {
        quantia++;
        somaTotal += lista[i];
    }
    media = somaTotal / quantia;
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] < (media * 1.1) && lista[j] > (media * 0.9)) {
            notasNoLimiteDaMedia++;
        }
    }
    console.log(notasNoLimiteDaMedia);
}
intervaloMedia();
