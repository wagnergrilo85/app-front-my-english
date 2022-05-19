import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API } from '../api/api';
import { ExpressoesModel } from '../model/expressoes.model';

@Injectable({
  providedIn: 'root'
})
export class ExpressaoService {

  private api: string = API;

  constructor(private http: HttpClient) {
  }

  listarExpressao(): Observable<any>{
     return this.http.get(`/api/expressao/listar`);
  }

  cadastrarExpressao(expressao: ExpressoesModel): Observable<any>{
    return this.http.post(`/api/expressao`, expressao);
  }

  pesquisarExpressaoPorId(id: number) : Observable < any > {
      return this.http.get(`/api/expressao/${id}`);
  }

  editarExpressao(expressao : ExpressoesModel, id: number) : Observable <any> {
    return this.http.put(`/api/expressao/${id}`, expressao);
  }

  deletarExpressao(id : number) : Observable < any > {
    return this.http.delete(`/api/expressao/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`/api/expressao/filtrar/${nome}`);
  }

}
