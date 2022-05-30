import { Component, OnInit } from '@angular/core';
import { TipoExpressaoModel } from 'src/app/model/tipo-expressao.model';
import { TipoExpressaoService } from 'src/app/services/tipo-expressao.service';

@Component({
  selector: 'app-listar-tipo-expressao',
  templateUrl: './listar-tipo-expressao.component.html',
  styleUrls: ['./listar-tipo-expressao.component.css']
})
export class ListarTipoExpressaoComponent implements OnInit {

  tipos: Array<TipoExpressaoModel> = [];

  constructor(private tipoExpressaoService: TipoExpressaoService ) { }

  ngOnInit() {
    this.tipoExpressaoService.listarTipos().subscribe(lista => {
      this.tipos = lista;
    });
  }

}
