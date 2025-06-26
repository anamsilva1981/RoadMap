## logica de negocio e logica de componente 

Em desenvolvimento de software, especialmente em sistemas complexos como os construídos com Angular, é crucial entender as diferentes camadas de lógica que compõem uma aplicação. As duas principais que você mencionou são a lógica de negócio e a lógica de framework. Sim, existem outros tipos de lógica, e vamos explorar cada uma delas.

1. Lógica de Negócio (Business Logic)
A lógica de negócio, também conhecida como regras de negócio ou domínio, é o coração da sua aplicação. Ela define "o quê" a aplicação faz em termos do problema que ela se propõe a resolver. Esta lógica é completamente independente da tecnologia ou do framework utilizado.

Características:

Abstração do Problema: Representa as regras, processos e validações inerentes ao domínio da sua aplicação. Por exemplo, em um sistema bancário, a lógica de negócio incluiria regras como "não permitir saques se o saldo for insuficiente", "calcular juros de empréstimo" ou "validar o formato de um CPF".

Valor para o Usuário: É a lógica que entrega valor real ao usuário final, pois resolve diretamente os requisitos e as necessidades do negócio.

Estabilidade: Tende a ser a parte mais estável do sistema, pois as regras de negócio raramente mudam drasticamente, a menos que o próprio negócio mude.

Testabilidade: Deve ser facilmente testável de forma isolada, sem depender da interface do usuário ou de detalhes de infraestrutura.

Exemplo em Angular (mas não acoplado a ele):

Imagine um serviço Angular que processa pedidos. A lógica de negócio seria:

TypeScript

// src/app/shared/pedido.model.ts
export interface ItemPedido {
  produtoId: string;
  quantidade: number;
  precoUnitario: number;
}

// src/app/shared/validador-pedido.ts
export class ValidadorPedido {
  static validarItens(itens: ItemPedido[]): boolean {
    if (!itens || itens.length === 0) {
      return false; // Um pedido deve ter pelo menos um item
    }
    for (const item of itens) {
      if (item.quantidade <= 0 || item.precoUnitario <= 0) {
        return false; // Quantidade e preço devem ser positivos
      }
    }
    return true;
  }

  static calcularTotal(itens: ItemPedido[]): number {
    return itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);
  }
}
Neste exemplo, as regras de validação de itens e o cálculo do total são lógica de negócio. Elas poderiam ser usadas em qualquer outra linguagem ou framework, pois não dependem de nada específico do Angular.

2. Lógica de Framework (Framework Logic)
A lógica de framework refere-se ao código que interage diretamente com o framework (neste caso, Angular) para fazer a aplicação funcionar. Ela lida com a infraestrutura necessária para que a lógica de negócio possa ser executada e apresentada ao usuário.

Características:

Acoplamento ao Framework: É intrinsecamente ligada ao Angular. Ela usa decorators, serviços, ciclo de vida, sintaxe de templates e outras convenções do framework.

Organização e Gerenciamento: Ajuda a organizar componentes, roteamento, injeção de dependência, gerenciamento de estado e renderização da UI.

Suporte: Fornece as ferramentas e estruturas para construir a interface do usuário, manipular eventos, fazer requisições HTTP, etc.

Exemplo em Angular:

Continuando o exemplo do pedido, a lógica de framework seria:

TypeScript

// src/app/components/carrinho/carrinho.component.ts
import { Component, OnInit } from '@angular/core';
import { ItemPedido } from '../../shared/pedido.model'; // Importa a interface da lógica de negócio
import { ValidadorPedido } from '../../shared/validador-pedido'; // Importa a lógica de negócio

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html', // Lógica de framework: template
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensDoCarrinho: ItemPedido[] = [];
  totalDoCarrinho: number = 0;
  mensagemErro: string = '';

  constructor() { } // Lógica de framework: injeção de dependência (implícita aqui)

  ngOnInit(): void { // Lógica de framework: ciclo de vida
    // Simula carregamento de itens (vindo de um serviço, por exemplo)
    this.itensDoCarrinho = [
      { produtoId: 'P001', quantidade: 2, precoUnitario: 10.00 },
      { produtoId: 'P002', quantidade: 1, precoUnitario: 25.50 }
    ];
    this.recalcularTotal();
  }

  adicionarItem(produtoId: string, quantidade: number, precoUnitario: number): void {
    const novoItem: ItemPedido = { produtoId, quantidade, precoUnitario };
    this.itensDoCarrinho.push(novoItem);
    this.recalcularTotal();
  }

  removerItem(index: number): void {
    this.itensDoCarrinho.splice(index, 1);
    this.recalcularTotal();
  }

  recalcularTotal(): void {
    if (ValidadorPedido.validarItens(this.itensDoCarrinho)) { // Utiliza a lógica de negócio
      this.totalDoCarrinho = ValidadorPedido.calcularTotal(this.itensDoCarrinho); // Utiliza a lógica de negócio
      this.mensagemErro = '';
    } else {
      this.totalDoCarrinho = 0;
      this.mensagemErro = 'Carrinho inválido: verifique os itens.';
    }
  }

  finalizarCompra(): void {
    if (this.mensagemErro) {
      alert(this.mensagemErro);
      return;
    }
    // Lógica de framework: chamar um serviço HTTP para enviar o pedido
    // this.pedidoService.enviarPedido(this.itensDoCarrinho).subscribe(...);
    alert(`Compra finalizada! Total: R$ ${this.totalDoCarrinho.toFixed(2)}`);
  }
}
Aqui, a forma como CarrinhoComponent é definido (com @Component), como ele gerencia o estado (itensDoCarrinho), como ele usa o ciclo de vida (ngOnInit) e como ele interage com o HTML (templateUrl) são exemplos de lógica de framework. Ele utiliza a lógica de negócio (ValidadorPedido), mas não a contém intrinsecamente.

A Importância da Separação
A separação clara entre lógica de negócio e lógica de framework é uma das melhores práticas no desenvolvimento de software.

Testabilidade: Permite testar a lógica de negócio de forma isolada, sem a complexidade do framework.

Manutenibilidade: Mudanças no framework (upgrade de versão, migração) ou na UI não afetam a lógica de negócio, e vice-versa.

Reusabilidade: A lógica de negócio pode ser reutilizada em diferentes partes da aplicação (por exemplo, no frontend e no backend) ou em diferentes projetos.

Clareza: O código fica mais fácil de entender, pois cada parte tem uma responsabilidade bem definida.

Outros Tipos de Lógica
Sim, além da lógica de negócio e de framework, podemos identificar outros tipos de lógica que compõem uma aplicação:

3. Lógica de Apresentação (Presentation Logic / UI Logic)
É a lógica específica de como os dados são mostrados ao usuário e como a interface do usuário responde às interações. É a "cola" entre os dados e a UI.

Características:

Interação com o Usuário: Lida com eventos de clique, preenchimento de formulários, animações, validações de entrada em tempo real e formatação de dados para exibição.

Estado da UI: Gerencia o estado temporário da interface (e.g., um modal aberto/fechado, um item selecionado na lista, validação de campos de formulário antes de enviar ao servidor).

Especificidade da UI: Fortemente acoplada à tecnologia de interface (HTML/CSS, DOM, ou componentes de UI específicos do framework).

Exemplo em Angular:

HTML

<div class="carrinho-container">
  <h2>Seu Carrinho de Compras</h2>
  <div *ngIf="mensagemErro" class="alert alert-danger">{{ mensagemErro }}</div> <ul *ngIf="itensDoCarrinho.length > 0; else carrinhoVazio"> <li *ngFor="let item of itensDoCarrinho; let i = index">
      {{ item.quantidade }}x {{ item.produtoId }} - R$ {{ item.precoUnitario | number:'1.2-2' }}
      <button (click)="removerItem(i)">Remover</button> </li>
  </ul>
  <ng-template #carrinhoVazio>
    <p>Seu carrinho está vazio.</p>
  </ng-template>

  <h3>Total: R$ {{ totalDoCarrinho | number:'1.2-2' }}</h3> <button (click)="finalizarCompra()">Finalizar Compra</button>
</div>
No template HTML, as diretivas *ngIf, *ngFor e os pipes (| number:'1.2-2') são lógica de apresentação. Eles decidem como os dados do componente são exibidos e como a interface reage.

4. Lógica de Integração (Integration Logic)
Esta lógica lida com a comunicação entre diferentes sistemas ou camadas.

Características:

Comunicação Externa: Envolve a interação com APIs externas, bancos de dados, outros microsserviços, sistemas de mensageria, etc.

Adaptação: Frequentemente inclui a conversão de formatos de dados (ex: JSON para objetos TypeScript), tratamento de erros de rede, autenticação e autorização para chamadas externas.

Protocolos: Lida com protocolos de comunicação como HTTP, WebSockets, gRPC, etc.

Exemplo em Angular:

TypeScript

// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItemPedido } from '../shared/pedido.model'; // Importa a interface

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.meuapp.com/pedidos';

  constructor(private http: HttpClient) { }

  enviarPedido(itens: ItemPedido[]): Observable<any> {
    // Lógica de integração: faz a requisição HTTP POST para a API
    return this.http.post(this.apiUrl, { itensPedido: itens }).pipe(
      catchError(this.handleError) // Lógica de integração: tratamento de erro de rede
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
Aqui, a chamada this.http.post, a URL da API, e o tratamento de erros HTTP (catchError, handleError) são exemplos de lógica de integração.

Resumo das Lógicas:
Lógica de Negócio: O "quê" a aplicação faz em termos do domínio do problema. Independente de tecnologia.

Lógica de Framework: O "como" a aplicação usa o Angular para estruturar e gerenciar seus componentes, serviços, etc. Fortemente acoplada ao Angular.

Lógica de Apresentação: O "como" os dados são mostrados ao usuário e a UI reage às interações. Acoplada à tecnologia de UI.

Lógica de Integração: O "como" a aplicação se comunica com sistemas externos. Lida com chamadas a APIs, bancos de dados, etc.

Entender e separar esses diferentes tipos de lógica é fundamental para construir aplicações Angular robustas, escaláveis e de fácil manutenção.