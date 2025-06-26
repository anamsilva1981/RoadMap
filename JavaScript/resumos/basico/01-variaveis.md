# 📚 Estudo sobre Variáveis em JavaScript

## 🧠 Resumo Geral

Este documento tem como objetivo revisar os comportamentos das declarações de variáveis em JavaScript (`var`, `let` e `const`), abordando tópicos como **hoisting**, **escopo**, **redeclaração**, **reatribuição** e **zona morta temporal (TDZ)**.

---

## 🔹 var

- Pode ser **redeclarada** dentro do mesmo escopo, o que pode causar **bugs difíceis de depurar**, pois sobrescreve valores anteriores sem erro.
- **Escopo de função** (não de bloco).
- Pode ser **reatribuída**.
- É **içada (hoisted)** ao topo do escopo, mas a **atribuição de valor** permanece na linha onde foi escrita.
- Se usada antes da declaração, seu valor será `undefined`.

**Exemplo de hoisting com `var`:**

```js
console.log(x); // undefined
var x = 5;

🔹 let
Não pode ser redeclarada no mesmo escopo. Se tentar, ocorre SyntaxError.

Tem escopo de bloco ({ ... }), o que torna o código mais previsível e seguro.

Pode ser reatribuída após a declaração.

Pode ser inicializada como undefined.

É içada, mas entra na Zona Morta Temporal (TDZ), ou seja, não pode ser acessada antes da sua declaração — se isso ocorrer, um ReferenceError será lançado.

Exemplo com TDZ:

console.log(y); // ReferenceError
let y = 10;

🔹 const
Não pode ser redeclarada nem reatribuída.

Deve ser inicializada no momento da declaração (caso contrário, ocorre SyntaxError).

Assim como let, possui escopo de bloco e também entra na TDZ.

Imutável em relação à referência, mas não torna objetos ou arrays imutáveis internamente.

Exemplo válido:
const z = 20; // OK

Exemplo inválido:
const a; // SyntaxError: Missing initializer

Nota importante:
Se const for usado com objetos ou arrays, as propriedades internas ainda podem ser alteradas:

const obj = { nome: "Ana" };
obj.nome = "Maria"; // Válido





