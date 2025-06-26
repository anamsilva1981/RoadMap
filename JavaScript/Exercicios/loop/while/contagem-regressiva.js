// Contagem Regressiva com while

// Descrição:
// Crie um programa que:
// Pede para o usuário digitar um número inteiro positivo.
// Usando apenas o while, o programa conta de forma regressiva até 0, mostrando os números um a um no console.


var numero = Number(prompt('Digite um numero '))

while(numero > 0){
    console.log(numero);
    numero--
}

console.log('Fim do while')




