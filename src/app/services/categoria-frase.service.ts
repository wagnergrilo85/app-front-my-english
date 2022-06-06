import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { CategoriaFraseModel } from '../model/categoria-frase.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaFraseService {

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<any>{
      return this.http.get(`${API}/categoria-frases/listar`);
  }

  cadastrarCategoria(categoria: CategoriaFraseModel): Observable<any>{
    return this.http.post(`${API}/categoria-frases/cadastrar`, categoria);
  }

  deletarCategoria(id : number) : Observable < any > {
    return this.http.delete(`${API}/categoria-frases/excluir/${id}`);
  }

  pesquisarCategoriaPorId(id: number) : Observable <any> {
    return this.http.get(`${API}/categoria-frases/pesquisar/${id}`);
}
editarCategoria(categoria: CategoriaFraseModel) : Observable <any> {
  return this.http.put(`${API}/categoria-frases/editar`, categoria);
}
}
