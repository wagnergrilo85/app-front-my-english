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

  listarPalavra(): Observable<any>{
     return this.http.get(`${this.api}/palavra`);
  }

  cadastrarPalavra(palavra: PalavrasModel): Observable<any>{
    return this.http.post(`${this.api}/palavra`, palavra);
  }

  pesquisarPalavraPorId(id: number) : Observable < any > {
      return this.http.get(`${this.api}/palavra/${id}`);
  }

  editarPalavra(palavra : PalavrasModel, id: number) : Observable <any> {
    return this.http.put(`${this.api}/palavra/${id}`, palavra);
  }

  deletarPalavra(id : number) : Observable < any > {
    return this.http.delete(`${this.api}/palavra/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.api}/palavra/filtrar/${nome}`);
  }

}
