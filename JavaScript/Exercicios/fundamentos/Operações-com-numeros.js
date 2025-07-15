
/** Exercício: Operações com números

    Crie um pequeno script em JavaScript que faça o seguinte:
    Crie uma variável chamada precoProduto e atribua a ela o valor 49.90.
    Crie uma variável chamada quantidade e atribua a ela o valor 3.
    Crie uma variável chamada totalCompra que seja o resultado da multiplicação entre precoProduto e quantidade.
    Mostre no console o seguinte texto:
    O valor total da compra é R$ [valor], obrigado por comprar conosco!
    
    let precoProduto = 49.90;
    let quantidade = 3;
    let totalCompra = precoProduto * quantidade;
    console.log(totalCompra);
    
*/


    /** Exercício 2: Cálculo de desconto
     
        Você trabalha em uma loja e precisa ajudar o sistema a aplicar descontos nos produtos.
        Crie uma variável precoOriginal e atribua o valor 120.
        Crie uma variável desconto e atribua o valor 20 (representando 20%).
        Calcule o valor do desconto em reais.
        Calcule o preço final do produto, já com o desconto aplicado.
        Exiba no console a seguinte mensagem:
        O valor original era R$ [valor]. Com desconto de 20%, o valor final é R$ [valor].
        

        let precoOriginal = 120.00;
        let desconto = 20; // em porcentagem
        let valorDesconto = precoOriginal * (desconto / 100);
        let precoFinal = precoOriginal - valorDesconto;
        
        console.log(`O valor original era R$ ${precoOriginal.toFixed(2)}. Com desconto de 20%, o valor final é R$ ${precoFinal.toFixed(2)}.`);
        
    */


        
    /** Exercício 3: Manipulação de strings
     
        Crie um script que:
        Crie uma variável nome com o seu nome.
        Crie uma variável mensagem que diga:
        Olá, [nome]! Seja bem-vindo(a) ao nosso sistema.
        Mostre essa mensagem no console.
        Em seguida, mostre no console:
        O número de caracteres do nome.
        O nome todo em maiúsculas.
        O nome todo em minúsculas.
        

        let seuNome = 'Ana';
        let mensagem = `Olá, ${seuNome}! Seja bem-vindo(a) ao nosso sistema.`;

        console.log('Exibindo a mensagem: ', mensagem);
        console.log('Contando os caracteres do nome: ', seuNome.length);
        console.log('Nome em letras maiúsculas: ', seuNome.toUpperCase());
        console.log('Nome em letras minúsculas: ', seuNome.toLowerCase());
        
        */


        /** Exercício 4: Verificando idade para acesso
     
        Você está construindo uma tela de login com verificação de idade.
        Crie um script que:
        Crie uma variável chamada idade e atribua a ela um número (ex: 17).
        Crie uma variável maiorDeIdade que seja true se a idade for maior ou igual a 18, e false caso contrário.
        Mostre no console a seguinte mensagem:
        Você tem [idade] anos. Acesso permitido? [true ou false]
                

        let idade = 17;
        let maiorDeIdade = idade >= 18;
 
        console.log(`Você tem ${idade} anos. Acesso permitido? ${maiorDeIdade}`);
        */



        /** 5: Cadastro incompleto
     
        Você está simulando um formulário de cadastro de usuário. Crie um script que:

        Crie uma variável nomeUsuario e atribua a ela o valor "Ana".
        Crie uma variável emailUsuario, mas não atribua nenhum valor a ela ainda.
        Crie uma variável telefoneUsuario e atribua a ela o valor null (representando que o campo foi deixado propositalmente em branco).

        Exiba no console todas essas informações com uma mensagem parecida com:

        Nome: Ana
        Email: undefined
        Telefone: null
        Depois, atualize o valor da variável emailUsuario com um e-mail fictício e exiba novamente todas as informações no console.

        💡 Isso vai te mostrar a diferença entre uma variável não inicializada (undefined) e uma que foi intencionalmente deixada vazia (null).

        let nomeUsuario = 'Ana';
        let emailUsuario;
        let telefoneUsuario = null;
 
        emailUsuario = 'email@email.com'
 
        console.log(`
         Nome: ${nomeUsuario}
         Email: ${emailUsuario}
         Telefone: ${telefoneUsuario}        
         `)

        */

         /** 
          * Mini Desafio Final – Perfil de usuário
            Crie um script que:

            Crie uma variável nome com seu nome (string). ok

            Crie uma variável idade com sua idade (número). - ok

            Crie uma variável email que comece como undefined (não inicializada). ok

            Crie uma variável telefone que seja null (não preenchido). ok

            Crie uma variável podeEntrar que seja true se a idade for 18 ou mais, e false caso contrário.

            Exiba no console uma mensagem assim:

            Nome: [nome]
            Idade: [idade]
            Email: [email]
            Telefone: [telefone]
            Entrada permitida? [true/false]
            Depois, atribua um email qualquer para a variável email e mostre novamente a mensagem atualizada.
          * 
          * 
          * 
         */

            let nome = 'Ana';
            let idade = 35;
            let email;
            let telefone = null;
            let podeEntrar = idade >= 18;

            email = 'meuemail@meuemail.com'

            console.log(`
                Nome: ${nome}
                Idade: ${idade}
                Email: ${email}
                Telefone: ${telefone}
                Entrada permitida? ${podeEntrar}
                
            `)




