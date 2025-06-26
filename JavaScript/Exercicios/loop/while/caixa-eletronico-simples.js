/*
Desafio: Caixa Eletrônico Simples

Objetivo: Simular um caixa eletrônico que permite depósitos e saques, até o usuário digitar a opção "sair".

Regras:
O saldo começa em 0.

Pergunte ao usuário a operação que ele quer fazer:
Digite "1" para depositar, "2" para sacar, ou "0" para sair.

Se escolher:
1 (depósito): peça o valor e some ao saldo.
2 (saque): peça o valor e subtraia, mas só se houver saldo suficiente.
0: encerra o programa.
Ao final, exiba o saldo final.
*/

var saldo = 0;
var opcao = Number(prompt('Digite "1" para depositar, "2" para sacar, ou "0" para sair.'))
var valorDigitado = 0;

while(opcao !== 0){
    while(opcao === 1){
        valorDigitado = Number(prompt('Digite o valor '))
        saldo += valorDigitado;
        console.log('Saldo atual ' + saldo)
        opcao = Number(prompt('Digite "1" para depositar, "2" para sacar, ou "0" para sair.'))
    } 
    while(opcao === 2){
        valorDigitado = Number(prompt('Digite o valor '))
        saldo -= valorDigitado;
        console.log('Saldo atual ' + saldo)
        opcao = Number(prompt('Digite "1" para depositar, "2" para sacar, ou "0" para sair.'))
    } 
}
console.log('Saldo ', saldo)








