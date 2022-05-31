import { Component, OnInit } from '@angular/core';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-listar-tipo-palavra',
  templateUrl: './listar-tipo-palavra.component.html',
  styleUrls: ['./listar-tipo-palavra.component.css']
})
export class ListarTipoPalavraComponent implements OnInit {

  public tiposPalavra: Array<TipoPalavraModel> =[]; 

  constructor(private tipoPalavraServise: TipoPalavraService) { }

  ngOnInit() {
    this.getTiposPalavras();
  }

  getTiposPalavras(){
    this.tipoPalavraServise.listarTipos().subscribe(resultTipos =>{
      this.tiposPalavra = resultTipos;
    })

  }

}
