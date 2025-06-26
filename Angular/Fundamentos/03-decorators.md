# O Que São Decorators em Angular?

Em Angular, **decorators** são uma parte fundamental do framework, utilizados para adicionar metadados a classes, métodos, propriedades ou parâmetros. Esses metadados fornecem informações sobre como as diferentes partes do seu código devem ser processadas e usadas pelo Angular.

Pense nos decorators como "etiquetas" que você anexa ao seu código. Essas etiquetas não alteram o código em si, mas dizem ao Angular como ele deve interpretar e lidar com aquela parte específica. Eles são uma implementação do padrão decorator do TypeScript, que o Angular utiliza amplamente para sua arquitetura.

---

## Como Funcionam?

Decorators são, na verdade, funções prefixadas com o símbolo `@`. Quando você os aplica, eles são executados em tempo de compilação ou em tempo de execução para adicionar ou modificar o comportamento da entidade a qual estão anexados.

---

## Principais Tipos de Decorators em Angular

O Angular oferece uma variedade de decorators para diferentes propósitos. Os mais comuns e importantes são:

### Decorators de Classe

Usados para configurar classes como componentes, módulos, serviços, etc.

- **@Component()**: Declara uma classe como um componente Angular. Configura o seletor HTML, o template (HTML) e os estilos (CSS) associados ao componente.
- **@NgModule()**: Define um módulo Angular, agrupando componentes, serviços, pipes e diretivas relacionados.
- **@Injectable()**: Marca uma classe como um serviço que pode ser injetado em outros componentes ou serviços. Essencial para o sistema de injeção de dependência do Angular.
- **@Directive()**: Cria diretivas personalizadas que adicionam comportamento ao DOM.
- **@Pipe()**: Cria pipes personalizados que transformam dados para exibição.

### Decorators de Propriedade

Usados para configurar propriedades dentro de uma classe.

- **@Input()**: Permite que dados sejam passados de um componente pai para um componente filho.
- **@Output()**: Permite que um componente filho emita eventos para um componente pai, geralmente em conjunto com `EventEmitter`.
- **@ViewChild() / @ViewChildren()**: Obtêm referências a elementos HTML ou componentes dentro do template de um componente.
- **@ContentChild() / @ContentChildren()**: Obtêm referências a elementos ou componentes projetados (transcluídos) no componente.

### Decorators de Método

Usados para configurar métodos dentro de uma classe.

- **@HostListener()**: Permite que um método "escute" eventos do elemento host (o elemento HTML ao qual o componente ou diretiva está anexado).

### Decorators de Parâmetro

Usados para configurar parâmetros de construtores ou métodos.

- **@Inject()**: Usado para injeção manual de dependências quando o TypeScript não consegue inferir o tipo.
- **@Host()**: Usado com `@Inject()` para especificar que o injetor do componente pai deve ser usado para resolver a dependência.
- **@Self(), @SkipSelf(), @Optional()**: Controlam o comportamento da injeção de dependência em relação à hierarquia dos injetores.

---

## Por Que Usar Decorators?

- **Configuração Declarativa**: Tornam o código mais legível e fácil de entender, pois as configurações são feitas diretamente onde a classe, método ou propriedade é definida.
- **Reuso de Código**: Facilitam a criação de funcionalidades reutilizáveis, como o sistema de injeção de dependência, componentes e diretivas.
- **Integração com o Framework**: São a maneira principal de comunicar ao Angular como as diferentes partes do seu aplicativo devem interagir e ser gerenciadas.
- **Separação de Preocupações**: Ajudam a manter a lógica de negócio separada da lógica do framework.

---

## Exemplo Simples

```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente', // Decorator de classe
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponente implements OnInit {
  @Input() titulo: string = ''; // Decorator de propriedade

  constructor() { }

  ngOnInit(): void {
    console.log(`O título é: ${this.titulo}`);
  }
}