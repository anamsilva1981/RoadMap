/*
 * Soma até parar
 * Soma números digitados até que seja informado 0
 */

var numero = Number(prompt('Digite um numero '));
var somar = 0;

while(numero !== 0){
    console.log('não é igual a zero')
    somar += numero;
    console.log(numero)
    numero = Number(prompt('Digite outro numero'))
}
console.log('Soma total ', somar)

