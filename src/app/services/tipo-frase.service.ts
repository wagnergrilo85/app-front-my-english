import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { TipoFraseModel } from '../model/tipo-frase.model';

@Injectable({
  providedIn: 'root'
})
export class TipoFraseService {

  constructor(private http: HttpClient) { }

  listarTipos(): Observable<any>{
      return this.http.get(`${API}/tipo-frases/listar`);
  }

  cadastrarTipo(tipo: TipoFraseModel): Observable<any>{
    return this.http.post(`${API}/tipo-frases/cadastrar`, tipo);
  }

  deletarTipo(id : number) : Observable < any > {
    return this.http.delete(`${API}/tipo-frases/excluir/${id}`);
  }

  pesquisarTipoPorId(id: number) : Observable <any> {
    return this.http.get(`${API}/tipo-frases/pesquisar/${id}`);
  }

  editarTipo(tipo: TipoFraseModel) : Observable <any> {
    return this.http.put(`${API}/tipo-frases/editar`, tipo);
  }
}
