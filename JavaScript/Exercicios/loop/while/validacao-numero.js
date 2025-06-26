/*
 * Validação de Número
 * Pede um número até que seja digitado um valor maior ou igual a 10
 */

var numero = Number(prompt('Digite um numero'));

    while(numero < 10){
        console.log('Digite outro numero')
        numero = prompt('Digite outro numero')
    }
    
