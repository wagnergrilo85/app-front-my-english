import { Component, OnInit } from '@angular/core';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-cadastrar-palavras',
  templateUrl: './cadastrar-palavras.component.html',
  styleUrls: ['./cadastrar-palavras.component.css']
})
export class CadastrarPalavrasComponent implements OnInit {

  public palavraModel: PalavrasModel = new PalavrasModel();
  mensagemAlerta: string = "";
  tipoAlerta: string = "success";

  constructor(private palavraService: PalavraService) {
  }

  ngOnInit() {
    this.palavraModel.rating = 3;
    this.palavraModel.status = 1;
  }

  cadastrar() {

    this.mensagemAlerta = "";

    if (this.palavraModel.palavraEg == "" || this.palavraModel.palavraEg == null) {
      this.mensagemAlerta = "O nome da palavra em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.palavraService.cadastrarPalavra(this.palavraModel).subscribe(palavraCadastrada => {
      console.log("---------RESPOSTA-----------");
      console.log(palavraCadastrada);

        if (palavraCadastrada !== null) {
          this.mensagemAlerta = `Palavra ${this.palavraModel.palavraPt} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.palavraModel.palavraPt}!`;
          this.tipoAlerta = "danger";
        }
    });

  }

}
