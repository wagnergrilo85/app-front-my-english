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
      return this.http.get(`${API}/tipo-palavras/listar`);
  }

  cadastrarTipo(tipo: TipoPalavraModel): Observable<any>{
    return this.http.post(`${API}/tipo-palavras/cadastrar`, tipo);
  }

  deletarTipo(id : number) : Observable < any > {
    return this.http.delete(`${API}/tipo-palavras/excluir/${id}`);
  }

  pesquisarTipoPorId(id: number) : Observable <any> {
    return this.http.get(`${API}/tipo-palavras/pesquisar/${id}`);
  }

  editarTipo(tipo: TipoPalavraModel) : Observable <any> {
    return this.http.put(`${API}/tipo-palavras/editar`, tipo);
  }
}
