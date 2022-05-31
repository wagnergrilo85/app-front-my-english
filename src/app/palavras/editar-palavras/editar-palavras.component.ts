import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEnum } from 'src/app/enum/status.enum';
import { VerboEnum } from 'src/app/enum/verbo.enum';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';
import { PalavraService } from 'src/app/services/palavra.service';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-editar-palavras',
  templateUrl: './editar-palavras.component.html',
  styleUrls: ['./editar-palavras.component.css']
})
export class EditarPalavrasComponent implements OnInit {

  public palavraModel: PalavrasModel = new PalavrasModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";
  public arrayCategoriaPalavras: Array<CategoriaPalavrasModel> = [];
  public tipoPalavras: Array<TipoPalavraModel> = [];
  public verboEnum = VerboEnum;
  public statusEnum = StatusEnum;
  public enumKeysStatusEnum = [];
  public enumKeysVerboEnum = [];
  public categoriaPalavraSelecionada: CategoriaPalavrasModel;

  constructor(
    private palavraService: PalavraService,
    private tipoPalavraServise: TipoPalavraService,
    private categoriaPalavraService: CategoriaPalavraService,
    private route : Router,
    private activeRoute : ActivatedRoute,
  ) {
      this.enumKeysVerboEnum = Object.keys(this.verboEnum);
      this.enumKeysStatusEnum = Object.keys(this.statusEnum);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
    if (params.hasOwnProperty('id')) {
        this.palavraService.pesquisarPalavraPorId(+ params['id']).subscribe(palavraEditar => {
            this.palavraModel = palavraEditar;
            this.getListaTipo();
            this.getListaCategoriasPalavras();
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  alterarTipoSelect(value: any){
    const idSelecionado = value.target.value;
    this.palavraModel.tipoPalavra = this.tipoPalavras.find(tipo => tipo.id == idSelecionado);
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

  editarPalavra(){
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

    this.palavraService.editarPalavra(this.palavraModel).subscribe(palavraEditada => {
        if (palavraEditada !== null) {
          this.mensagemAlerta = `Palavra ${this.palavraModel.palavraPt} editada com sucesso!`;
          this.mensagemAlerta = `Palavra ${this.palavraModel.palavraEg} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.palavraModel.palavraPt}!`;
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.palavraModel.palavraEg}!`;
          this.tipoAlerta = "danger";
        }
    });

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

}
