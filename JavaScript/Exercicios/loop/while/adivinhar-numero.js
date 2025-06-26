
/*
 * Jogo de Adivinhação
 * Conta tentativas até acertar um número entre 1 e 5
 */

var numero = Number(prompt('tente adivinhar o numero que estou pensando entre 1 e 5'));
var pc = Math.floor(Math.random() * 5) + 1;
var tentativas = 0;
// var pc = ParseInt(Math.random() * 5); => Outra forma de arredondar numeros com ponto flutuantes

while(numero !== pc){
    tentativas++;
    console.log('pc', pc)
    console.log('você errou o numero')
    numero = Number(prompt('tente adivinhar o numero que estou pensando entre 1 e 5'));
}

console.log('parabéns você acertou o numero depois de ' + tentativas + ' tentativas')

