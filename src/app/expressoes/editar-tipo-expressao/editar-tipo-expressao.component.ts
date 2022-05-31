import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoExpressaoModel } from 'src/app/model/tipo-expressao.model';
import { TipoExpressaoService } from 'src/app/services/tipo-expressao.service';

@Component({
  selector: 'app-editar-tipo-expressao',
  templateUrl: './editar-tipo-expressao.component.html',
  styleUrls: ['./editar-tipo-expressao.component.css']
})
export class EditarTipoExpressaoComponent implements OnInit {

  public tipoModel: TipoExpressaoModel = new TipoExpressaoModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";

  constructor(
    private tipoService: TipoExpressaoService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.tipoService.pesquisarTipoPorId(+ params['id']).subscribe(tipoEditar => {
            this.tipoModel = tipoEditar;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  editarTipo(){
    this.mensagemAlerta = "";

    if (this.tipoModel.nome == "" || this.tipoModel.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatória";
      this.tipoAlerta = "danger";
      return false;
    }

    this.tipoService.editarTipo(this.tipoModel).subscribe(tipoEditada => {
        if (tipoEditada !== null) {
          this.mensagemAlerta = `Tipo da expressão ${this.tipoModel.nome} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar o tipo da expressão ${this.tipoModel.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }



}
