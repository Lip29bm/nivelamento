function autorizar(anoDeNascimento: number, anoAtual: number) {
    anoAtual - anoDeNascimento >= 18
      ? console.log("tem autorizacao")
      : console.log("nao tem autorizacao");
  }
  autorizar(2006, 2024);
  