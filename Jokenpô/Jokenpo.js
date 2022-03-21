const prompt = require('prompt-sync')();
const l1 = "\n"; 

let jogarNovamente = 1 
while (jogarNovamente == 1){
    let pontosJ = 0
    let pontosC = 0
    const Jokenpô = ["","Pedra","Papel","Tesoura"]//Escolha Jogador
    const JokenpôM = ["","Pedra","Papel","Tesoura"]//Opções do PC
    console.log("\n*** Jogo Jokenpô ***")
    console.log(l1)
    let escolhaRodadas
    //Rodadas
do{ 
    escolhaRodadas = parseInt(prompt("Digite o número de rodadas que quer jogar: "))
    if(escolhaRodadas > 20){
        console.log("Ops... O limite de rodadas é 20.")
    } else if(escolhaRodadas < 1){
        console.log("Como vai jogar sem rodadas?")
    } else if(isNaN(escolhaRodadas)){
        console.log("Você digitou uma letra");
    } else {
        console.clear()
        console.log(`O número de rodadas é ${escolhaRodadas}.`)
    }
} while(escolhaRodadas > 20 || escolhaRodadas < 1 || isNaN(escolhaRodadas)) 
    //Fim Rodadas
    //Escolha do Jogador
    do{
        console.log("\nComo vai funcionar??? \nEscolha umas das três opções, e o retornaremos se você venceu ou não.")
        let tentativas
        for (tentativas = 1; tentativas <= escolhaRodadas; tentativas++){
        let numero_secreto = Math.floor(Math.random() * (4 - 1) + 1)//Sorteio do Pc
        console.log(`\nVocê está na tentativa nª: ${tentativas}`);        //pedra           //papel            //tesoura
        console.log(`\n--> Escolha abaixo a sua opção no JOKENPÔ:\n \n1. ${Jokenpô[1]} \n2. ${Jokenpô[2]} \n3. ${Jokenpô[3]}\n`)
        var chute = parseInt(prompt("Qual sua escolha: "));
        console.log("Sua Escolha é " + (Jokenpô[(chute - 0)]));
        console.log("A máquina escolheu: " + JokenpôM[numero_secreto])
            
    //Vencedor por Rodada
        if (chute > 3 || chute < 1){
            console.log("Você não digitou uma opção válida, tente novamente!!")
        } else if(isNaN(chute)){
            console.log("Digite um número");
        } else if (chute == numero_secreto){
            console.log("*** O VALOR É EMPATE ***")
        } else if (chute == 1 && numero_secreto == 3){
            console.log("*** PARABÉNS, 1 ponto para você ***")
            pontosJ++
        } else if(chute == 1 && numero_secreto == 2) {
            console.log("*** SINTO MUITO, 1 ponto para máquina ***")
            pontosC++
        } else if (chute == 2 && numero_secreto == 1){
            console.log("*** PARABÉNS, 1 ponto para você ***")
            pontosJ++
        } else if(chute == 2 && numero_secreto == 3) {
            console.log("*** SINTO MUITO, 1 ponto para máquina ***")
            pontosC++
        } else if (chute == 3 && numero_secreto == 2){
            console.log("*** PARABÉNS, 1 ponto para você ***")
            pontosJ++
        } else if(chute == 3 && numero_secreto == 1) {
            console.log("*** SINTO MUITO, 1 ponto para máquina ***")
            pontosC++
        } 
    }
        //Grande Campeão!
}   while(chute > 3 || chute < 1 || isNaN(chute))

        if(pontosJ > pontosC){
            console.log(`\n\nParabéns, com um total de ${pontosJ} pontos, você venceu o computador
que foi com ${pontosC} pontos <-> \nVOCÊ É O GRANDE CAMPEÃO`)
        } else if(pontosC > pontosJ){
            console.log(`\n\nLamento, com um total de ${pontosC} pontos, o computador venceu você,
que foi com ${pontosJ} pontos <-> \nO COMPUTADOR É O GRANDE CAMPEÃO`)
        } else {
            console.log("Não Tivemos um grande Campeão. Tivemos EMPATE");
        }
        const joguen = ["1- Sim: Jogar novamente", "2- Não: Jogar novamente"]
        console.log(`\nVocê quer jogar novamente \n${joguen[0]}. \n${joguen[1]}.\n`)
        jogarNovamente = parseInt(prompt("Qual sua escolha: "));
        console.log(`Você escolheu ${joguen[jogarNovamente -1]}`)
            
        //Jogar Novamente
        do {
            if (jogarNovamente > 2 || jogarNovamente < 1){
                console.log("Digite uma opção válida")
            } else if (jogarNovamente == 2) {
                console.log("Até mais!!")
            } else if (jogarNovamente == 1) {
                console.log("\n<-- Let's go!! -->")
            } else if (isNaN(jogarNovamente)){
                console.log("Digite um número inteiro");
            }
    } while(jogarNovamente > 2 || jogarNovamente < 1 || isNaN(jogarNovamente))
}
