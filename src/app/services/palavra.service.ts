import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API } from '../api/api';
import { PalavrasModel } from '../model/palavras.model';

@Injectable({
  providedIn: 'root'
})
export class PalavraService {

  private api: string = API;

  constructor(private http: HttpClient) {
  }

  listarPalavras(): Observable<any>{
     return this.http.get(`${API}/palavras/listar`);
  }

  cadastrarPalavra(palavra: PalavrasModel): Observable<any>{
    return this.http.post(`${API}/palavras/cadastrar`, palavra);
  }

  pesquisarPalavraPorId(id: number) : Observable <any> {
      return this.http.get(`${API}/palavras/pesquisar/${id}`);
  }

  editarPalavra(palavra : PalavrasModel) : Observable <any> {
    return this.http.put(`${API}/palavras/editar`, palavra);
  }

  deletarPalavra(id : number) : Observable < any > {
    return this.http.delete(`${API}/palavras/excluir/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`${API}/palavra/filtrar/${nome}`);
  }

  filtrarPalavraPorIngles(palavraIngles: string): Observable<any> {
    return this.http.get(`${API}/palavra/filtrar/eg/${palavraIngles}`);
  }

  filtrarPalavraPorPortugues(palavraPortugues: string): Observable<any> {
    return this.http.get(`${API}/palavra/filtrar/pt/${palavraPortugues}`);
  }

}
