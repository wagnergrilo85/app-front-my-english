import { Component, OnInit } from '@angular/core';
import { StatusEnum } from 'src/app/enum/status.enum';
import { VerboEnum } from 'src/app/enum/verbo.enum';
import { CategoriaExpressaoModel } from 'src/app/model/categoria-expressao.model';
import { ExpressoesModel } from 'src/app/model/expressoes.model';
import { TipoExpressaoModel } from 'src/app/model/tipo-expressao.model';
import { CategoriaExpressaoService } from 'src/app/services/categoria-expressao.service';
import { ExpressaoService } from 'src/app/services/expressao.service';
import { TipoExpressaoService } from 'src/app/services/tipo-expressao.service';

@Component({
  selector: 'app-cadastrar-expressoes',
  templateUrl: './cadastrar-expressoes.component.html',
  styleUrls: ['./cadastrar-expressoes.component.css']
})
export class CadastrarExpressoesComponent implements OnInit {

  public expressaoModel: ExpressoesModel = new ExpressoesModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";
  public tipExpressoes: Array<TipoExpressaoModel> = [];
  public arrayCategoriaExpressoes: Array<CategoriaExpressaoModel> = [];
  public verboEnum = VerboEnum;
  public enumKeysVerboEnum = [];
  public categoriaExpressaoSelecionada: CategoriaExpressaoModel;
  public statusEnum = StatusEnum;
  public enumKeysStatusEnum = [];

  constructor(
    private expressaoService: ExpressaoService,
    private tipoExpressaoServise: TipoExpressaoService,
    private categoriaExpressaoService: CategoriaExpressaoService
    )
  {
    this.enumKeysVerboEnum = Object.keys(this.verboEnum);
    this.enumKeysStatusEnum = Object.keys(this.statusEnum);
  }

  ngOnInit() {
    this.expressaoModel.categoriaExpressoes = [];
    this.expressaoModel.rating = 3;
    this.expressaoModel.status = StatusEnum.ATIVADO;
    this.getListaTipo();
    this.getListaCategoriasExpressoes();
  }

  getListaTipo(){
    this.tipoExpressaoServise.listarTipos().subscribe(respListaTipos =>{
      this.tipExpressoes = respListaTipos;
    });
  }

  getListaCategoriasExpressoes(){
    this.categoriaExpressaoService.listarCategorias().subscribe( lista =>{
      this.arrayCategoriaExpressoes = lista;
    })
  }

  cadastrar() {

    this.mensagemAlerta = "";

    if (this.expressaoModel.expressaoEg == "" || this.expressaoModel.expressaoEg == null) {
      this.mensagemAlerta = "O nome da expressão em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.expressaoModel.expressaoPt == "" || this.expressaoModel.expressaoPt == null) {
      this.mensagemAlerta = "O nome da expressão em português é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.expressaoModel.tag == "" || this.expressaoModel.tag == null) {
      this.mensagemAlerta = "O campo tag é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.expressaoService.cadastrarExpressao(this.expressaoModel).subscribe(
      expressaoCadastrada => {
        if (expressaoCadastrada !== null) {
          this.mensagemAlerta = `Expressão ${this.expressaoModel.expressaoPt} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.resetDados();
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.expressaoModel.expressaoPt}!`;
          this.tipoAlerta = "danger";
        }
      }, error => {
        console.log(error);
        this.mensagemAlerta = error;
        this.tipoAlerta = "danger";
      }
    );

  }

  public adicionarExpressao(){
    if(this.categoriaExpressaoSelecionada != null){
      this.expressaoModel.categoriaExpressoes.push(this.categoriaExpressaoSelecionada);
      this.categoriaExpressaoSelecionada = null;
    }
  }

  public removerExpressao(categoria: CategoriaExpressaoModel){
    if(categoria != null){
      this.expressaoModel.categoriaExpressoes =  this.expressaoModel.categoriaExpressoes.filter(cat => cat != categoria);
    }
  }

  public resetDados(){
    this.expressaoModel.categoriaExpressoes = [];
    this.expressaoModel.expressaoEg = "";
    this.expressaoModel.expressaoPt = "";
    this.expressaoModel.tag = "";
    this.expressaoModel.rating = 3;
    this.expressaoModel.status = StatusEnum.ATIVADO;
    this.categoriaExpressaoSelecionada = null;
  }

}
