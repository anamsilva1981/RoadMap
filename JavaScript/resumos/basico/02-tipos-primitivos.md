# 📘 Tipos Primitivos em JavaScript

Os tipos primitivos são os **valores mais básicos** da linguagem JavaScript. Eles são **imutáveis** e armazenados diretamente na memória. Diferente dos tipos por referência, **não possuem métodos ou propriedades**, mas o JavaScript os trata como objetos temporariamente em algumas situações.

---

## 🧩 Lista de Tipos Primitivos

### 1. **string**
Representa **textos**. Pode ser escrita entre aspas simples, duplas ou crase (template literals).

```js
let nome = "Ana";
let frase = 'Olá, mundo!';
let saudacao = `Oi, ${nome}!`;

2. number: Representa números inteiros e decimais. JavaScript não possui tipos separados para int e float.

let idade = 25;
let temperatura = -2.5;

3. boolean: Representa um valor lógico, podendo ser apenas true ou false.

let ativo = true;
let visivel = false;

4. undefined: Uma variável declarada, mas ainda não inicializada, tem o valor undefined.

let x;
console.log(x); // undefined

5. null: Representa a ausência intencional de valor. Usado para “zerar” ou “esvaziar” uma variável.

let usuario = null;

6. bigint: Usado para representar números inteiros muito grandes além do limite do Number.

let numeroGrande = 123456789012345678901234567890n;

7. symbol: Cria um identificador único. Muito usado como chave privada de objetos.

let id = Symbol("identificador");


🔒 Entendendo Imutabilidade em Primitivos

“Primitivos são imutáveis” não significa que a variável não pode mudar, mas sim que os valores primitivos não podem ser alterados internamente.

✅ Exemplo válido: reatribuição

let nome = "Ana";
nome = "Maria"; // Aqui a variável mudou, mas os valores "Ana" e "Maria" são imutáveis por si só.

🚫 O que não é possível:
let nome = "Ana";
nome[0] = "M"; // Não tem efeito. Strings não podem ser modificadas diretamente.

Já com objetos, isso seria possível:
let pessoa = { nome: "Ana" };
pessoa.nome = "Maria"; // Aqui o conteúdo foi realmente alterado

Resumo:
É possivel trocar o valor da variável.
Não é possivel editar o conteúdo de um valor primitivo diretamente.

