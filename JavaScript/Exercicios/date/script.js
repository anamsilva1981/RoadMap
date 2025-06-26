/**
 * Exercício Prático: Trabalhando com Datas em JavaScript
 * 
 * Parte 1: Criação de Datas
 * Crie um objeto Date que represente:
 */

    // O dia do seu aniversário neste ano
    let aniversario = new Date(2025, 9, 31);
    console.log('exibir aniversario em 2025: ', aniversario)
    
    // O próximo Natal (25 de dezembro do ano atual)
    let natal = new Date(2025, 11, 25);
    console.log('exibir natal 2025: ', natal);    
    
    // Exatamente daqui a 100 dias a partir de hoje
    let dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 100)
    console.log('Exibe data atual + 100 ', dataAtual)

    
/*
Parte 2: Extração de Informações
Para a data atual (new Date()), determine:
 */

// // O dia da semana (0-6, onde 0 é Domingo)
// let diaSemana = new Date();
// diaSemana.getDay()
// console.log('diaSemana', diaSemana)

// O mês atual (lembrando que Janeiro = 0)
const hoje = new Date();
console.log('hoje', hoje)

const diaSemana = hoje.getDay(); // 0-6
console.log('diaSemana', diaSemana)

const mesAtual = hoje.getMonth(); // 0-11
console.log('mesAtual', mesAtual)

const horasUTC = hoje.getUTCHours();
console.log('horasUTC', horasUTC)

const minutosUTC = hoje.getUTCMinutes();
console.log('minutosUTC', minutosUTC)




/*
Parte 2: Extração de Informações
Para a data atual (new Date()), determine:





O horário atual no formato UTC

Parte 3: Cálculos com Datas
Calcule quantos dias se passaram desde o início deste ano até hoje

Determine quantos dias faltam para o próximo Natal

Calcule sua idade em dias (desde seu nascimento até hoje)

Parte 4: Formatação
Converta a data atual para:

Uma string legível (.toString())

Formato UTC (.toUTCString())

Formato ISO (.toISOString())

Desafio Bônus:
Crie uma função que recebe uma data de nascimento e retorna:

A idade da pessoa em anos

Quantos dias faltam para o próximo aniversário

O signo do zodíaco baseado na data de nascimento
*/