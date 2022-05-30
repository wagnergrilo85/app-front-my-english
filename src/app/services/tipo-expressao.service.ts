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
      return this.http.get(`/api/tipo-expressoes/listar`);
  }

  cadastrarTipo(tipo: TipoExpressaoModel): Observable<any>{
    return this.http.post(`/api/tipo-expressoes/cadastrar`, tipo);
  }

  deletarTipo(id : number) : Observable < any > {
    return this.http.delete(`/api/tipo-expressoes/excluir/${id}`);
  }

  pesquisarTipoPorId(id: number) : Observable <any> {
    return this.http.get(`/api/tipo-expressoes/pesquisar/${id}`);
}
}
