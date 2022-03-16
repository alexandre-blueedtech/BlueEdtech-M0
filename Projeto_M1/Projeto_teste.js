const prompt = require("prompt-sync")();

let jogarNovamente = 1
while (jogarNovamente == 1) {

    console.clear();
        console.log("\n   <- The Fire's Hunter - Chapter two ->\n")
        console.log("... Ao caçar o coelho e chegar até sua toca, a pequena Alice viu-se preste a filar o pequeno e dócil animal silvestre. No entanto, ao adentar-se na toca, que \npor sinal não era nada pequena, mal sabia ela o que lhe aguardava. Após entar, a  jovem caiu em uma armadilha deixada pelo coelho, que levava os intrusos ao \nPaís da maravilhas, onde todos comiam cogumelos de origem dividosas.");
        console.log("Ao que parecia uma viagem dimensional pelos arredores do espaço-tempo com vistas pitorescas e alucinantes, demorou meros 7 segundos para tudo voltar a ser como\nconhecemos, no caso, a triste ou gloriosa 'realidade'. Entretanto, num local totalmente distinto da qual a humanidade moderna conhece.");
        console.log("Talvez ou com toda certeza do mundo, Alice assimilou os novos horizontes com um livro infantil ou fantasioso que outrora, tivera lido.");
        console.log("Ao sentir a terra firme em seus pés, e olhar atentamente ao céu brilhante e estonteante que a cercava. A mesma maravilhou-se por um estendido instante, e ao \nobservar o que seus olhos presenciavam. Questionou-se.");
        console.log("\n- Está calor, o sol brilha, mas o porquê de uma aurora boreal em plena manhã?\n- Porquê os pássaros voam sem sua asas? \n- E por quê um chapeleiro maluco vem até mim?\n\n*** O Projeto começa agora!! ***\n\nBrevemente você troca de corpo com Alíce e o chapeleiro maluco se aproxima e faz 5 perguntas estranhas...\n\n");
        console.log("Se você souber as respostas ou concordar com as perguntas ou questinamentos, que são um tanto quanto confusos ou digamos filosofais, existenciais, etc...");
        console.log(`Responda-as com [sim/nao] ou [s/n] `);
        
        let perguntas = //Perguntas Para o usuário!!
                        ["1. Qual a semelhança entre um corvo e uma escrivaninha, você sabe?",
                         "2. Qual a graça de ser normal?\n   Afinal... Os loucos que são os destaques!!",
                         "3. Não leve o espelho tão a sério.\n   A verdadeira beleza está dentro de você. Concorda?",
                         "4. O único jeito de fazer o impossível, é acreditar que é possível?",
                         "5. Puxo de ti tuas lágrimas, edifico os mortos a vida novamente. Sou um efeito de instantes que perdura para sempre. Quem sou EU??."]

    let respostas // Respostas dos usuários S/N
    let result = 0 // Somas das Respostas
    let armazenandoRespostas = []

    for (let i = 0; i < perguntas.length; i++){
        do{
            console.log(`\n${perguntas[i]}`);
            respostas = prompt(`Digite a opção [s/n] ou [sim/nao]: `).toUpperCase()
            console.clear()
            if (respostas != "S" && respostas != "N" && respostas != "SIM" && respostas != "NAO"){
                console.log(`\nDigite uma opção válida como -> [s/n] ou [sim/nao] por favor`);
            }
        }while(respostas != "S" && respostas != "N" && respostas != "SIM" && respostas != "NAO")

        if(respostas == "S" || respostas == "SIM" || respostas == "N" || respostas == "NAO"){
            if(respostas == "S" || respostas == "SIM"){
                result ++
            }
            armazenandoRespostas.push(respostas)//Armazena respostas no -> Sim || Não
        }
    }

    console.clear()
    for (let j = 0; j < perguntas.length; j++) {
        console.log(`\n${perguntas[j]}\nR: ${armazenandoRespostas[j]}`);
    }

    if(result == 0){
        console.log("\nAo que tudo indica você é um ser humano normal.")
    } else if (result == 2 || result == 1){
        console.log("\nBom...Nada mal!");
    } else if (result == 3){
        console.log("\nA soma dos seus conhecimentos chega a ser boa mas pode ser superada.");
    } else if(result == 4){
        console.log("\nUm ávido leitor.");
    } else if (result == 5){
        console.log("\nAo que tudo indica você não é um ser humano normal.\nDesbravado e grade observador. além de um exímio pensador");
    }

    do {
        const options = ["1) Sim: Jogar novamente", "2) Não: Jogar novamente"]
        console.log(`\nVocê quer jogar novamente \n${options[0]}. \n${options[1]}.\n`)
        jogarNovamente =+ (prompt("Qual sua escolha: "));
        
        if (jogarNovamente != 2 && jogarNovamente != 1){
            console.log("Digite uma opção válida")
        } else if (jogarNovamente == 2) {
            console.log("Até mais!!")
        } else if (jogarNovamente == 1) {
            console.log("\n<-- Let's go!! -->")
        } 
    } while(jogarNovamente != 2 && jogarNovamente != 1)
}

