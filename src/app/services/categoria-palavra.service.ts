import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { CategoriaPalavrasModel } from '../model/categoria-palavras.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaPalavraService {


  private api: string = API;

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<any>{
      return this.http.get(`${API}/categoria-palavras/listar`);
  }

  cadastrarCategoria(categoria: CategoriaPalavrasModel): Observable<any>{
    return this.http.post(`${API}/categoria-palavras/cadastrar`, categoria);
  }

  deletarCategoria(id : number) : Observable < any > {
    return this.http.delete(`${API}/categoria-palavras/excluir/${id}`);
  }

  pesquisarCategoriaPorId(id: number) : Observable <any> {
    return this.http.get(`${API}/categoria-palavras/pesquisar/${id}`);
  }

  editarCategoria(categoriaPalavra : CategoriaPalavrasModel) : Observable <any> {
    return this.http.put(`${API}/categoria-palavras/editar`, categoriaPalavra);
  }
}
