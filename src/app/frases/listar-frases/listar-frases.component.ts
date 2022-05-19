import { Component, OnInit } from '@angular/core';
import { FrasesModel } from 'src/app/model/frases.model';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-listar-frases',
  templateUrl: './listar-frases.component.html',
  styleUrls: ['./listar-frases.component.css']
})
export class ListarFrasesComponent implements OnInit {

  frases: FrasesModel[];

  constructor(private frasesService: FraseService) { }

  ngOnInit() {
    this.frasesService.listarFrases().subscribe(listaFrases => {
      this.frases = listaFrases;
    });
  }
}
