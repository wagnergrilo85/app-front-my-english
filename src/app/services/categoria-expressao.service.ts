import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { CategoriaExpressaoModel } from '../model/categoria-expressao.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaExpressaoService {

  constructor(private http: HttpClient) { }

    listarCategorias(): Observable<any>{
      return this.http.get(`/api/categoria-expressoes/listar`);
  }

  cadastrarCategoria(categoria: CategoriaExpressaoModel): Observable<any>{
    return this.http.post(`/api/categoria-expressoes/cadastrar`, categoria);
  }

  deletarCategoria(id : number) : Observable < any > {
    return this.http.delete(`/api/categoria-expressoes/excluir/${id}`);
  }

  pesquisarCategoriaPorId(id: number) : Observable <any> {
    return this.http.get(`/api/categoria-expressoes/pesquisar/${id}`);
}
}
