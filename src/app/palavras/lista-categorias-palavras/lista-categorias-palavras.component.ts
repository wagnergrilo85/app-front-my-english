import { Component, OnInit } from '@angular/core';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-lista-categorias-palavras',
  templateUrl: './lista-categorias-palavras.component.html',
  styleUrls: ['./lista-categorias-palavras.component.css']
})
export class ListaCategoriasPalavrasComponent implements OnInit {

  categoriaPalavra: Array<CategoriaPalavrasModel> =[];

  constructor(private categoriaService: CategoriaService ) { }

  ngOnInit() {
    this.categoriaService.listarCategorias().subscribe(listaCategoria=> {
      console.log(listaCategoria);      
      this.categoriaPalavra = listaCategoria;
    });
  }

}
