import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaExpressaoModel } from 'src/app/model/categoria-expressao.model';
import { CategoriaExpressaoService } from 'src/app/services/categoria-expressao.service';

@Component({
  selector: 'app-excluir-categoria-expressao',
  templateUrl: './excluir-categoria-expressao.component.html',
  styleUrls: ['./excluir-categoria-expressao.component.css']
})
export class ExcluirCategoriaExpressaoComponent implements OnInit {

  public categoria: CategoriaExpressaoModel = new CategoriaExpressaoModel();
  public mensagemAlerta : string = "";

  constructor(private categoriaExpressaoService: CategoriaExpressaoService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.categoriaExpressaoService.pesquisarCategoriaPorId(+params['id']).subscribe(categoriaExcluir => {
            this.categoria = categoriaExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirCategoria(){
    if (confirm("Deseja excluir a categoria " + "?")) {
      this.categoriaExpressaoService.deletarCategoria(+this.categoria.id).subscribe(respostaCategoria => {
        if(respostaCategoria){
          alert('Categoria de expressão deletada com sucesso!');
          this.router.navigate(['/expressoes/categorias/listar'])
        }else{
          this.mensagemAlerta = "Erro ao excluir a categoria!";
          return false;
        }
      });
    }
  }

}
