import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutosComponent } from './produtos/components/produtos/produtos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud';
}
