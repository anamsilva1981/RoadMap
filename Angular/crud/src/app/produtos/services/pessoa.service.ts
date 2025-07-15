import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../../core/http/http-wrapper.service';
import { Pessoa } from '../produto-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  private baseUrl = 'http>//localhost:3000/pessoas';

  constructor(private httpWrapper: HttpWrapperService) { }

  criarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpWrapper.post<Pessoa>(this.baseUrl, pessoa)
  }
}
