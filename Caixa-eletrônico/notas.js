const prompt = require('prompt-sync')();
const l1 = "\n";

let saque = parseInt(prompt("Escolha o valor do saque, entre R$10 e R$600: "))
let notas = [100,50,10,5,1];
let qtd = []

console.log (`\nPara o saque de R$ ${saque},00 serão necessarias:`)

    for (let i = 0; i < notas.length; i++){
        qtd[i] = Math.floor(saque / notas[i])
        saque = saque - qtd[i]*notas[i]
        if(qtd[i] != 0){
            console.log(`${qtd[i]} notas de ${notas[i]}`)
        }
    } 

//Como funciona esse programa, embora complexo, não é tão difícil
//Temos uma lista vazia [qtd] && uma com os valores das [notas]
//Tenho um variável que vai receber as notas
//Um log para imprimir a mensagem. 
//Explicação do for -> ele vai percorrer a extensão do arrey do 100 até o 1, através do (notas.length...)
//Após isso tenho que receber os valores da váriavel qtd[i], uso math.floor,
//Para rceber um novo saque e me dar um número interio

