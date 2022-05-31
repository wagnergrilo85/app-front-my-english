import { Component, OnInit } from '@angular/core';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-cadastrar-tipo-palavra',
  templateUrl: './cadastrar-tipo-palavra.component.html',
  styleUrls: ['./cadastrar-tipo-palavra.component.css']
})
export class CadastrarTipoPalavraComponent implements OnInit {

  public tipoPalavra: TipoPalavraModel = new TipoPalavraModel();

  mensagemAlerta: string = '';

  tipoAlerta: string = "success";

  constructor(private tipoPalavraServise:TipoPalavraService) { }

  ngOnInit() {
  }

  cadastrarTipo() {

    this.mensagemAlerta = "";

    if (this.tipoPalavra.nome == "" || this.tipoPalavra.nome == null) {
      this.mensagemAlerta = "O nome do tipo da palavra é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.tipoPalavraServise.cadastrarTipo(this.tipoPalavra).subscribe(tipopalavraCadastrada => {
      console.log("---------RESPOSTA-----------");
      console.log(tipopalavraCadastrada);

        if (tipopalavraCadastrada !== null) {
          this.mensagemAlerta = `Tipo da Palavra ${this.tipoPalavra.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar o tipo da palavra ${this.tipoPalavra.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }




}
