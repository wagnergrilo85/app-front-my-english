import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';


@Component({
  selector: 'app-editar-categorias-palavras',
  templateUrl: './editar-categorias-palavras.component.html',
  styleUrls: ['./editar-categorias-palavras.component.css']
})
export class EditarCategoriasPalavrasComponent implements OnInit {

  public categoriaModel: CategoriaPalavrasModel = new CategoriaPalavrasModel();
  mensagemAlerta: string = "";
  tipoAlerta: string = "success";
 

  constructor(private categoriaServise: CategoriaPalavraService, 
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
      console.log("---------RESPOSTA-----------");
      console.log(categoriaEditada);

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
