import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEnum } from 'src/app/enum/status.enum';
import { CategoriaExpressaoModel } from 'src/app/model/categoria-expressao.model';
import { ExpressoesModel } from 'src/app/model/expressoes.model';
import { TipoExpressaoModel } from 'src/app/model/tipo-expressao.model';
import { CategoriaExpressaoService } from 'src/app/services/categoria-expressao.service';
import { ExpressaoService } from 'src/app/services/expressao.service';
import { TipoExpressaoService } from 'src/app/services/tipo-expressao.service';

@Component({
  selector: 'app-editar-expressoes',
  templateUrl: './editar-expressoes.component.html',
  styleUrls: ['./editar-expressoes.component.css']
})
export class EditarExpressoesComponent implements OnInit {
  
  public expressaoModel: ExpressoesModel = new ExpressoesModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";
  public arrayCategoriaExpressao: Array<CategoriaExpressaoModel> = [];
  public tipoExpressao: Array<TipoExpressaoModel> = []; 
  public statusEnum = StatusEnum;
  public enumKeysStatusEnum = [];
  public categoriaExpressaoSelecionada: CategoriaExpressaoModel;

  constructor(private expressaoService: ExpressaoService,
    private tipoexpressaoServise: TipoExpressaoService,
    private categoriaExpressaoService: CategoriaExpressaoService,
    private route : Router,
    private activeRoute : ActivatedRoute,) {
      this.enumKeysStatusEnum = Object.keys(this.statusEnum);
     }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
          this.expressaoService.pesquisarExpressaoPorId(+ params['id']).subscribe(expressaoEditar => {
              this.expressaoModel = expressaoEditar;
              this.getListaTipo();
              this.getListaCategoriasPalavras();
            }, error => console.log('Opss deu erro ' + error))
        }
      });
  }
  
  alterarTipoSelect(value: any){
    const idSelecionado = value.target.value;
    this.expressaoModel.tipoExpressao = this.tipoExpressao.find(tipo => tipo.id == idSelecionado);
  }

  getListaTipo(){
    this.expressaoService.listarExpressao().subscribe(respListaTipos =>{
      this.expressaoModel = respListaTipos;
    });
  }

  getListaCategoriasPalavras(){
    this.categoriaExpressaoService.listarCategorias().subscribe( lista =>{
      this.arrayCategoriaExpressao = lista;
    })
  }

  editarPalavra(){
    this.mensagemAlerta = "";

    if (this.expressaoModel.expressaoEg == "" || this.expressaoModel.expressaoEg == null) {
      this.mensagemAlerta = "A expressão em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.expressaoModel.expressaoPt == "" || this.expressaoModel.expressaoPt== null) {
      this.mensagemAlerta = "A expressão em português é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.expressaoService.editarExpressao(this.expressaoModel).subscribe(expressaoEditada => {
        if (expressaoEditada !== null) {
          this.mensagemAlerta = `Expressão ${this.expressaoModel.expressaoPt} editada com sucesso!`;
          this.mensagemAlerta = `Expressão ${this.expressaoModel.expressaoEg} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar expressão ${this.expressaoModel.expressaoPt}!`;
          this.mensagemAlerta = `Erro ao cadastrar expressão ${this.expressaoModel.expressaoEg}!`;
          this.tipoAlerta = "danger";
        }
    });

  }
  public adicionarCategoria(){
    if(this.categoriaExpressaoSelecionada != null){
      this.expressaoModel.categoriaExpressoes.push(this.categoriaExpressaoSelecionada);
      this.categoriaExpressaoSelecionada = null;
    }
  }

  public removerCategoria(categoriaExpressao: CategoriaExpressaoModel){
    if(categoriaExpressao != null){
      this.expressaoModel.categoriaExpressoes =  this.expressaoModel.categoriaExpressoes.filter(cat => cat != categoriaExpressao);
    }
  }

}
