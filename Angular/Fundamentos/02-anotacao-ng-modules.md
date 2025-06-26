# 📦 O que é a anotação `@NgModule` em Angular?

`@NgModule` é um decorador usado para definir um módulo em Angular. Ele serve para agrupar componentes, diretivas, pipes e serviços que fazem parte de uma funcionalidade ou de uma parte específica da aplicação.

---

## ❓ Por que usar `@NgModule`?

- Para organizar o código da aplicação em módulos reutilizáveis e independentes.
- Para declarar quais componentes, diretivas e pipes pertencem ao módulo.
- Para importar outros módulos necessários.
- Para exportar componentes, diretivas ou pipes que podem ser usados em outros módulos.
- Para configurar serviços que serão usados na aplicação.

---

## 🧱 Estrutura básica

Um módulo criado com `@NgModule` normalmente tem essas propriedades:

| Propriedade  | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| declarations | Lista os componentes, diretivas e pipes que pertencem a esse módulo.       |
| imports      | Importa outros módulos que serão usados dentro desse módulo.               |
| exports      | Exporta componentes, diretivas ou pipes para que outros módulos usem.      |
| providers    | Registra serviços para injeção de dependência.                             |
| bootstrap    | Define o componente raiz da aplicação (geralmente usado no AppModule).     |

---

## ✅ Exemplo simples

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Neste exemplo:

- O módulo `AppModule` declara o componente `AppComponent`;
- Importa o módulo `BrowserModule`, necessário para rodar no navegador;
- Define o `AppComponent` como o ponto de entrada da aplicação.