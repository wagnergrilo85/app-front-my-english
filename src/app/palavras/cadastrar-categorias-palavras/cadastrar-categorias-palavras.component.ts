import { Component, OnInit } from '@angular/core';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-cadastrar-categorias-palavras',
  templateUrl: './cadastrar-categorias-palavras.component.html',
  styleUrls: ['./cadastrar-categorias-palavras.component.css']
})
export class CadastrarCategoriasPalavrasComponent implements OnInit {

  public categoria: CategoriaPalavrasModel = new CategoriaPalavrasModel();

  mensagemAlerta: string = '';

  tipoAlerta: string = "success";

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  }
  cadastrar() {

    this.mensagemAlerta = "";

    if (this.categoria.nome== "" || this.categoria.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.categoriaService.cadastrarCategoria(this.categoria).subscribe(categoriaCadastrada => {
      console.log("---------RESPOSTA-----------");
      console.log(categoriaCadastrada);

        if (categoriaCadastrada !== null) {
          this.mensagemAlerta = `Categoria ${this.categoria.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.categoria.nome}!`;
          this.tipoAlerta = "danger";
        }
    });

  }


}
