import { Component, OnInit } from '@angular/core';
import { CategoriaExpressaoModel } from 'src/app/model/categoria-expressao.model';
import { CategoriaExpressaoService } from 'src/app/services/categoria-expressao.service';

@Component({
  selector: 'app-listar-categoria-expressao',
  templateUrl: './listar-categoria-expressao.component.html',
  styleUrls: ['./listar-categoria-expressao.component.css']
})
export class ListarCategoriaExpressaoComponent implements OnInit {

  categorias: Array<CategoriaExpressaoModel> = [];

  constructor(private categoriaExpressaoService: CategoriaExpressaoService ) { }

  ngOnInit() {
    this.categoriaExpressaoService.listarCategorias().subscribe(listaCategoria => {
      this.categorias = listaCategoria;
    });
  }

}
