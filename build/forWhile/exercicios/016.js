"use strict";
let medias = [6, "andre", 5.5, "julia", 8, "carol"];
let mediaPessoal = 0;
let aluno;
for (let i = 0; i <= medias.length; i++) {
    if (medias[i] > mediaPessoal) {
        mediaPessoal = medias[i];
        aluno = medias[i + 1];
    }
}
console.log(mediaPessoal + aluno);
