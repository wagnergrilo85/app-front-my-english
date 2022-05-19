import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API } from '../api/api';
import { FrasesModel } from '../model/frases.model';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  private api: string = API;

  constructor(private http: HttpClient) {
  }

  listarFrases(): Observable<any>{
     return this.http.get(`/api/frases/listar`);
  }

  cadastrarFrases(frase: FrasesModel): Observable<any>{
    return this.http.post(`/api/frases`, frase);
  }

  pesquisarFrasesPorId(id: number) : Observable < any > {
      return this.http.get(`/api/frases/${id}`);
  }

  editarFrases(frase : FrasesModel, id: number) : Observable <any> {
    return this.http.put(`/api/frases/${id}`, frase);
  }

  deletarFrases(id : number) : Observable < any > {
    return this.http.delete(`/api/Frases/${id}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`/api/frases/filtrar/${nome}`);
  }

}
