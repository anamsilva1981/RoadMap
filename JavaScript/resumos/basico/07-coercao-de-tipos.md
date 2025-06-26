# 🔄 Coerção de Tipos em JavaScript

Em JavaScript, **coerção** (*type coercion*) é o processo de **converter automaticamente ou manualmente um valor de um tipo para outro**, como de string para número, número para boolean, etc.

Esse comportamento é uma das características mais marcantes (e às vezes confusas) da linguagem.

---

## 📌 Tipos de Coerção

### 1. Coerção Implícita (automática)

O JavaScript converte os valores **automaticamente** em certas operações, como comparações com `==`.

```js
console.log("5" == 5); // true → string "5" é convertida em número 5
console.log(null == undefined); // true → são considerados equivalentes
Essa conversão automática pode causar comportamentos inesperados, por isso evite o uso de == em favor de ===.

2. Coerção Explícita (manual)
É quando você força a conversão de tipo usando funções como Boolean(), Number(), String() ou operadores como !!.

js
Copiar
Editar
console.log(Number("10"));   // 10 (string → número)
console.log(String(99));     // "99" (número → string)
console.log(Boolean(""));    // false (string vazia → falso)
console.log(!!{});           // true (objeto vazio é "truthy")
✅ Truthy e Falsy
Valores em JavaScript podem ser avaliados como verdadeiros (truthy) ou falsos (falsy) quando convertidos para booleanos, mesmo que não sejam diretamente true ou false.

❌ Valores falsy (avaliados como false):
false

0

-0

"" ou '' (string vazia)

null

undefined

NaN

document.all (caso legado)

✅ Valores truthy (avaliados como true):
Strings não vazias: "0", "false"

Números diferentes de 0: 1, -3.14

Objetos: {}, []

Funções: function() {}

Instâncias: new Date(), etc.

❓ Pergunta comum: Por que !!{} retorna true?
js
Copiar
Editar
console.log(!!{}); // true
!{} → false → porque um objeto vazio é considerado "truthy"

!!{} → true → a negação dupla apenas converte para booleano

Ou seja, !! não inverte de volta ao valor original, ele força a conversão para booleano com base no que o JavaScript considera truthy ou falsy.

⚠️ == vs ===
== → permite coerção implícita, comparando valores após conversão

=== → exige que os valores sejam idênticos em tipo e valor

js
Copiar
Editar
"5" == 5        // true → coerção implícita
"5" === 5       // false → tipos diferentes
null == undefined // true
null === undefined // false
