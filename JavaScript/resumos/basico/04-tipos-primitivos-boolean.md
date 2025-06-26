# 🔘 Tipo Primitivo Boolean em JavaScript

O tipo `boolean` é um dos tipos de dados mais fundamentais em qualquer linguagem de programação, e no JavaScript não é diferente. Ele representa um valor lógico que pode ser apenas uma de duas coisas:

- `true` (verdadeiro)
- `false` (falso)

Ele é a base para a lógica condicional, permitindo que o código tome decisões sobre qual caminho seguir.

---

```js
1. ✅ Valores `true` e `false`: Esses são os **únicos dois valores possíveis** para uma variável do tipo boolean.

let estaLogado = true;
let temPermissao = false;

console.log(typeof estaLogado);   // Saída: "boolean"
console.log(typeof temPermissao); // Saída: "boolean"

2. 🔁 Uso em Condicionais e Laços: O tipo boolean é amplamente usado em estruturas de controle de fluxo, como:
 if/else, for, while e operadores ternários.

📌 Exemplo com if/else:

let usuarioAtivo = true;

if (usuarioAtivo) {
  console.log("Bem-vindo de volta!");
} else {
  console.log("Sua conta está inativa.");
}

📌 Exemplo com laço while:

let contador = 0;
let continuar = true;

while (continuar && contador < 3) {
  console.log("Contando:", contador);
  contador++;
  if (contador === 3) {
    continuar = false; // Altera o valor booleano para parar o loop
  }
}
// Saída:
// Contando: 0
// Contando: 1
// Contando: 2

3. 🔄 Valores "Truthy" e "Falsy" (Coerção para Booleano):
JavaScript converte automaticamente valores para true ou false em contextos booleanos (como dentro de if). Isso é chamado de coerção de tipo.

❌ Valores "falsy" (avaliados como false):

false  
0  
-0  
"" ou '' (string vazia)  
null  
undefined  
NaN  
document.all (caso especial legado)

✅ Valores "truthy" (avaliados como true):

Strings não vazias ("Olá", "false")  
Números diferentes de zero  
[] (array vazio)  
{} (objeto vazio)  
true

📌 Exemplos:

```js
if (0) {
  console.log("Isso nunca será executado."); // 0 é falsy
}

if ("Olá") {
  console.log("Isso será executado."); // "Olá" é truthy
}

let meuArray = [];
if (meuArray) {
  console.log("Um array vazio é truthy.");
}

let meuObjeto = null;
if (meuObjeto) {
  console.log("Isso nunca será executado."); // null é falsy
}
🔧 Conversão explícita:
Use Boolean() ou !! (negação dupla):

console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(!!null);           // false
console.log(!!{});             // true (objeto vazio)

❓ Por que !!{} retorna true?
Essa é uma dúvida comum: se !{} é false, então !!{} deveria ser false também? A resposta é não — e aqui está o porquê:

A negação simples (!) inverte o valor lógico:
!{} // false — porque um objeto vazio é "truthy"
A negação dupla (!!) inverte duas vezes e retorna o valor booleano equivalente ao original:
!!{} // true — porque {} é "truthy"
Portanto, !!{} não está "invertendo" o valor final — está apenas convertendo um valor "truthy" (o objeto vazio {}) para seu equivalente booleano (true).

⚙️ Operadores Lógicos com Booleanos: Os operadores lógicos servem para combinar ou inverter valores booleanos:

&& (E lógico): Retorna true se ambos os operandos forem true.

|| (OU lógico): Retorna true se pelo menos um dos operandos for true.

! (NÃO lógico): Inverte o valor booleano (true vira false e vice-versa).

📌 Exemplos:

let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Pode fazer a compra.");
} else {
  console.log("Não tem como pagar.");
}

let isOnline = false;
console.log(!isOnline); // Saída: true
