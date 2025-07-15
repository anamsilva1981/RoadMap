import { Component } from '@angular/core';
import { Pessoa } from '../../produto-interface';
import { PessoaService } from '../../services/pessoa.service';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  pessoa: Pessoa = {
    nome: '',
    endereco: '',
    bairro: '', 
    estado: '',
    cep: 0
  };

  constructor(private pessoaService: PessoaService){}

  salvar(){
    this.pessoaService.criarPessoa(this.pessoa).subscribe({
      next: (res) => {
        console.log('Pessoa criada com sucesso', res);
        this.pessoa = { nome: '', endereco: '', bairro: '', estado: '', cep: 0 };
      },
      error: (err) => console.error('Erro ao criar pessoa:', err) 
    })
  }

}
