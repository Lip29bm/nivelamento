"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function fizzBuzz() {
    let j = Number(readline_sync_1.default.question("Digite um numero:"));
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    else if (j % 3 === 0) {
        console.log("FIZZ");
    }
    else if (j % 5 === 0) {
        console.log("BUZZ");
    }
    else {
        console.log(String(j));
    }
}
fizzBuzz();
