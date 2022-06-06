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
     return this.http.get(`${API}/expressoes/listar`);
  }

  cadastrarExpressao(expressao: ExpressoesModel): Observable<any>{
    return this.http.post(`${API}/expressoes/cadastrar`, expressao);
  }

  pesquisarExpressaoPorId(id: number) : Observable < any > {
      return this.http.get(`${API}/expressoes/pesquisar/${id}`);
  }

  editarExpressao(expressao : ExpressoesModel) : Observable <any> {
    return this.http.put(`${API}/expressoes/editar`, expressao);
  }

  deletarExpressao(id : number) : Observable < any > {
    return this.http.delete(`${API}/expressoes/excluir/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`${API}/expressoes/filtrar/${nome}`);
  }

  filtrarExpressaoPorIngles(expressaIngles: string): Observable<any> {
    return this.http.get(`${API}/expressoes/filtrar/eg/${expressaIngles}`);
  }

  filtrarExpressaoPorPortugues(expressaPortugues: string): Observable<any> {
    return this.http.get(`${API}/expressoes/filtrar/pt/${expressaPortugues}`);
  }

}
