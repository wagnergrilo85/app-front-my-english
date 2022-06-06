import { Component, OnInit } from '@angular/core';
import { CategoriaFraseModel } from 'src/app/model/categoria-frase.model';
import { CategoriaFraseService } from 'src/app/services/categoria-frase.service';

@Component({
  selector: 'app-cadastrar-categoria-frase',
  templateUrl: './cadastrar-categoria-frase.component.html',
  styleUrls: ['./cadastrar-categoria-frase.component.css']
})
export class CadastrarCategoriaFraseComponent implements OnInit {

  public categoriaFrase: CategoriaFraseModel = new CategoriaFraseModel();
  public mensagemAlerta: string = '';
  public tipoAlerta: string = "success";

  constructor(private categoriaFraseService: CategoriaFraseService) { }

  ngOnInit() {
  }
  cadastrar() {

    this.mensagemAlerta = "";

    if (this.categoriaFrase.nome== "" || this.categoriaFrase.nome == null) {
      this.mensagemAlerta = "O nome da categoria é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.categoriaFraseService.cadastrarCategoria(this.categoriaFrase).subscribe(categoriaCadastrada => {
        if (categoriaCadastrada !== null) {
          this.mensagemAlerta = `Categoria ${this.categoriaFrase.nome} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.categoriaFrase = new CategoriaFraseModel();
          this.categoriaFrase.id = null;
          this.categoriaFrase.nome = "";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.categoriaFrase.nome}!`;
          this.tipoAlerta = "danger";
        }
    });
  }

}
