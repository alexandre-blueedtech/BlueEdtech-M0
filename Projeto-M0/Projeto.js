//Projeto/
const prompt = require('prompt-sync')();
const l1 = "\n";
let escolha2 = 1
while (escolha2 == 1) {

    let classe = 0
    console.log("\n*****************************************************************************************************************************************");
    console.log("Detetive, o teste elaborado abaixo permite identificar através de sinais e comportamentos se o indivíduo é suspeito, culpado, ou inocente")
    console.log("*****************************************************************************************************************************************")
    console.log("   *** Ao anunciar a resposta de cada pergunta, lembre-se de responder com os números 1 ou 0, no caso, sim ou não respectivamente ***")

    let q1;
    do{
    console.log("\n\nVocê possui?");
    console.log("\n1. Boa Lábia: Você é bem articulado e ótimo “marketeiro” pessoal. Como um bom ator em cena, conquista as pessoas bajulando e contando histórias \nmirabolantes de si. Com meia dúzia de palavras difíceis, se passa por sociólogo, médico, filósofo, escritor, artista ou advogado. [S/N]:\n")
    q1 = prompt("R: ").toUpperCase();

    if (q1 != "S" && q1 != "N"){
        console.log("\nDigite uma opção válida.");
    }
}while(q1 != "S" && q1 != "N")

    let q2 
    do{
    console.log("\n\nVocê possui?")
    console.log("\n2. Ego Inflado: Você se acha a pessoa mais importante do mundo. Seguro de si, cheio de opinião, dominador. Adora ter poder sobre as pessoas e \nacredita que nenhum palpite vale tanto quanto suas ideias. [S/N]: \n")
    q2 = prompt("R: ").toUpperCase();
    if (q2 != "S" && q2 != "N"){
        console.log("\nDigite uma opção válida.");
    }
}while(q2 != "S" && q2 != "N")

    let q3
    do{
    console.log("\n\nVocê conta?")
    console.log("\n3. Mentiras sem limite: Mente tanto que às vezes não se dá conta de que está mentindo. [S/N]:\n")
    q3 = prompt("R: ").toUpperCase()
    if (q3 != "S" && q2 != "N"){
        console.log("\nDigite uma opção válida.");
    }
}while(q3 != "S" && q3 != "N")

    let q4 
    do{
    console.log("\n\nVocê possui?")
    console.log("\n4. Sentimentos Superficiais: Emoção só existe em palavras. Se namorar será pelo prazer e pelo poder sobre o outro, não por amor. Se perder um \namigo, não ficará triste.[S/N]:\n")
    q4 = prompt("R: ").toUpperCase()
    if (q4 != "S" && q4 != "N"){
        console.log("\nDigite uma opção válida.");
    }
}while(q4 != "S" && q4 != "N")

    let q5
    do{
    console.log("\n\nVocê teve?") 
    console.log("\n5. Má conduta na infância: Seus problemas aparecem cedo. Já começa a roubar, usar drogas, matar aulas e ter experiências sexuais antes dos 12 anos. \nSeu sadismo não poupa nem mesmo coleguinhas, irmãos ou animais. [S/N]:\n")
    q5 = prompt("R: ").toUpperCase()
    if (q4 != "S" && q4 != "N"){
        console.log("\nDigite uma opção válida.");
    }
}while(q5 != "S" && q5 != "N")

    if(q1 == "S"){classe++}
    if(q2 == "S"){classe++}
    if(q3 == "S"){classe++}
    if(q4 == "S"){classe++}
    if(q5 == "S"){classe++}

    if (classe >= 4){
        console.log("\n\n\nO proagnóstico revela que o indivíduo é considerado CULPADO\n\n")
    } else if (classe == 3){
        console.log("\n\n\nO proagnóstico revela que o indivíduo é considerado SUSPEITO\n\n")
    } else if (classe < 3) {
        console.log("\n\n\nO proagnóstico revela que o indivíduo é considerado INOCENTE\n\n")
    }

    do {
        const joguen = ["1- Sim: Jogar novamente", "2- Não: Jogar novamente"]
        console.log(`\nVocê quer jogar novamente \n${joguen[0]}. \n${joguen[1]}.\n`)
        escolha2 = parseInt(prompt("Qual sua escolha: "));
        
        if (escolha2 > 2 || escolha2 < 1){
            console.log("Digite uma opção válida")
        } else if (escolha2 == 2) {
            console.log("Até mais!!")
        } else if (escolha2 == 1) {
            console.log("\n<-- Let's go!! -->")
        } 
    } while(escolha2 > 2 || escolha2 < 1 || isNaN(escolha2))
}