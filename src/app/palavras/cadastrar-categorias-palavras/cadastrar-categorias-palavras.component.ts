import { Component, OnInit } from '@angular/core';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';

@Component({
  selector: 'app-cadastrar-categorias-palavras',
  templateUrl: './cadastrar-categorias-palavras.component.html',
  styleUrls: ['./cadastrar-categorias-palavras.component.css']
})
export class CadastrarCategoriasPalavrasComponent implements OnInit {

  public categoria: CategoriaPalavrasModel = new CategoriaPalavrasModel();
  public mensagemAlerta: string = '';
  public tipoAlerta: string = "success";

  constructor(private categoriaPalavraService: CategoriaPalavraService) { }

  ngOnInit() {
  }

  cadastrar() {

    this.mensagemAlerta = "";

    if (this.categoria.nome== "" || this.categoria.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.categoriaPalavraService.cadastrarCategoria(this.categoria).subscribe(categoriaCadastrada => {
        if (categoriaCadastrada !== null) {
          this.mensagemAlerta = `Categoria ${this.categoria.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.categoria = new CategoriaPalavrasModel();
          this.categoria.nome = "";
          this.categoria.id = null;
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.categoria.nome}!`;
          this.tipoAlerta = "danger";
        }
    });
  }

}
