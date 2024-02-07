"use strict";
function autorizar(anoDeNascimento, anoAtual) {
    anoAtual - anoDeNascimento >= 18
        ? console.log("tem autorizacao")
        : console.log("nao tem autorizacao");
}
autorizar(2006, 2024);
