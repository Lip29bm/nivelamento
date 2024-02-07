function numeroQualquer(numero: number): void {
if (numero % 10 === 0) {
    console.log("É divisível por 10!");
  } else if (numero % 5 === 0) {
    console.log("É divisível por 5!");
  } else if (numero % 2 === 0) {
    console.log("É divisível por 2!");
  } else 
    console.log("Nao é divisível por 10, nem por 5 e nem por 2!");
  
}
numeroQualquer(20);
