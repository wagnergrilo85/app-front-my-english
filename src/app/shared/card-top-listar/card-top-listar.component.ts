import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-top-listar',
  templateUrl: './card-top-listar.component.html',
  styleUrls: ['./card-top-listar.component.css']
})
export class CardTopListarComponent implements OnInit {

  constructor(private _router: Router) { }

  @Input() labelNovaEntidade: string = "Novo";
  @Input() rotaNovaEntidade: string = "";
  @Input() rotaListaCategorias: string = "";
  @Input() rotaListaTipos: string = "";
  @Input() rotaFiltrar: string = "";
  @Input() rotaImprimir: string = "";

  ngOnInit() {
  }

  fnRotaNovaEntidade(){
    this._router.navigateByUrl(this.rotaNovaEntidade);
  }

  fnRrotaListaCategorias(){
    this._router.navigateByUrl(this.rotaListaCategorias);
  }

  fnRrotaListaTipos(){
    this._router.navigateByUrl(this.rotaListaTipos);
  }

  fnRotaImprimir(){
    this._router.navigateByUrl(this.rotaImprimir);
  }

  fnRotaFiltrar(){
    this._router.navigateByUrl(this.rotaFiltrar);
  }
}
