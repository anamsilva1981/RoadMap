# Exportação e Importação de Variáveis em Angular

Em Angular (e JavaScript/TypeScript em geral), a exportação e importação de variáveis, let e const é fundamental para organizar seu código em módulos, promovendo a reusão e a manutenção. Vamos explorar as formas de fazer isso, seus prós e contras, usabilidade, boas práticas e exemplos práticos.

Entendendo export e import
Antes de mergulharmos nos detalhes, é crucial entender o conceito básico:

export: Usado para tornar funções, classes, variáveis, etc., disponíveis para outros módulos.

import: Usado para acessar as funções, classes, variáveis, etc., que foram exportadas de outros módulos.

Qualquer arquivo TypeScript/JavaScript é considerado um módulo se usar import ou export. Caso contrário, ele é tratado como um script global.

Formas de Exportação/Compartilhamento
Existem duas formas principais de exportar: exportação nomeada e exportação padrão (default).

1. Exportação Nomeada (export)
Você exporta um ou mais membros de um módulo pelo seu nome. Para importá-los, você precisa usar o mesmo nome (ou um alias).

Sintaxe:

TypeScript

// No arquivo 'variaveis.ts'

export const PI = 3.14159;
export let contador = 0;
export const NOME_APP = "Meu App Angular";

export function somar(a: number, b: number): number {
  return a + b;
}

export class Configuracoes {
  apiUrl: string = 'https://api.example.com';
}
Importação:

TypeScript

// Em outro arquivo, por exemplo, 'app.component.ts'

import { PI, contador, NOME_APP, somar, Configuracoes } from './variaveis';
// ou
import { PI as MeuPI, contador } from './variaveis'; // Usando alias

console.log(PI); // 3.14159
contador++;
console.log(contador); // 1

const resultado = somar(5, 3); // 8

const config = new Configuracoes();
console.log(config.apiUrl); // https://api.example.com
Prós:

Clareza: O nome do que está sendo importado é explícito, o que facilita a compreensão do que o módulo fornece.

Múltiplas Exportações: Permite exportar vários itens de um único módulo.

Refatoração Segura: IDEs e ferramentas de build conseguem rastrear facilmente as dependências, tornando a refatoração mais segura.

Autocomplicação: A maioria das IDEs oferece autocomplicação para as exportações nomeadas.

Contras:

Verboso para Poucos Itens: Se você tiver apenas um ou dois itens para exportar, pode parecer um pouco mais verboso do que a exportação padrão.

Usabilidade:

Bibliotecas e Módulos de Utilitários: Ideal para módulos que expõem várias funções, constantes ou classes relacionadas, como um módulo de utilitários (utils.ts) ou um módulo de constantes (constants.ts).

Componentes, Serviços e Diretivas (em conjunto com @Component, @Injectable): Embora os decorators do Angular lidem com a maioria da "exportação" de componentes e serviços para o runtime do Angular, se você tiver uma classe auxiliar dentro de um arquivo de componente que precisa ser acessada externamente, usaria export.

2. Exportação Padrão (export default)
Permite exportar apenas um item por módulo. Ao importar, você pode dar qualquer nome a esse item.

Sintaxe:

TypeScript

// No arquivo 'minhaClasse.ts'

class MinhaClassePadrao {
  mensagem: string = "Olá do padrão!";
}

export default MinhaClassePadrao;

// Ou para uma função/constante diretamente
// export default function configurar(): string { return "Configurado!"; }
// export default const VALOR_PADRAO = 100;
Importação:

TypeScript

// Em outro arquivo

import AlgumNomeParaMinhaClasse from './minhaClasse'; // Você escolhe o nome

const instancia = new AlgumNomeParaMinhaClasse();
console.log(instancia.mensagem); // Olá do padrão!

// Se fosse uma função ou constante
// import funcaoConfig from './minhaClasse';
// console.log(funcaoConfig()); // Configurado!
Prós:

Simplicidade: Sintaxe mais concisa quando você só precisa exportar um único item.

Flexibilidade no Nome: O importador pode escolher o nome que quiser para o item importado, o que pode ser útil para evitar conflitos de nomes.

Contras:

Apenas um Item: Você só pode ter uma exportação padrão por módulo.

Menos Rastreável: Ferramentas de análise de código podem ter mais dificuldade em rastrear todas as referências a uma exportação padrão, pois o nome importado pode variar.

Potenciais Conflitos de Nome: Se o importador não for cuidadoso, pode escolher um nome que já existe no escopo local, levando a confusão.

Usabilidade:

Módulos que Representam uma Única Entidade: Ideal para módulos que encapsulam uma única classe principal, como um serviço ou um componente que é a peça central do arquivo.

Arquivos de Configuração Simples: Se um arquivo exporta apenas um objeto de configuração.

Boas Práticas e Considerações
Preferência pela Exportação Nomeada: Em geral, a exportação nomeada é preferível na maioria dos cenários em Angular e TypeScript devido à sua clareza, rastreabilidade e suporte a múltiplas exportações.

Consistência: Mantenha a consistência no estilo de exportação dentro do seu projeto. Se a equipe decidir usar exportações nomeadas para a maioria dos casos, siga essa diretriz.

granularidade do Módulo: Evite ter módulos com centenas de exportações. É melhor que um módulo seja coeso e tenha poucas responsabilidades, exportando apenas o que é estritamente necessário.

index.ts para Agregação: Para módulos maiores com muitas sub-partes, você pode criar um arquivo index.ts que reexporta tudo o que deve ser público. Isso simplifica as importações para outros módulos.

TypeScript

// Em meu-modulo/services/index.ts
export * from './auth.service';
export * from './user.service';

// Em outro arquivo
import { AuthService, UserService } from './meu-modulo/services';
Evite Exportar Variáveis Mutáveis (let) Desnecessariamente: Exportar uma variável let pode levar a problemas de estado compartilhado e bugs difíceis de rastrear, pois qualquer módulo que a importe pode alterá-la. Prefira exportar const para valores fixos ou funções para manipular estados internos do módulo. Se precisar compartilhar um estado mutável, considere usar um serviço injetável (Singleton) no Angular.

TypeScript

// Evite, se possível, para estado mutável compartilhado:
export let contadorGlobal = 0; // Pode ser alterado em qualquer lugar

// Prefira um serviço para estado compartilhado:
// meu-servico.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContadorService {
  private _contador = new BehaviorSubject<number>(0);
  readonly contador$ = this._contador.asObservable(); // Expor como Observable

  incrementar() {
    this._contador.next(this._contador.value + 1);
  }
}
const vs. let em Exportações:

const: Use para valores que não mudarão. É a escolha preferencial para constantes, configurações e referências a objetos que não serão reatribuídos.

let: Use apenas se o valor da variável precisar ser reatribuído dentro do módulo que a exporta, e se essa mutabilidade for um comportamento intencional e controlado. Como mencionado, tenha cuidado ao exportar let se ela for um estado compartilhado.

Exemplos Práticos em Angular
Exemplo 1: Exportando Constantes
TypeScript

// src/app/shared/constants.ts

export const API_URL = 'https://api.myapp.com/v1';
export const MAX_ITEMS_PER_PAGE = 10;
export const DEFAULT_THEME = 'light';
TypeScript

// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, MAX_ITEMS_PER_PAGE } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(page: number = 1) {
    return this.http.get(`${API_URL}/users?limit=${MAX_ITEMS_PER_PAGE}&page=${page}`);
  }
}
Exemplo 2: Exportando Interfaces e Tipos
TypeScript

// src/app/models/user.model.ts

export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export type UserRole = 'admin' | 'editor' | 'viewer';
TypeScript

// src/app/components/user-card/user-card.component.ts
import { Component, Input } from '@angular/core';
import { User, UserRole } from '../../models/user.model'; // Importando interface e tipo

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() role: UserRole = 'viewer';

  getRoleClass(): string {
    return `role-${this.role}`;
  }
}
Conclusão

A exportação e importação de variáveis, let e const são pedras angulares da modularização em Angular. Entender as diferenças entre exportações nomeadas e padrão, e aplicar as boas práticas, garantirá um código mais organizado, reutilizável e fácil de manter. Prefira sempre a exportação nomeada para a maioria dos casos, reservando a exportação padrão para situações onde um módulo representa claramente uma única entidade principal.