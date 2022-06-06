import { Component, OnInit } from '@angular/core';
import { CategoriaExpressaoModel } from 'src/app/model/categoria-expressao.model';
import { CategoriaExpressaoService } from 'src/app/services/categoria-expressao.service';

@Component({
  selector: 'app-cadastrar-categoria-expressao',
  templateUrl: './cadastrar-categoria-expressao.component.html',
  styleUrls: ['./cadastrar-categoria-expressao.component.css']
})
export class CadastrarCategoriaExpressaoComponent implements OnInit {

  public categoria: CategoriaExpressaoModel = new CategoriaExpressaoModel();
  public mensagemAlerta: string = '';
  public tipoAlerta: string = "success";

  constructor(private categoriaExpressaoService: CategoriaExpressaoService) { }

  ngOnInit() {
  }

  cadastrar() {

    this.mensagemAlerta = "";

    if (this.categoria.nome== "" || this.categoria.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.categoriaExpressaoService.cadastrarCategoria(this.categoria).subscribe(categoriaCadastrada => {
        if (categoriaCadastrada !== null) {
          this.mensagemAlerta = `Categoria ${this.categoria.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.categoria = new CategoriaExpressaoModel();
          this.categoria.id = null;
          this.categoria.nome = "";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.categoria.nome}!`;
          this.tipoAlerta = "danger";
        }
    });
  }


}
