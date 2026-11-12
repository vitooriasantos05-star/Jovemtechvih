const prompt = require('prompt-sync')();
const idade = Number(prompt('Digite sua idade: '));

if (!Number.isInteger(idade) || idade < 0) {
    console.log('Digite uma idade válida.');
} else if (idade >= 16) {
    console.log('Você pode votar.');
} else {
    console.log('Você ainda não pode votar.');
}
