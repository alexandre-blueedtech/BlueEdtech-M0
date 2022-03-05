const prompt = require('prompt-sync')();
const l1 = "\n";
/*Fácil
 
1. Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!"

2. Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

3. Faça um programa que mostre na tela uma letra de música que você gosta.

4. Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

5. E os 10% do garçom?
        >Defina uma variável para o valor de uma refeição que custou R$ 42,54;
        >Defina uma variável para o valor da taxa de serviço que é de 10%;
        >Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

6. Qual o valor do troco?
    >Defina uma variável para o valor de uma compra que custou R$100,98;
    >Defina uma variável para o valor que o cliente pagou R$150,00;
    >Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

7. Você está na flor da idade?
    >Defina uma variável para o valor do ano do nascimento;
    >Defina uma variável para o valor do ano atual;
    >Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

8.Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
    >DOLAR
    >EURO
    >LIBRA ESTERLINA
    >DÓLAR CANADENSE
    >PESO ARGENTINO
    >PESO CHILENO
Para esse exercício você precisará realizar uma pesquisa para saber a cotação dAe cada moeda em real. Mostrar o resultado no formato U$9999.99*/

/*
const e1 = "O primeiro programa a gente nunca esquece!";
console.log(e1);
*/

/*
const nomeC = prompt("Seu nome completo: ");
const rua = prompt('Onde você mora: ');
const cep = prompt('Seu CEP: ');
const tel = prompt('Seu número de telefone: ');
const e2 = ("\n\nSeu nome é: " + nomeC + "\nVocê reside em: " + rua + "\nSeu Cep é: " + cep + " & E seu número de telefone é: " + tel);
console.log(e2);
*/

/*
const e3 = "\n\nI'm going back to 505\nIf it's a seven hour flight or a forty-five minute drive\nIn my imagination, you're waitin' lyin' on your side\nWith your hands between your thighs\n\n"
console.log(e3);
*/

/*
const prato1 = "\n1. Risoto de camarão";
const prato2 = "2. Pizza de frigideira";
const prato3 = "3. Carne com legumes\n";
console.log(prato1);
console.log(prato2);
console.log(prato3);

const e4 = parseFloat(prompt("Digite a opção desejada: "));
if (e4 == 3){
    console.log("\nA opção escolhida foi 'Carne com legumes'.")
} else if (e4 == 2){
    console.log("A opção escolhida foi 'Pizza de Frigideira'.")
} else if (e4 > 3 || e4 < 1){
    console.log("Não temos essa opção no cardápio. Tente Novamente!")
} else {
    console.log("A opção escolhida foi 'Risoto de camarão'.\n")
}
*/

/*
const ref = 42.54;
const serv = 0.10;
const e5 = (ref*serv).toFixed(2);
console.log("\nO valor da Taxa de sEreviço do garçom é: R$",e5, "\n");
*/

/*
const valorC = 150.00;
const valorc = 100.98;
const e6 = (valorC-valorc).toFixed(2);
console.log("\nO troco do cliente é: R$", e6, "\n");
*/

/*
console.log(l1);
const ant = parseInt(prompt('Qual é o ano do seu nascimento? '));
console.log(l1);
const atu = parseInt(prompt('Que ano você está? '));
const e7 = (atu - ant);
const e7e = (e7 - 1);
console.log("\nVocê está na flor da idade com os seus ", e7e, " ou ",e7," anos!!\n" );
*/

/*
console.log(l1);
const converter = " 'DOLAR' , 'EURO' , 'LIBRA-ESTERLINA' , 'DÓLAR-CANADENSE' , 'PESO-ARGENTINO' , 'PESO-CHILENO'";
console.log(converter);
const Real = parseFloat(prompt('Digite o  valor em real que você deseja converter para as opções desejadas, R$ '));
console.log("Valores referentes a data de 09/02/2022 - 23:00 hrs");

const DOLAR = (0.19 * Real).toFixed(2);
console.log("\nO valor de R$", Real," Equivalem a US$", DOLAR," Dolar ou Dólares Americanos!");

const EURO = (0.17 * Real).toFixed(2);
console.log("O valor de R$", Real," Equivalem a €", EURO," EUROS!");

const LIBRAESTERLINA = (0.14 * Real).toFixed(2);
console.log("O valor de R$", Real," Equivalem a £", LIBRAESTERLINA," Libras Esterlinas!");

const DOLARCANADENSE = (0.24 * Real).toFixed(2);
console.log("O valor de R$", Real," Equivalem a C$", DOLARCANADENSE," Dolar ou Dólares Canadenses!");

const PESOARGENTINO = (20.23 * Real).toFixed(2);
console.log("O valor de R$", Real," Equivalem a $", PESOARGENTINO," Pesos - Argentinos!");

const PESOCHILENO = (155.28 * Real).toFixed(2);
console.log("O valor de R$", Real," Equivalem a CLP$", PESOCHILENO," Pesos - Chilenos!", "\n");
*/

/*ou*/

/*
let moeda = ["NaN","Dólar","Euro","Libra Esterlina","Dólar Canadense","Peso Argentino","Peso Chileno"];
let taxa = [0.0,0.19,0.17,0.14,0.24,20.23,155.28];

console.log(`\n--> Moedas:\n \n1 - ${moeda[1]} \n2 - ${moeda[2]} \n3 - ${moeda[3]} \n4 - ${moeda[4]} \n5 - ${moeda[5]} \n6 - ${moeda[6]}\n`);

let escolha = parseInt(prompt("Escolha uma moeda: "));

if (escolha > 6 || escolha < 1) {
    console.log(`\nEscolha uma moeda valida\n`)
} else {
    console.log(`\nMoeda escolhida: ${moeda[escolha]}\n`)

let valor = parseFloat(prompt("Insira um valor em R$ "))
console.log(`\nO valor de R$ ${valor} Equivale a $ ${valor * taxa[escolha]} em ${moeda[escolha]}.\n`)
}
*/

/*Médio

1. Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
    >Crie uma variável para receber o valor, com conversão para inteiro
    >Para um número ser par, a divisão dele por 2 tem que dar resto 0

2. Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.

3. Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" se os números forem iguais.

4. Crie um programa em Javascript que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0

    >Se a nota for menor que 6.0, deve exibir a nota F.
    >Se a nota for de 6.0 até 7.0, deve exibir a nota D.
    >Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
    >Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
    >Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

5. Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
    
    >Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    >salários até R$ 280,00 (incluindo) : aumento de 20%
    >salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    >salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    >salários de R$ 1500,00 em diante : aumento de 5%
    
Após o aumento ser realizado, informe na tela:
  
    >o salário antes do reajuste;
    >o percentual de aumento aplicado;
    >o valor do aumento;
    >o novo salário, após o aumento.

6. Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.

7. Utilizando laço, imprima a tabuada do 8 na tela.

8. Agora, imprima todas as tabuadas do número 1 ao 10.
*/

/*
console.log(l1);
const e9 = parseInt(prompt('Digite o um número: ')); 

if (e9 % 2 == 0) {
    console.log("\nO número digitado é par!\n")
} else {
    console.log("\nO número digitado é ímpar!\n")
}
*/

/*
console.log(l1);
const e10 = parseInt(prompt('Digite o um número: ')); 

if (isNaN(e10))
{console.log("\nInsira um número inteiro, Por Favor!\n")}

if (e10 > 0) {
    console.log("\nO número digitado é positivo!\n")
} else if (e10 < 0) { 
    console.log("\nO número digitado é negativo!\n")
} else if (e10 == 0) {
    console.log("\nInsira um numero diferente de Zero\n")
}
*/

/*
console.log(l1);
console.log("Verifica qual número é maior ou se são iguais\n")
const e11a = parseInt(prompt('Digite o primeiro número: ')); 
const e11b = parseInt(prompt('Digite o segundo número: ')); 

if (isNaN(e11a || e11b)){
    console.log("\nInsira um número inteiro, Por Favor!\n")
}

if (e11a > e11b) {
    console.log(`\nO maior número digitado é ${e11a}!\n`)
} else if (e11b > e11a) { 
    console.log(`\nO maior número digitado é ${e11b}!\n`)
} else if (e11a == e11b) {
    console.log("\nOs números são iguais!\n")
}
*/

/*
console.log(l1);
const e12 = parseFloat(prompt(`Informe o seu resultado: `));

if (isNaN(e12)){
    console.log("\nInsira um número inteiro, Por Favor!\n")
}

if (e12 < 6){
    console.log("\nSua nota é F\n")
} else if (e12 >= 6 && e12 <= 7) {
    console.log("\nSua nota é D\n")
} else if (e12 > 7 && e12 <= 8) {
    console.log("\nSua nota é C\n")
} else if (e12 > 8 && e12 <= 9) {
    console.log("\nSua nota é B\n")
} else if (e12 > 9 && e12 <= 10) {
    console.log("\nSua nota é A\n")
}
*/

/*
let salario = ["NaN","Até R$ 280,00", "Entre R$ 280,00 e R$ 700,00 ", "Entre R$ 700,00 e R$ 1500,00", "De R$ 1500,00 em diante "];
let aumento = [0, 0.20, 0.15, 0.10, 0.5];
let jeito = ["0","20%","15%","10%","5%"]
console.log(`\n--> Escolha abaixo a opção que se adéqua a sua situção:\n \n1. ${salario[1]} \n2. ${salario[2]} \n3. ${salario[3]} \n4. ${salario[4]}\n`);

let escolha = parseInt(prompt("Digite seu opção: "));

if (isNaN(escolha) || escolha > 4 || escolha < 1) {
    console.log(`\nEsta opção não é valida:\n`)
} else {
    console.log(`\nOpção escolhida: ${salario[escolha]}\n`)
}

const e13 = parseInt(prompt(`Informe o seu salário R$ `));
const aum = (aumento[escolha] * e13).toFixed(2); 
const sa  = (aumento[escolha] * e13) + e13;
let valor = [e13];

if (valor[0] > 280 && escolha == 1){
    console.log("Você digitou números incompátiveis com o seu salário");
} else if(valor[0] > 700 && escolha == 2 || valor[0] < 280 && escolha == 2){
    console.log("Você digitou números incompátiveis com o seu salário");
} else if(valor[0] > 1500 && escolha == 3 || valor[0] < 700 && escolha == 3){
    console.log("Você digitou números incompátiveis com o seu salário");
} else if (valor[0] < 1500 && escolha == 4){
    console.log("Você digitou números incompátiveis com o seu salário"s);
} else {
    console.log(`\nO salário antes do reajuste é igual há R$ ${e13}
                 \nO percentual de aumento aplicado foi de ${jeito[escolha]}
                 \nO valor do aumento é de R$ ${aum}
                 \nO salário atual está em R$ ${sa}\n`)
}
*/
/*
let min = ["0", "Tabuada do 1 -",
                "Tabuada do 2 -",
                "Tabuada do 3 -",
                "Tabuada do 4 -",
                "Tabuada do 5 -",
                "Tabuada do 6 -",
                "Tabuada do 7 -",
                "Tabuada do 8 -",
                "Tabuada do 9 -",
                "Tabuada do 10 -"]

console.log(`\n--> Escolha abaixo a opção de tabuada:\n \n1. ${min[1]} \n2. ${min[2]} \n3. ${min[3]} \n4. ${min[4]} \n5. ${min[5]} \n1. ${min[6]} \n7. ${min[7]} \n8. ${min[8]} \n9. ${min[9]} \n10. ${min[10]}\n`);
const escolha = parseInt(prompt("Digite a tabuada que deseja: "));

if (isNaN(escolha) || escolha > 10 || escolha < 1) {
    console.log(`\nEsta opção não é valida:\n`)
} else {
    console.log(`\nOpção escolhida: ${min[escolha]}\n`)
}
if(escolha >= 1 && escolha <= 10){
    for(let i = 0; i<= 10; i++){
    console.log(`\n${escolha} x ${i} = ${i*escolha}`)
    }
}*/
/*
Difícil
9.Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:

10.Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:

11.Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

12.Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
    >Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
    >Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

13.Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
    >Permitir que eu decida quantas rodadas iremos fazer;
    >Ler a minha escolha (Pedra, papel ou tesoura);
    >Decidir de forma aleatória a decisão do computador;
    >Mostrar quantas rodadas cada jogador ganhou;
    >Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    >Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.

14.Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
    >O programa tem que:
    >Perguntar quantas rodadas você quer fazer;
    >Perguntar quantos jogadores vão jogar;
    >Criar um objeto pra cada jogador com nome e número tirado;
    >Guarda todos os objetos em uma lista;
    >Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
    >Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão



//Terreno
/*
const largura = parseFloat(prompt(`Digite a largura do terreno: `));
const comprimento = parseFloat(prompt(`Digite o comprimento do terreno: `));
const area = (largura * comprimento) * 1 .toFixed(2)
console.log(`\nA área do terreno equilava há: ${area} medidas de comprimentos.\n`);
*/

/*
prompt("Digite a data: ")
const dia=  new date().getFullYear()//Para calcular anos
hoje = dia - data
let aniversario = prompt("Data de Nascimento (mm/dd/aaaa): ")
let aux1 = new Date(aniversario)
let mes_diff = Date.now() - aux1.getTime()
let aux2 = new Date(mes_diff)  
let anoaux = aux2.getUTCFullYear()
let idade = Math.abs(anoaux - 1970)
console.log(`\nVocê tem ${idade} anos`)
if (idade >= 18) {voto = ("obrigatório")}
else if (idade >= 16) {voto = ("opcional")}
else {voto = ("negado")}
console.log (`Nesta idade o seu voto é ${voto}\n`)
*/

/*
const now = moment(new Date());
const past = moment()
const day
const formatter = Intl.DateTimeFormat("pt-br", opcional)
console.log(formatter)
const day = ["day", "month", "year"]*
const tot = parseInt(prompt("Digite a data do seu nascimento")).split(`/`) ;
console.log(`Digite a data do seu nascimento: ${tot}`)
*/

/*
console.log(l1)
const dia = parseInt(prompt("Digite o dia do seu nascimento: "));
const mes = parseInt(prompt("Digite o mês do seu nascimento: "));
const ano = parseInt(prompt("Digite o ano do seu nascimento: "));
console.log(l1)

const tot =  (`${mes}/${dia}/${ano}`);
const data = Math.round((Date.now() - Date.parse(`${tot}`)) / 31_536_000_000)
console.log(`Você têm: ${data} anos`)

  if(data >= 18 && data <=70){
    console.log(`Seu voto é OBRIGATÓRIO`)
} else if (data >= 16 || data > 70 ) {
    console.log(`Seu voto é OPCIONAL`)
} else {
    console.log(`Seu voto é NEGADO`)
}
*/

/*
const numero_secreto = Math.floor(Math.random() * (11)) //Número de 0 a 10 
console.log("\n**************************************");
console.log("* Bem-vindos ao jogo da adivinhação! *");
console.log("**************************************");
console.log(l1);
console.log("Escolha o seu nível de dificuldade:");
console.log(numero_secreto)
let dificuldade = "F" || "M" || "D"
dificuldade = prompt("Fácil (F), Médio (M) ou Difícil (D): ").toUpperCase()
let numerodetentativas;

if(dificuldade == "F" ){
    numerodetentativas = 15;
} else if(dificuldade == "M"){
    numerodetentativas = 10;
} else if (dificuldade == "D"){
    numerodetentativas = 3;
} else {
    console.log("Digite uma opção válida!!");
    return
}

let tentativas = 0;

    for(tentativas = 1; tentativas <= numerodetentativas; tentativas++){

        console.log(`\nTentativa nº: ${tentativas}`);
        const chute = parseInt(prompt("Qual seu chute: "));
        console.log("O valor do seu chute é: " + chute);
        var nao_acertou = false;
        var acertou = chute == numero_secreto;
        var maior = chute > numero_secreto;
        var menor = chute < numero_secreto

        if (acertou){
            console.log("Parabéns! Você acertou o número secreto!\n")
            console.log("Fim de jogo!\n");
            break;
        } else if (maior){
            console.log("\nSeu chute foi maior que o número secreto!\n");
        } else if (menor){
            console.log("\nSeu chute foi menor que o número secreto!\n");
        } else if (nao_acertou){
            console.log("Fim de jogo!\n");
            console.log("Tente novamente!\n");
            console.log(`O número secreto era: ${numero_secreto}\n`)
        }
        console.log("Tente novamente!\n");
    }
*/

/*Busca na Internet
console.log("\nSite de pesquisas\n")
const t = parseInt(prompt("Digite quantas pessoas acessaram o  terceiro link: "))
const s = t * 2
const p = t * 4 || s * 2
console.log(`O número de pessoas que acessaram o segundo link pelas estimativas é de: ${s} pessoas`)
console.log(`O número de pessoas que acessaram o primeiro link pelas estimativas é de: ${p} pessoas`)
*/

/*
console.log("\n*** Caixa de Saque ***")
let ret = parseInt(prompt("Digite o valor que deseja retira R$ "))
const notas = [200,100,50,20,10,5,2,1]

for (nota of notas){
    var qtd = parseInt(ret / nota);
    console.log(`${qtd} notas(s) de R$ ${nota},00`)
    ret = ret % nota;
}

console.log(ret)*/

/*
let escolha2 = 1 
while (escolha2 == 1){
    let pontosJ = 0
    let pontosC = 0
    const Jokenpô = ["","Pedra","Papel","Tesoura"]
    const JokenpôM = ["","Pedra","Papel","Tesoura"]
    console.log("\n*** Jogo Jokenpô ***")
    console.log(l1)
    let escolha

do{ 
    escolha = parseInt(prompt("Digite o número de rodadas que quer jogar: "))
    if(escolha > 16){
        console.log("Ops... O limite de rodadas é 16.")
    } else if(escolha < 1){
        console.log("Como vai jogar sem rodadas?")
    } else if(isNaN(escolha)){
        console.log("Você digitou uma letra");
    } else {
        console.log(`O número de rodadas é ${escolha}.`)
    }
} while (escolha > 16 || escolha < 1 || isNaN(escolha)) 


    do{
        console.log("\nComo vai funcionar??? \nEscolha umas das três opções, e o retornaremos se você venceu ou não.")
        let tentativas

        for (tentativas = 1; tentativas <= escolha; tentativas++){
        let numero_secreto = Math.floor(Math.random() * (4 - 1) + 1)
        console.log(`\nVocê está na tentativa nª: ${tentativas}`);        //pedra           //papel            //tesoura
        console.log(`\n--> Escolha abaixo a sua opção no JOKENPÔ:\n \n1. ${Jokenpô[1]} \n2. ${Jokenpô[2]} \n3. ${Jokenpô[3]}\n`)
        var chute = parseInt(prompt("Qual sua escolha: "));
        console.log("Sua Escolha é " + (Jokenpô[(chute -0)]));
        console.log("A máquina escolheu: " + JokenpôM[numero_secreto])
        /*console.log(typeof JokenpôM[numero_secreto]);*/
        /*
        let result = Jokenpô[chute - 1]  
        let valor = JokenpôM[numero_secreto]

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
}   while(chute > 3 || chute < 1 || isNaN(chute))


    if(pontosJ > pontosC){
        console.log(`\n\nParabéns, com um total de ${pontosJ} pontos, você venceu o computador
que foi com ${pontosC} pontos <-> VOCÊ É O GRANDE CAMPEÃO`)
    } else if(pontosC > pontosJ){
        console.log(`\n\nLamento, com um total de ${pontosC} pontos, o computador venceu você,
que foi com ${pontosJ} pontos <-> O COMPUTADOR É O GRANDE CAMPEÃO`)
    } else {
        console.log("Não Tivemos um grande Campeão");
    }
    const joguen = ["1- Sim: Jogar novamente", "2- Não: Jogar novamente"]
    console.log(`\nVocê quer jogar novamente \n${joguen[0]}. \n${joguen[1]}.\n`)
    escolha2 = parseInt(prompt("Qual sua escolha: "));
    console.log(`Você escolheu ${joguen[escolha2 -1]}`)

    do {
        if (escolha2 > 2 || escolha2 < 1){
            console.log("Digite uma opção válida")
        } else if (escolha2 == 2) {
            console.log("Até mais!!")
        } else if (escolha2 == 1) {
            console.log("\n<-- Let's go!! -->")
        } else if (isNaN(escolha2)){
            console.log("Digite um número inteiro");
        }
    } while(escolha2 > 2 || escolha2 < 1 || isNaN(escolha2))
}
*/

/*
const num = []
let continuar = "S"

while(continuar == "S"){//Executa o comando "enquanto", atente-se ao enquanto...
    //Pois enquanto a petição estiver sendo atendida, o while não irá parar!!!1
    const number =+prompt("Digite um número: ") //o mais serve para indicar um ' number"

    if(!num.includes(number)){ //Fasle -> A exclamação serve para declarar o pedido como falso
        //Se "num" incluí o número não existe, adicione-o a lista(array)
        num.push(number)
    } else{ //True -> Se o número já existir na lista, no caso o array que está sendo lido, retorne
        //O console abaixo!!
        console.log("Esse número já existe na lista!!");
    }

    continuar =prompt("Quer continuar, [S/N]: ").toUpperCase()

    while(continuar != "S" && continuar != "N"){
    continuar =prompt("Quer continuar, [S/N]: ").toUpperCase()
    }
}
function crescente(a,b){
    return a - b
}

list = num.sort(crescente)
console.log(list)
*/

/*
let saque = parseInt(prompt("Escolha o valor do saque, entre R$10 e R$600: "))
let notas = [100,50,10,5,1];
let qtd = []

console.log (`\nPara o saque de R$ ${saque},00 serão necessarias:`)

    for (let i = 0; i < notas.length; i++) {
        qtd[i] = Math.floor(saque / notas[i])
        saque = saque - qtd[i]*notas[i]
        if(qtd[i]!=0){console.log(`${qtd[i]} notas de ${notas[i]}`)}
    } 
*/


//Como funciona esse programa, embora complexo, não é tão difícil
//Temos uma lista vazia e umas com os valores das notas
//Tenho um variável que vai receber as notas
//Um log para imprimir a mensagem 
//Explicação do for -> ele vai percorrer a extensão do arrey do 0 até o final, através
//das notas.length
//Após isso tenho qeu receber os valores da váriavel qtd[i], uso math.floor,
//Para descartar e resto e me dar um número interio
//Exemplo = 256/100 = 2.56
//Fico com dois e uso esse valor no....
//if(qtd[i]!=0){console.log(`${qtd[i]} notas de ${notas[i]}`)} para primeira nota
//Na segunda o processo se repete
