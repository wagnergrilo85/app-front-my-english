import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionarioTestePalavrasModel } from 'src/app/model/questionario-teste-palavras.model';
import { TesteSignificadoPalavraModel } from 'src/app/model/teste-significado-palavra.model';
import { TestesService } from 'src/app/services/testes.service';

@Component({
  selector: 'app-realizar-teste-siginificado-palavras',
  templateUrl: './realizar-teste-siginificado-palavras.component.html',
  styleUrls: ['./realizar-teste-siginificado-palavras.component.css']
})
export class RealizarTesteSiginificadoPalavrasComponent implements OnInit {

  public testeSignificadoPalavraModel: TesteSignificadoPalavraModel = new TesteSignificadoPalavraModel();
  public arrayQuestionarioTestePalavrasModel: Array<QuestionarioTestePalavrasModel>;
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";

  constructor(
    private _testesService: TestesService,
    private route : Router,
    private activeRoute : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getPerguntasTestePalavra();
    this.getTestePalavra();
  }

  getPerguntasTestePalavra(){
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this._testesService.obterQuestionarioPerguntasPalavrasPorIdTeste(+params['id']).subscribe(
        lista => {
          this.arrayQuestionarioTestePalavrasModel = lista;
          console.log(this.arrayQuestionarioTestePalavrasModel);
        },
        error => console.log('Opss deu erro ' + error))
      }
    });
  }

  getTestePalavra(){
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
          this._testesService.pesquisarTesteSignificadoPalavraPorId(+params['id']).subscribe(
            teste => {
              this.testeSignificadoPalavraModel = teste;
              console.log(this.testeSignificadoPalavraModel);
            },
            error => console.log('Opss deu erro ' + error))
      }
    });
  }

  salvarRespostas(){
    this._testesService.salvarQuestionarioPerguntasPalavrasPorIdTeste( this.arrayQuestionarioTestePalavrasModel).subscribe(resposta =>{
      console.log(resposta);
      this.getTestePalavra();
    });
  }


}
