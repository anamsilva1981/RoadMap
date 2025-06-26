# 🔁 Conversão de Tipos em JavaScript

## 🟡 Conversão Implícita (Coerção Automática)

A conversão implícita ocorre quando o JavaScript, em determinadas operações, tenta por conta própria converter o tipo de um valor para que a operação possa ser realizada.  
Isso pode ser conveniente, mas também uma fonte de erros inesperados se você não entender como funciona.

---

### ✅ Exemplos Comuns

#### 🔢 Operações Aritméticas

```js
let numero = 10;
let texto = "5";

let resultado = numero + texto;
console.log(resultado);        // "105"
console.log(typeof resultado); // string

let resultado2 = numero - texto;
console.log(resultado2);        // 5
console.log(typeof resultado2); // number

📝 O operador + pode significar concatenação de strings ou adição numérica.
Se um dos operandos for string, o JavaScript converte o outro para string.
Operadores como -, *, / convertem os valores para números.

⚖️ Comparações
console.log(10 == "10");         // true
console.log(true == 1);          // true
console.log(false == 0);         // true
console.log(null == undefined);  // true

O operador == realiza conversão de tipo antes de comparar.

⚠️ Use === (igualdade estrita) para evitar surpresas.

🔄 Contextos Booleanos (Truthy e Falsy)
Valores "falsy":

false
0
"" (string vazia)
null
undefined
NaN


let nome = "";
if (nome) {
  console.log("Nome preenchido.");
} else {
  console.log("Nome vazio."); // Será executado
}

let idade = 0;
if (idade) {
  console.log("Idade válida.");
} else {
  console.log("Idade inválida."); // Será executado
}

🟢 Conversão Explícita (Coerção Manual): A conversão explícita ocorre quando o desenvolvedor intencionalmente converte um valor de um tipo para outro.
Isso oferece mais controle e evita comportamentos inesperados.

🔠 Para String

String() → função global
.toString() → método de objetos

let numero = 123;
let booleano = true;

console.log(String(numero));      // "123"
console.log(numero.toString());   // "123"

console.log(String(booleano));    // "true"
console.log(booleano.toString()); // "true"

console.log(String(null));        // "null"
// null.toString(); // Erro!

🔢 Para Número

Number() → função global
parseInt() → retorna número inteiro
parseFloat() → retorna número com casas decimais

+ → operador unário (atalho para Number())

let textoNum = "123.45";
let textoInvalido = "abc";
let booleano = true;

console.log(Number(textoNum));       // 123.45
console.log(Number(textoInvalido));  // NaN
console.log(Number(booleano));       // 1

console.log(parseInt(textoNum));     // 123
console.log(parseFloat(textoNum));   // 123.45

console.log(+"10");                  // 10
console.log(+"-5.5");                // -5.5

🔘 Para Booleano

Boolean() → função global

!! → atalho para coerção booleana

let valor = "Olá";
let vazio = "";
let zero = 0;

console.log(Boolean(valor)); // true
console.log(Boolean(vazio)); // false
console.log(Boolean(zero));  // false

console.log(!!valor);        // true
console.log(!!vazio);        // false

🛠️ Aplicabilidade no Dia a Dia

📥 Processamento de Entrada do Usuário: Dados vindos de formulários são strings. Para fazer cálculos, é necessário converter:

let idadeInput = prompt("Digite sua idade:");
let idadeNumerica = Number(idadeInput);

if (isNaN(idadeNumerica)) {
  console.log("Por favor, digite um número válido para a idade.");
} else {
  console.log("Sua idade é: " + idadeNumerica);
}

🌐 Manipulação de APIs e JSON: APIs retornam strings que podem precisar ser convertidas para número ou booleano antes de serem usadas.

✅ Validações

let email = "usuario@example.com";

if (email) {
  console.log("Email preenchido.");
} else {
  console.log("Por favor, preencha o email.");
}

➕ Operações Matemáticas

Evite concatenação acidental de strings:

let preco1 = "10.50";
let preco2 = "5.00";

let total = parseFloat(preco1) + parseFloat(preco2);
console.log(total); // 15.5

🧾 Exibição de Dados
Números e booleanos são convertidos para strings automaticamente em interfaces. Entender isso evita problemas de formatação.

🧠 Lógica Condicional
Compreender truthy e falsy é essencial para escrever código mais limpo e eficiente.