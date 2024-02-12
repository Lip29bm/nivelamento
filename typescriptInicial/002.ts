import readline from "readline-sync";
function fizzBuzz(): void {
  let j: number = Number(readline.question("Digite um numero:"));
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (j % 3 === 0) {
    console.log("FIZZ");
  } else if (j % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(String(j));
  }
}
fizzBuzz();
