// const meuObjeto = {
//     valor: 10,
//     getValor: function() {
//         return this.valor * 2;
//     }
// };
// meuObjeto.getValor();
// meuObjeto.valor;


const pessoa = {
  nome: "Ana",
  apresentar() {
    return `Olá, meu nome é ${this.nome}`; // this se refere ao objeto pessoa
  }
}

console.log(pessoa.nome)
console.log(pessoa.apresentar)



class Animal {
  falar() {
    return "Som genérico";
  }
}

class Cachorro extends Animal {
  falar() {
    return super.falar() + " e latido";
  }
}

const dog = new Cachorro();
dog.falar()
console.log(dog.falar)
console.log(dog.falar())