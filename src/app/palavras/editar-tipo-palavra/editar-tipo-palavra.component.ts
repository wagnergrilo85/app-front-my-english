import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-editar-tipo-palavra',
  templateUrl: './editar-tipo-palavra.component.html',
  styleUrls: ['./editar-tipo-palavra.component.css']
})
export class EditarTipoPalavraComponent implements OnInit {
  
  public tipoPalavra: TipoPalavraModel = new TipoPalavraModel();
  mensagemAlerta: string = "";
  tipoAlerta: string = "success";
 

  constructor(
    private tipoPalavraService: TipoPalavraService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {

   }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.tipoPalavraService.pesquisarTipoPorId(+ params['id']).subscribe(tipoEditar => {
            this.tipoPalavra = tipoEditar;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  editarCategoria(){
    this.mensagemAlerta = "";

    if (this.tipoPalavra.nome == "" || this.tipoPalavra.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatória";
      this.tipoAlerta = "danger";
      return false;
    }
    
    this.tipoPalavraService.editarCategoria(this.tipoPalavra).subscribe(tipoPalavraEditada => {
      console.log("---------RESPOSTA-----------");
      console.log(tipoPalavraEditada);

        if (tipoPalavraEditada !== null) {
          this.mensagemAlerta = `Tipo da palavra ${this.tipoPalavra.nome} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar o tipo da palavra ${this.tipoPalavra.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }


}
