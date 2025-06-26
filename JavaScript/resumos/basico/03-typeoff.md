# 🧪 `typeof` em JavaScript

O operador `typeof` é usado para **verificar o tipo de um valor** em tempo de execução. Ele retorna uma **string** indicando o tipo do dado analisado.

---

## ✅ Por que usar `typeof`?

- **Identificar o tipo de dados** armazenado em uma variável.
- **Evitar erros** ao aplicar operações incorretas em tipos diferentes.
- **Fazer validações** em funções que podem receber dados variados.
- Útil quando se trabalha com **valores vindos de formulários, APIs ou entradas dinâmicas**.

---

## 📦 Sintaxe

```js
typeof valor;
O resultado sempre será uma string, como "string", "number", "boolean", etc.

🧪 Exemplos por tipo

typeof "Olá";         // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" ← bug histórico do JS
typeof [1, 2, 3];     // "object"
typeof { nome: "Ana" };// "object"
typeof Symbol();      // "symbol"
typeof 10n;           // "bigint"
typeof function() {}; // "function"

🧠 Casos práticos do dia a dia

1. Validação de tipos em funções

function somar(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "Parâmetros inválidos";
}

somar(3, 5);         // 8
somar("3", true);    // "Parâmetros inválidos"

2. Verificar tipo antes de acessar propriedades

function imprimirTexto(texto) {
  if (typeof texto === "string") {
    console.log(texto.toUpperCase());
  } else {
    console.log("Erro: não é uma string.");
  }
}

3. Tratamento de entrada dinâmica

function tratarEntrada(entrada) {
  switch (typeof entrada) {
    case "string":
      console.log("É texto:", entrada);
      break;
    case "number":
      console.log("É número:", entrada * 2);
      break;
    case "boolean":
      console.log("É booleano:", entrada ? "Sim" : "Não");
      break;
    default:
      console.log("Tipo não tratado:", typeof entrada);
  }
}

🧾 Curiosidades:

typeof null retorna "object" devido a uma falha histórica no JavaScript.
typeof function() {} retorna "function" (apesar de funções serem objetos).

Em JavaScript, tudo que não é primitivo (como number, string, boolean, undefined, symbol, bigint, ou null) é do tipo "object".
Arrays são estruturas especiais que herdam de objetos, então para verificar se algo é um array, use: Array.isArray(valor); // true ou false
