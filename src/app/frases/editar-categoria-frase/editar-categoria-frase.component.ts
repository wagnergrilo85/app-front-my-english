import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaFraseModel } from 'src/app/model/categoria-frase.model';
import { CategoriaFraseService } from 'src/app/services/categoria-frase.service';

@Component({
  selector: 'app-editar-categoria-frase',
  templateUrl: './editar-categoria-frase.component.html',
  styleUrls: ['./editar-categoria-frase.component.css']
})
export class EditarCategoriaFraseComponent implements OnInit {
  
  public categoriaModel: CategoriaFraseModel = new CategoriaFraseModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";

  constructor(private categoriaFraseService: CategoriaFraseService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.categoriaFraseService.pesquisarCategoriaPorId(+ params['id']).subscribe(categoriaEditar => {
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

    this.categoriaFraseService.editarCategoria(this.categoriaModel).subscribe(categoriaEditada => {
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
