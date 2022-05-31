import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VerboEnum } from 'src/app/enum/verbo.enum';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';
import { PalavraService } from 'src/app/services/palavra.service';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-cadastrar-palavras',
  templateUrl: './cadastrar-palavras.component.html',
  styleUrls: ['./cadastrar-palavras.component.css']
})
export class CadastrarPalavrasComponent implements OnInit {

  public palavraModel: PalavrasModel = new PalavrasModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";
  public tipoPalavras: Array<TipoPalavraModel> = [];
  public arrayCategoriaPalavras: Array<CategoriaPalavrasModel> = [];
  public verboEnum = VerboEnum;
  public enumKeysVerboEnum = [];
  public categoriaPalavraSelecionada: CategoriaPalavrasModel;


  constructor(
    private palavraService: PalavraService,
    private tipoPalavraServise: TipoPalavraService,
    private categoriaPalavraService: CategoriaPalavraService
    ) 
  {
    this.enumKeysVerboEnum = Object.keys(this.verboEnum);
  }

  ngOnInit() {
    this.palavraModel.categoriaPalavras = [];
    this.palavraModel.rating = 3;
    this.palavraModel.status = 1;
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

    if (this.palavraModel.palavraEg == "" || this.palavraModel.palavraEg == null) {
      this.mensagemAlerta = "O nome da palavra em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.palavraModel.palavraPt == "" || this.palavraModel.palavraPt == null) {
      this.mensagemAlerta = "O nome da palavra em português é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.palavraModel.tag == "" || this.palavraModel.tag == null) {
      this.mensagemAlerta = "O campo tag é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.palavraService.cadastrarPalavra(this.palavraModel).subscribe(
      palavraCadastrada => {
        if (palavraCadastrada !== null) {
          this.mensagemAlerta = `Palavra ${this.palavraModel.palavraPt} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.resetDados();
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.palavraModel.palavraPt}!`;
          this.tipoAlerta = "danger";
        }
      }, error => {
        console.log(error);
        
        this.mensagemAlerta = error;
        this.tipoAlerta = "danger";
      }
    );

  }

  public adicionarCategoria(){
    if(this.categoriaPalavraSelecionada != null){
      this.palavraModel.categoriaPalavras.push(this.categoriaPalavraSelecionada);
      this.categoriaPalavraSelecionada = null;
    }
  }

  public removerCategoria(categoria: CategoriaPalavrasModel){
    if(categoria != null){
      this.palavraModel.categoriaPalavras =  this.palavraModel.categoriaPalavras.filter(cat => cat != categoria);
    }
  }

  public resetDados(){
    this.palavraModel.categoriaPalavras = [];
    this.palavraModel.palavraEg = "";
    this.palavraModel.palavraPt = "";
    this.palavraModel.tag = "";
    this.palavraModel.rating = 3;
    this.palavraModel.status = 0;
    this.categoriaPalavraSelecionada = null;
  }
}
