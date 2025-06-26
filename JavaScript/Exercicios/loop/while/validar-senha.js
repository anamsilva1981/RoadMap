/*
 * Validação de Senha
 * Pede senha até que seja digitada a correta
 */

var senhaDigitada = prompt('Digite sua senha de acesso');
var senhaAtual = "angular123";

while(senhaDigitada !== senhaAtual){
    console.log('Senha incorreta');
    senhaDigitada = prompt('Digte sua senha novamente ')
}

console.log('Acesso liberado')