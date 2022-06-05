import { Component, OnInit } from '@angular/core';
import { TesteSignificadoPalavraModel } from 'src/app/model/teste-significado-palavra.model';
import { TestesService } from 'src/app/services/testes.service';

@Component({
  selector: 'app-listar-teste-siginificado-palavras',
  templateUrl: './listar-teste-siginificado-palavras.component.html',
  styleUrls: ['./listar-teste-siginificado-palavras.component.css']
})
export class ListarTesteSiginificadoPalavrasComponent implements OnInit {

  listaTeste: TesteSignificadoPalavraModel[];

  constructor(private _testesService: TestesService) { }

  ngOnInit() {
    this._testesService.listarTesteSignificadoPalavras().subscribe(lista => {
      this.listaTeste = lista;
    });
  }
}
