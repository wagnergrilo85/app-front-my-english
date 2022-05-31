import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoExpressaoModel } from 'src/app/model/tipo-expressao.model';
import { TipoExpressaoService } from 'src/app/services/tipo-expressao.service';

@Component({
  selector: 'app-excluir-tipo-expressao',
  templateUrl: './excluir-tipo-expressao.component.html',
  styleUrls: ['./excluir-tipo-expressao.component.css']
})
export class ExcluirTipoExpressaoComponent implements OnInit {

  public tipoModel: TipoExpressaoModel = new TipoExpressaoModel();
  public mensagemAlerta : string = "";

  constructor(private tipoExpressaoService: TipoExpressaoService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.tipoExpressaoService.pesquisarTipoPorId(+params['id']).subscribe(tipoExcluir => {
            this.tipoModel = tipoExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirTipo(){
    if (confirm("Deseja excluir o tipo " + "?")) {

      this.tipoExpressaoService.deletarTipo(+this.tipoModel.id).subscribe(respostaTipo => {
        if(respostaTipo){
          alert('Tipo da expressão deletada com sucesso!');
          this.router.navigate(['/expressoes/tipos/listar'])
        }else{
          this.mensagemAlerta = "Erro ao excluir o tipo da expressão";
          return false;
        }
      });
    }
  }

}
