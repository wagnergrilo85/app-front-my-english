import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaExpressaoModel } from 'src/app/model/categoria-expressao.model';
import { CategoriaExpressaoService } from 'src/app/services/categoria-expressao.service';

@Component({
  selector: 'app-editar-categoria-expressao',
  templateUrl: './editar-categoria-expressao.component.html',
  styleUrls: ['./editar-categoria-expressao.component.css']
})
export class EditarCategoriaExpressaoComponent implements OnInit {

  public categoriaModel: CategoriaExpressaoModel = new CategoriaExpressaoModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";

  constructor(private categoriaServise: CategoriaExpressaoService,
    private router: Router,
    private activeRoute: ActivatedRoute,
   ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.categoriaServise.pesquisarCategoriaPorId(+ params['id']).subscribe(categoriaEditar => {
            this.categoriaModel = categoriaEditar;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  editarCategoria(){
    this.mensagemAlerta = "";

    if (this.categoriaModel.nome == "" || this.categoriaModel.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatória";
      this.tipoAlerta = "danger";
      return false;
    }

    this.categoriaServise.editarCategoria(this.categoriaModel).subscribe(categoriaEditada => {
        if (categoriaEditada !== null) {
          this.mensagemAlerta = `Categoria ${this.categoriaModel.nome} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar a categoria ${this.categoriaModel.nome}!`;
          this.tipoAlerta = "danger";
        }
    });
  }

}
