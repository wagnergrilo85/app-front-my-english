import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';

@Component({
  selector: 'app-excluir-categoria-palavras',
  templateUrl: './excluir-categoria-palavras.component.html',
  styleUrls: ['./excluir-categoria-palavras.component.css']
})
export class ExcluirCategoriaPalavrasComponent implements OnInit {

  public categoria: CategoriaPalavrasModel = new CategoriaPalavrasModel();
  mensagemAlerta : string = "";

  constructor(private categoriaPalavraService: CategoriaPalavraService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.categoriaPalavraService.pesquisarCategoriaPorId(+params['id']).subscribe(categoriaExcluir => {
            this.categoria = categoriaExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirCategoria(){
    if (confirm("Deseja excluir a categoria " + "?")) {

      this.categoriaPalavraService.deletarCategoria(+this.categoria.id).subscribe(respostaCategoria => {
        console.log("-------------")
        console.log(respostaCategoria)
        if(respostaCategoria){
          alert('Categoria de palavra deletada com sucesso!');
          this.router.navigate(['/palavras/categorias/listar'])
        }else{
          this.mensagemAlerta = "Erro ao excluir a categoria!";
          return false;
        }
      });

    }

  }

}
