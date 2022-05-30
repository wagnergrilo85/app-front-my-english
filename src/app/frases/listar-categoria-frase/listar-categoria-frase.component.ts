import { Component, OnInit } from '@angular/core';
import { CategoriaFraseModel } from 'src/app/model/categoria-frase.model';
import { CategoriaFraseService } from 'src/app/services/categoria-frase.service';

@Component({
  selector: 'app-listar-categoria-frase',
  templateUrl: './listar-categoria-frase.component.html',
  styleUrls: ['./listar-categoria-frase.component.css']
})
export class ListarCategoriaFraseComponent implements OnInit {

  categorias: Array<CategoriaFraseModel> = [];

  constructor(private categoriaFraseService: CategoriaFraseService ) { }

  ngOnInit() {
    this.categoriaFraseService.listarCategorias().subscribe(listaCategoria => {
      this.categorias = listaCategoria;
    });
  }

}
