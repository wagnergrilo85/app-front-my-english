import { Component, OnInit } from '@angular/core';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-listar-palavras',
  templateUrl: './listar-palavras.component.html',
  styleUrls: ['./listar-palavras.component.css']
})
export class ListarPalavrasComponent implements OnInit {

  palavras: PalavrasModel[];

  constructor(private palavrasService: PalavraService) { }

  ngOnInit() {
    this.palavrasService.listarPalavras().subscribe(lista => {
      this.palavras = lista;
    });
  }

}
