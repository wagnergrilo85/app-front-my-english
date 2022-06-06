import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { TipoExpressaoModel } from '../model/tipo-expressao.model';

@Injectable({
  providedIn: 'root'
})
export class TipoExpressaoService {

  constructor(private http: HttpClient) { }

  listarTipos(): Observable<any>{
      return this.http.get(`${API}/tipo-expressoes/listar`);
  }

  cadastrarTipo(tipo: TipoExpressaoModel): Observable<any>{
    return this.http.post(`${API}/tipo-expressoes/cadastrar`, tipo);
  }

  deletarTipo(id : number) : Observable < any > {
    return this.http.delete(`${API}/tipo-expressoes/excluir/${id}`);
  }

  pesquisarTipoPorId(id: number) : Observable <any> {
    return this.http.get(`${API}/tipo-expressoes/pesquisar/${id}`);
  }

  editarTipo(tipo: TipoExpressaoModel) : Observable <any> {
    return this.http.put(`${API}/tipo-expressoes/editar`, tipo);
  }

}
