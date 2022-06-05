import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaFraseModel } from 'src/app/model/categoria-frase.model';
import { CategoriaFraseService } from 'src/app/services/categoria-frase.service';

@Component({
  selector: 'app-excluir-categoria-frase',
  templateUrl: './excluir-categoria-frase.component.html',
  styleUrls: ['./excluir-categoria-frase.component.css']
})
export class ExcluirCategoriaFraseComponent implements OnInit {
  
  public categoria: CategoriaFraseModel = new CategoriaFraseModel();
  public mensagemAlerta : string = "";

  constructor(
    private categoriaFraseService: CategoriaFraseService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.categoriaFraseService.pesquisarCategoriaPorId(+params['id']).subscribe(categoriaExcluir => {
            this.categoria = categoriaExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirCategoria(){
    if (confirm("Deseja excluir a categoria " + "?")) {
      this.categoriaFraseService.deletarCategoria(+this.categoria.id).subscribe(respostaCategoria => {
        if(respostaCategoria){
          alert('Categoria de palavra deletada com sucesso!');
          this.router.navigate(['/frases/categorias/listar'])
        }else{
          this.mensagemAlerta = "Erro ao excluir a categoria!";
          return false;
        }
      });
    }
  }


}
