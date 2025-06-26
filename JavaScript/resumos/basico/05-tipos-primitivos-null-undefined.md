# 🟡 Tipo `undefined` e `null` em JavaScript

## 🔹 O Tipo `undefined`

`undefined` significa literalmente "não definido".  

É o **valor padrão** que o JavaScript atribui a algo que **existe, mas ainda não recebeu um valor**.  
Pense nele como um _placeholder_ até que um valor real seja atribuído.

---

### 📍 Quando você encontra `undefined`?

#### 1. Variáveis declaradas, mas não inicializadas

```js
let nome;
console.log(nome); // Saída: undefined

var idade;
console.log(idade); // Saída: undefined

// const PI; // SyntaxError: 'const' declarations must be initialized.
2. Parâmetros de função que não foram passados

function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("Maria"); // Saída: Olá, Maria!
saudar();        // Saída: Olá, undefined!

3. Propriedades de objeto que não existem

const pessoa = {
  nome: "João"
};

console.log(pessoa.nome);  // Saída: João
console.log(pessoa.idade); // Saída: undefined

4. Retorno de funções sem return explícito

function fazerAlgo() {
  // Nenhum return
}

const resultado = fazerAlgo();
console.log(resultado); // Saída: undefined
🔸 O Tipo null
null representa a ausência intencional de qualquer valor ou objeto.

Diferente de undefined (que é atribuído pelo JavaScript), null deve ser atribuído explicitamente pelo desenvolvedor para indicar que "nada está ali, de propósito".

Pense em null como um ponteiro vazio.

📍 Quando usa null?

1. Atribuição manual para indicar ausência de valor

let meuObjeto = { dado: "valor" };
console.log(meuObjeto); // { dado: "valor" }
meuObjeto = null;       // agora está "esvaziado"
console.log(meuObjeto); // null

2. Retorno de funções que não encontraram nada: Muitas APIs retornam null quando nenhum valor é encontrado.

const elemento = document.getElementById('elementoQueNaoExiste');
console.log(elemento); // null

⚖️ Diferenças e Curiosidades

🔍 typeof null e undefined
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ← bug histórico

🔸 Mesmo que typeof null retorne "object", null ainda é um tipo primitivo.

🆚 Comparação == vs ===
✅ Igualdade fraca (==)
Compara os valores após coerção de tipo.

console.log(null == undefined); // true

🚫 Igualdade estrita (===)
Compara tipo e valor, sem coerção.
console.log(null === undefined); // false

🚦 Comportamento em condições (falsy values)
Tanto undefined quanto null são considerados falsy em contextos booleanos.

let variavelNaoDefinida;
let variavelNula = null;

if (variavelNaoDefinida) {
  console.log("Isso não será executado.");
}

if (variavelNula) {
  console.log("Isso também não será executado.");
}

❗ Por que a diferença importa?

✅ Evitar erros
Confundir null e undefined pode causar bugs difíceis de rastrear.

✅ Legibilidade do código
Usar null de forma intencional ajuda seu código a transmitir a intenção.

✅ Facilita a depuração
Saber distinguir se uma variável está undefined (não recebeu valor) ou null (esvaziada manualmente) facilita a investigação de problemas.

Em resumo:

🔹 undefined = "Ainda não há valor aqui" (atribuição do JS)
🔸 null = "Não há valor aqui, de propósito" (decisão sua)
