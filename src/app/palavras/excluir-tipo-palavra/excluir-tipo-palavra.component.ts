import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-excluir-tipo-palavra',
  templateUrl: './excluir-tipo-palavra.component.html',
  styleUrls: ['./excluir-tipo-palavra.component.css']
})
export class ExcluirTipoPalavraComponent implements OnInit {

  public tipoModel: TipoPalavraModel = new TipoPalavraModel();
  public mensagemAlerta : string = "";

  constructor(private tiposPalavraService:TipoPalavraService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.tiposPalavraService.pesquisarTipoPorId(+params['id']).subscribe(tipoPalavraExcluir => {
            this.tipoModel = tipoPalavraExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirTipo(){
    if (confirm("Deseja excluir o tipo " + "?")) {

      this.tiposPalavraService.deletarTipo(+this.tipoModel.id).subscribe(respostaTipoPalavra => {
        if(respostaTipoPalavra){
          alert('Tipo da palavra deletada com sucesso!');
          this.router.navigate(['/palavras/tipos/listar'])
        }else{
          this.mensagemAlerta = "Erro ao excluir o tipo da palavra";
          return false;
        }
      });
    }
  }
}



