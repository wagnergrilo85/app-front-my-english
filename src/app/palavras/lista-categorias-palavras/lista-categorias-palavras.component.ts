import { Component, OnInit } from '@angular/core';
import { CategoriaPalavrasModel } from 'src/app/model/categoria-palavras.model';
import { CategoriaPalavraService } from 'src/app/services/categoria-palavra.service';

@Component({
  selector: 'app-lista-categorias-palavras',
  templateUrl: './lista-categorias-palavras.component.html',
  styleUrls: ['./lista-categorias-palavras.component.css']
})
export class ListaCategoriasPalavrasComponent implements OnInit {

  categorias: Array<CategoriaPalavrasModel> = [];

  constructor(private categoriaPalavraService: CategoriaPalavraService ) { }

  ngOnInit() {
    this.categoriaPalavraService.listarCategorias().subscribe(listaCategoria => {
      this.categorias = listaCategoria;
    });
  }

}
