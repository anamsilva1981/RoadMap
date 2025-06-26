# 📦 Escopo de Módulo no Angular

Em Angular, **o escopo de um módulo** define **quais componentes, diretivas e pipes estão disponíveis para uso dentro daquele módulo**.

> ✅ Um componente só pode ser usado em outro componente **se estiver no mesmo módulo** ou **for exportado por um módulo que foi importado**.

---

## 🧠 Conceito Básico

Angular utiliza a anotação `@NgModule` para organizar o projeto em partes reutilizáveis. Cada módulo tem seu **próprio escopo isolado**, o que significa que os componentes declarados em um módulo **não são visíveis fora dele por padrão**.

---

## 🔐 Escopo Restrito (comportamento padrão)

Se você declarar um componente dentro de um módulo e **não o exportar**, ele **só poderá ser usado dentro do próprio módulo**.

```ts
@NgModule({
  declarations: [MeuComponente],
  exports: [] // sem exportação
})
export class MeuModulo {}

➡️ Se outro módulo tentar usar <app-meu-componente>, ocorrerá um erro de "componente desconhecido".

🔄 Tornando um Componente Visível para Outros Módulos

Para que um componente (ou diretiva/pipe) seja usado fora de seu módulo, é necessário exportá-lo:

@NgModule({
  declarations: [MeuComponente],
  exports: [MeuComponente] // agora está visível para outros módulos
})
export class MeuModulo {}

🔗 Usando Recursos de Outro Módulo (Importação)

Depois de exportar um componente, você precisa importar o módulo onde ele foi declarado no módulo onde deseja utilizá-lo:

@NgModule({
  imports: [MeuModulo] // agora posso usar MeuComponente aqui
})
export class OutroModulo {}

✅ Exemplo Prático

Módulo Compartilhado (shared.module.ts)

@NgModule({
  declarations: [BotaoComponent],
  exports: [BotaoComponent]
})
export class SharedModule {}

Módulo de Aplicação (app.module.ts)

@NgModule({
  imports: [SharedModule] // agora posso usar <app-botao>
})
export class AppModule {}


🧩 Por que o Escopo de Módulo é Importante?

🔐 Isolamento: Mantém os componentes encapsulados e reutilizáveis

📚 Organização: Facilita a leitura e manutenção do projeto

⚡ Performance: O Angular sabe exatamente quais componentes pertencem a onde

🔁 Reusabilidade: Módulos compartilhados podem ser importados em várias partes da aplicação


