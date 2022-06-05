import { Component, OnInit } from '@angular/core';
import { TipoFraseModel } from 'src/app/model/tipo-frase.model';
import { TipoFraseService } from 'src/app/services/tipo-frase.service';

@Component({
  selector: 'app-cadastrar-tipo-frase',
  templateUrl: './cadastrar-tipo-frase.component.html',
  styleUrls: ['./cadastrar-tipo-frase.component.css']
})
export class CadastrarTipoFraseComponent implements OnInit {
  
  public tipoFrase: TipoFraseModel = new TipoFraseModel();

  mensagemAlerta: string = '';

  tipoAlerta: string = "success";

  constructor(private tipoFraseServise: TipoFraseService) { }

  ngOnInit() {
  }

  cadastrarTipo() {

    this.mensagemAlerta = "";

    if (this.tipoFrase.nome == "" || this.tipoFrase.nome == null) {
      this.mensagemAlerta = "O nome do tipo da palavra é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.tipoFraseServise.cadastrarTipo(this.tipoFrase).subscribe(tipofraseCadastrada => {
      console.log("---------RESPOSTA-----------");
      console.log(tipofraseCadastrada);

        if (tipofraseCadastrada !== null) {
          this.mensagemAlerta = `Tipo da frase ${this.tipoFrase.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar o tipo da frase ${this.tipoFrase.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }


}
