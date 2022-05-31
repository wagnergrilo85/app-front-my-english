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
     return this.http.get(`/api/palavras/listar`);
  }

  cadastrarPalavra(palavra: PalavrasModel): Observable<any>{
    return this.http.post(`/api/palavras/cadastrar`, palavra);
  }

  pesquisarPalavraPorId(id: number) : Observable <any> {
      return this.http.get(`/api/palavras/pesquisar/${id}`);
  }

  editarPalavra(palavra : PalavrasModel) : Observable <any> {
    return this.http.put(`/api/palavras/editar`, palavra);
  }

  deletarPalavra(id : number) : Observable < any > {
    return this.http.delete(`/api/palavras/excluir/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`/api/palavra/filtrar/${nome}`);
  }

  filtrarPalavraPorIngles(palavraIngles: string): Observable<any> {
    return this.http.get(`/api/palavra/filtrar/eg/${palavraIngles}`);
  }

  filtrarPalavraPorPortugues(palavraPortugues: string): Observable<any> {
    return this.http.get(`/api/palavra/filtrar/pt/${palavraPortugues}`);
  }

}
