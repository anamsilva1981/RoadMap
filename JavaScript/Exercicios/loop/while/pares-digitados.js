// Exercício: Quantos números pares você digitou?
// O programa pede ao usuário que digite um número por vez.
// Enquanto o número digitado for diferente de 0, ele continua pedindo.
// Durante esse processo, o programa conta quantos números pares foram digitados.
// Quando o usuário digitar 0, o programa encerra e exibe a quantidade total de números pares.


var numero = Number(prompt('Digite um numero '));
var totalPares = 0;

while(numero !==0){
    totalPares += (numero % 2 == 0) * 1;
    numero = Number(prompt('Digite outro numero: '));
}
console.log('Você digitou ' + totalPares + ' numeros pares.')









