import { Component, OnInit } from '@angular/core';
import { TipoExpressaoModel } from 'src/app/model/tipo-expressao.model';
import { TipoExpressaoService } from 'src/app/services/tipo-expressao.service';

@Component({
  selector: 'app-cadastrar-tipo-expressao',
  templateUrl: './cadastrar-tipo-expressao.component.html',
  styleUrls: ['./cadastrar-tipo-expressao.component.css']
})
export class CadastrarTipoExpressaoComponent implements OnInit {

  public tipoExpressao: TipoExpressaoModel = new TipoExpressaoModel();
  public mensagemAlerta: string = '';
  public tipoAlerta: string = "success";

  constructor(private tipoExpressaoService: TipoExpressaoService) { }

  ngOnInit() {
  }

  cadastrarTipo() {

    this.mensagemAlerta = "";

    if (this.tipoExpressao.nome == "" || this.tipoExpressao.nome == null) {
      this.mensagemAlerta = "O nome do tipo da palavra é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.tipoExpressaoService.cadastrarTipo(this.tipoExpressao).subscribe(tipoCadastrado => {
      console.log("---------RESPOSTA-----------");
      console.log(tipoCadastrado);

        if (tipoCadastrado !== null) {
          this.mensagemAlerta = `Tipo da Palavra ${this.tipoExpressao.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.tipoExpressao = new TipoExpressaoModel();
        } else {
          this.mensagemAlerta = `Erro ao cadastrar o tipo da palavra ${this.tipoExpressao.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }

}
