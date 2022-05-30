import { Component, OnInit } from '@angular/core';
import { ExpressoesModel } from 'src/app/model/expressoes.model';
import { ExpressaoService } from 'src/app/services/expressao.service';

@Component({
  selector: 'app-listar-expressoes',
  templateUrl: './listar-expressoes.component.html',
  styleUrls: ['./listar-expressoes.component.css']
})
export class ListarExpressoesComponent implements OnInit {

  expressoes: ExpressoesModel[];

  constructor(private expressaoService: ExpressaoService) { }

  ngOnInit() {
    this.expressaoService.listarExpressao().subscribe(lista => {
      this.expressoes = lista;
    });
  }

}
