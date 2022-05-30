import { Component, OnInit } from '@angular/core';
import { TipoFraseModel } from 'src/app/model/tipo-frase.model';
import { TipoFraseService } from 'src/app/services/tipo-frase.service';

@Component({
  selector: 'app-listar-tipo-frase',
  templateUrl: './listar-tipo-frase.component.html',
  styleUrls: ['./listar-tipo-frase.component.css']
})
export class ListarTipoFraseComponent implements OnInit {

  tipos: Array<TipoFraseModel> = [];

  constructor(private tipoFraseService: TipoFraseService ) { }

  ngOnInit() {
    this.tipoFraseService.listarTipos().subscribe(lista => {
      this.tipos = lista;
    });
  }

}
