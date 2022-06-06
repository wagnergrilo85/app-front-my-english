import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api/api';
import { QuestionarioTestePalavrasModel } from '../model/questionario-teste-palavras.model';
import { TesteSignificadoPalavraModel } from '../model/teste-significado-palavra.model';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  private api: string = API;

  constructor(private http: HttpClient) {
  }

  listarTesteSignificadoPalavras(): Observable<any>{
     return this.http.get(`${API}/teste-significado-palavras/listar`);
  }

  cadastrarTesteSignificadoPalavra(teste: TesteSignificadoPalavraModel): Observable<any>{
    return this.http.post(`${API}/teste-significado-palavras/cadastrar`, teste);
  }

  pesquisarTesteSignificadoPalavraPorId(id: number) : Observable <any> {
      return this.http.get(`${API}/teste-significado-palavras/pesquisar/${id}`);
  }

  editarTesteSignificadoPalavra(teste : TesteSignificadoPalavraModel) : Observable <any> {
    return this.http.put(`${API}/teste-significado-palavras/editar`, teste);
  }

  obterQuestionarioPerguntasPalavrasPorIdTeste(idTeste: number) : Observable <any> {
    return this.http.get(`${API}/teste-significado-palavras/questionario/perguntas/${idTeste}`);
  }

  salvarQuestionarioPerguntasPalavrasPorIdTeste(arrayQuestionarioTestePalavrasModel: Array<QuestionarioTestePalavrasModel>) : Observable <any> {
    console.log(arrayQuestionarioTestePalavrasModel);
    return this.http.post(`${API}/teste-significado-palavras/responder/perguntas/`, arrayQuestionarioTestePalavrasModel);
  }


}
