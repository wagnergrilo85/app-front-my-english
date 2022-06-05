import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoFraseModel } from 'src/app/model/tipo-frase.model';
import { TipoFraseService } from 'src/app/services/tipo-frase.service';

@Component({
  selector: 'app-editar-tipo-frase',
  templateUrl: './editar-tipo-frase.component.html',
  styleUrls: ['./editar-tipo-frase.component.css']
})
export class EditarTipoFraseComponent implements OnInit {

  public tipoFrase: TipoFraseModel = new TipoFraseModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";


  constructor(private tipoFraseService: TipoFraseService,
    private router: Router,
    private activeRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.tipoFraseService.pesquisarTipoPorId(+ params['id']).subscribe(tipoEditar => {
            this.tipoFrase = tipoEditar;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }
  editarTipo(){
    this.mensagemAlerta = "";

    if (this.tipoFrase.nome == "" || this.tipoFrase.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatória";
      this.tipoAlerta = "danger";
      return false;
    }

    this.tipoFraseService.editarTipo(this.tipoFrase).subscribe(tipoFraseEditada => {
        if (tipoFraseEditada !== null) {
          this.mensagemAlerta = `Tipo da frase ${this.tipoFrase.nome} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar o tipo da frase ${this.tipoFrase.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }


}
