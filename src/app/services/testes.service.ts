import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { TesteSignificadoPalavraModel } from '../model/teste-significado-palavra.model';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  private api: string = API;

  constructor(private http: HttpClient) {
  }

  listarTesteSignificadoPalavras(): Observable<any>{
     return this.http.get(`/api/teste-significado-palavras/listar`);
  }

  cadastrarTesteSignificadoPalavra(teste: TesteSignificadoPalavraModel): Observable<any>{
    return this.http.post(`/api/teste-significado-palavras/cadastrar`, teste);
  }

  pesquisarTesteSignificadoPalavraPorId(id: number) : Observable <any> {
      return this.http.get(`/api/teste-significado-palavras/pesquisar/${id}`);
  }

  editarTesteSignificadoPalavra(teste : TesteSignificadoPalavraModel) : Observable <any> {
    return this.http.put(`/api/teste-significado-palavras/editar`, teste);
  }


  
}
