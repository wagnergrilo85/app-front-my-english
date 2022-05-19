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
     return this.http.get(`${this.api}/expressao`);
  }

  cadastrarExpressao(expressao: ExpressoesModel): Observable<any>{
    return this.http.post(`${this.api}/expressao`, expressao);
  }

  pesquisarExpressaoPorId(id: number) : Observable < any > {
      return this.http.get(`${this.api}/expressao/${id}`);
  }

  editarExpressao(expressao : ExpressoesModel, id: number) : Observable <any> {
    return this.http.put(`${this.api}/expressao/${id}`, expressao);
  }

  deletarExpressao(id : number) : Observable < any > {
    return this.http.delete(`${this.api}/expressao/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.api}/expressao/filtrar/${nome}`);
  }

}
