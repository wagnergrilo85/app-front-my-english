import { Component, OnInit } from '@angular/core';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { TesteSignificadoPalavraModel } from 'src/app/model/teste-significado-palavra.model';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';
import { PalavraService } from 'src/app/services/palavra.service';
import { TestesService } from 'src/app/services/testes.service';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-cadastrar-teste-siginificado-palavras',
  templateUrl: './cadastrar-teste-siginificado-palavras.component.html',
  styleUrls: ['./cadastrar-teste-siginificado-palavras.component.css']
})
export class CadastrarTesteSiginificadoPalavrasComponent implements OnInit {

  public testeSignificadoPalavraModel: TesteSignificadoPalavraModel = new TesteSignificadoPalavraModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";
  public tipoPalavras: Array<TipoPalavraModel> = [];
  public arrayCategoriaPalavras: Array<CategoriaPalavrasModel> = [];
  public categoriaPalavraSelecionada: CategoriaPalavrasModel;


  constructor(
    private testesService: TestesService,
    private palavraService: PalavraService,
    private tipoPalavraServise: TipoPalavraService,
    private categoriaPalavraService: CategoriaPalavraService) {

  }

  ngOnInit() {
    this.testeSignificadoPalavraModel.categoriaPalavra = [];
    this.getListaTipo();
    this.getListaCategoriasPalavras();
  }

  getListaTipo(){
    this.tipoPalavraServise.listarTipos().subscribe(respListaTipos =>{
      this.tipoPalavras = respListaTipos;
    });
  }

  getListaCategoriasPalavras(){
    this.categoriaPalavraService.listarCategorias().subscribe( lista =>{
      this.arrayCategoriaPalavras = lista;
    })
  }

  
  cadastrar() {

    this.mensagemAlerta = "";
    this.testeSignificadoPalavraModel.totalErros = 0;
    this.testeSignificadoPalavraModel.totaoAcertos = 0;
    this.testeSignificadoPalavraModel.dataFinalizacao = null;
    this.testeSignificadoPalavraModel.dataAbertura = new Date();
    this.testeSignificadoPalavraModel.status = 0;

    if (this.testeSignificadoPalavraModel.nomeTeste == "" || this.testeSignificadoPalavraModel.nomeTeste == null) {
      this.mensagemAlerta = "O nome do teste é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.testesService.cadastrarTesteSignificadoPalavra(this.testeSignificadoPalavraModel).subscribe(
      testeCadastrado => {
        if (testeCadastrado !== null) {
          this.mensagemAlerta = `Teste ${this.testeSignificadoPalavraModel.nomeTeste} cadastrado com sucesso!`;
          this.tipoAlerta = "success";
          this.resetDados();
        } else {
          this.mensagemAlerta = `Erro ao cadastrar teste ${this.testeSignificadoPalavraModel.nomeTeste}!`;
          this.tipoAlerta = "danger";
        }
      }, error => {
        console.log(error);

        this.mensagemAlerta = error;
        this.tipoAlerta = "danger";
      }
    );

  }

  public resetDados(){
    this.testeSignificadoPalavraModel = new TesteSignificadoPalavraModel();
    this.testeSignificadoPalavraModel.categoriaPalavra = [];
  }

  public adicionarCategoria(){
    if(this.categoriaPalavraSelecionada != null){
      this.testeSignificadoPalavraModel.categoriaPalavra.push(this.categoriaPalavraSelecionada);
      this.categoriaPalavraSelecionada = null;
    }
  }

  public removerCategoria(categoria: CategoriaPalavrasModel){
    if(categoria != null){
      this.testeSignificadoPalavraModel.categoriaPalavra =  this.testeSignificadoPalavraModel.categoriaPalavra.filter(cat => cat != categoria);
    }
  }

}
