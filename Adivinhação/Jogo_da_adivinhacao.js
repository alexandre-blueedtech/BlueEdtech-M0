const prompt = require('prompt-sync')();
const l1 = "\n"; 

let escolha 
const opc = ["","1. Sim","2. Não"]

do{
const numero_secreto = Math.floor(Math.random() * (11)) //Número de 0 a 10 
console.log("\n**************************************");
console.log("* Bem-vindos ao jogo da adivinhação! *");
console.log("**************************************");
console.log(l1);
console.log("Escolha o seu nível de dificuldade:");

let dificuldade = "F" || "M" || "D"
let numerodetentativas;

do{
    dificuldade = prompt("Fácil (F), Médio (M) ou Difícil (D): ").toUpperCase()

    if(dificuldade == "F" ){
        numerodetentativas = 15;
    } else if(dificuldade == "M"){
        numerodetentativas = 10;
    } else if (dificuldade == "D"){
        numerodetentativas = 3;
    } else {
        console.log("Digite uma opção válida!!");
    }

} while(dificuldade != "F" && dificuldade != "M" && dificuldade != "D");

let tentativas = 0;

    for(tentativas = 1; tentativas <= numerodetentativas; tentativas++){

        console.log(`\nTentativa nº: ${tentativas}`);
        const chute = parseInt(prompt("Qual seu chute: "));
        console.log(`O valor do seu chute é: ${chute}.`);
        var acertou = chute == numero_secreto;
        var maior = chute > numero_secreto;
        var menor = chute < numero_secreto

        if (acertou){
            console.log("Parabéns! Você acertou o número secreto!\n")
            console.log("Fim de jogo!\n");
            break
        } else if (maior){
            console.log("\nSeu chute foi maior que o número secreto!\n");
        } else if (menor){
            console.log("\nSeu chute foi menor que o número secreto!\n");
        } else{
            console.log("Fim de jogo!\n");
            console.log("Tente novamente!\n");
            console.log(`O número secreto era: ${numero_secreto}\n`)
        }
    }
        do {
            console.log(`Você quer jogar novamente? \n\n${opc[1]} \n${opc[2]}\n`);
            escolha = prompt("Digite uma opção: ")

            if (escolha > 2 || escolha < 1){
                console.log("Digite uma opção válida")
            } else if (escolha == 2) {
                console.log("Até mais!!")
            } else if (escolha == 1) {
                console.log("\n<-- Let's go!! -->")
            } else if (isNaN(escolha)){
                console.log("Digite um número inteiro.");
            }
        } while(escolha > 2 || escolha < 1 || isNaN(escolha))
    } while(escolha == 1)