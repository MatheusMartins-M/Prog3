console.log("Aula part 2")
console.log("")

import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual seu nome? ", (name) => {
    console.log("Olá, "+ name);
});

