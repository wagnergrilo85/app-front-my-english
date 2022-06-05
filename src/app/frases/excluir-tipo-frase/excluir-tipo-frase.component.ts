import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoFraseModel } from 'src/app/model/tipo-frase.model';
import { TipoFraseService } from 'src/app/services/tipo-frase.service';

@Component({
  selector: 'app-excluir-tipo-frase',
  templateUrl: './excluir-tipo-frase.component.html',
  styleUrls: ['./excluir-tipo-frase.component.css']
})
export class ExcluirTipoFraseComponent implements OnInit {
  
  public tipoModel: TipoFraseModel = new TipoFraseModel();
  public mensagemAlerta : string = "";

  constructor(private tiposFraseService:TipoFraseService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.tiposFraseService.pesquisarTipoPorId(+params['id']).subscribe(tipoFraseExcluir => {
            this.tipoModel = tipoFraseExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirTipo(){
    if (confirm("Deseja excluir o tipo " + "?")) {

      this.tiposFraseService.deletarTipo(+this.tipoModel.id).subscribe(respostaTipoFrase => {
        if(respostaTipoFrase){
          alert('Tipo da frase deletada com sucesso!');
          this.router.navigate(['/frases/tipos/listar'])
        }else{
          this.mensagemAlerta = "Erro ao excluir o tipo da frase";
          return false;
        }
      });
    }
  }

}
