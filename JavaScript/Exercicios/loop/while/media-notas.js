/*Exercício: Média das notas
Nível: Intermediário

Objetivo:
Crie um programa que:
- Pede ao usuário para digitar notas (valores entre 0 e 10).
- Para encerrar, o usuário deve digitar o número -1.
- Enquanto não digitar -1, o programa:
- Soma todas as notas digitadas.
- Conta quantas notas foram digitadas.
- Quando o usuário digitar -1, o programa mostra a média das notas digitadas.
*/

var notas = Number(prompt('Digite a nota do aluno entre 0 e 10. Para encerrar o programa digite -1'));
var qtdeNotas = 0;
var somarNotas = 0;

while(notas !== -1){
    somarNotas += notas;
    notas = Number(prompt('Digite outra nota '))
    qtdeNotas++
}
console.log('A media total das notas foi : ' + media.toFixed(somarNotas / qtdeNotas))









