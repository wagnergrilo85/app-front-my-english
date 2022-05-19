import { ClienteModel } from '../model/cliente.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { API } from '../api/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api: string = API;

  constructor(private http: HttpClient) { 
  }

  listarClientes(): Observable<any>{
     return this.http.get(`${this.api}/clientes`);
  }

  cadastrarCliente(cli: ClienteModel): Observable<any>{
    return this.http.post(`${this.api}/clientes`, cli);
  }

  pesquisarClientePorId(id: number) : Observable < any > {
      return this.http.get(`${this.api}/clientes/${id}`);
  }

  editarCliente(cli : ClienteModel, id: number) : Observable <any> {
    return this.http.put(`${this.api}/clientes/${id}`, cli);
  }

  deletarCliente(id : number) : Observable < any > {
    return this.http.delete(`${this.api}/clientes/${id}`);
  }

  checaCpfJaCadastrado(cpf : string): Observable <any> {
    return this.http.get(`${this.api}/clientes/pesquisaCPF/${cpf}`);
  }

  checaCnpjJaCadastrado(cnpj: string): Observable<any> {
    return this.http.get(`${this.api}/clientes/pesquisaCPF/${cnpj}`);
  }

  filtrarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.api}/clientes/filtrar/${nome}`);
  }
}
