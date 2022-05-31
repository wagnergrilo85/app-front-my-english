import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { TipoPalavraModel } from '../model/tipo-palavra.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPalavraService {

  constructor(private http: HttpClient) { }

  listarTipos(): Observable<any>{
      return this.http.get(`/api/tipo-palavras/listar`);
  }

  cadastrarTipo(tipo: TipoPalavraModel): Observable<any>{
    return this.http.post(`/api/tipo-palavras/cadastrar`, tipo);
  }

  deletarTipo(id : number) : Observable < any > {
    return this.http.delete(`/api/tipo-palavras/excluir/${id}`);
  }

  pesquisarTipoPorId(id: number) : Observable <any> {
    return this.http.get(`/api/tipo-palavras/pesquisar/${id}`);
  }

  editarTipo(tipo: TipoPalavraModel) : Observable <any> {
    return this.http.put(`/api/tipo-palavras/editar`, tipo);
  }
}
