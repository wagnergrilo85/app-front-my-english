import { Component, OnInit } from '@angular/core';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { TipoPalavraModel } from 'src/app/model/tipo-palavra.model';
import { PalavraService } from 'src/app/services/palavra.service';
import { TipoPalavraService } from 'src/app/services/tipo-palavra.service';

@Component({
  selector: 'app-listar-palavras',
  templateUrl: './listar-palavras.component.html',
  styleUrls: ['./listar-palavras.component.css']
})
export class ListarPalavrasComponent implements OnInit {

  public showCardPesquisa: boolean = false;
  public palavras: PalavrasModel[];
  public tipoPalavras: Array<TipoPalavraModel> = [];
  public arrayPalavrasBackupPequisa: Array<PalavrasModel> = [];

  public objPesquisa: any = {
    "direcao": "",
    "tipoPalavra": TipoPalavraModel,
    "tag": "",
    "pesquisar": ""
  }

  constructor(
    private palavrasService: PalavraService,
    private tipoPalavraServise: TipoPalavraService,
    ) {
  }

  ngOnInit() {
    this.palavrasService.listarPalavras().subscribe(lista => {
      this.palavras = lista;
    });
    this.getListaTipo();
  }

  mostrarCardPesquisa(mostrar: any){
    this.showCardPesquisa = mostrar;
  }

  getListaTipo(){
    this.tipoPalavraServise.listarTipos().subscribe(respListaTipos =>{
      this.tipoPalavras = respListaTipos;
    });
  }

  pesquisar(){
      this.arrayPalavrasBackupPequisa = this.palavras;

      if(this.objPesquisa.direcao === "portugues"){
        this.palavras = this.palavras.filter(p => p.palavraPt === this.objPesquisa.pesquisar );
      }

      if(this.objPesquisa.direcao === "ingles"){
        this.palavras = this.palavras.filter(p => p.palavraEg === this.objPesquisa.pesquisar );
      }

      if(this.objPesquisa.direcao === "NA"){
        this.palavras = this.palavras.filter(p => (p.palavraEg === this.objPesquisa.pesquisar) || (p.palavraPt === this.objPesquisa.pesquisar));
      }

      if(this.objPesquisa.tipoPalavra.nome !== ""){
        this.palavras = this.palavras.filter(p => p.tipoPalavra.id === this.objPesquisa.tipoPalavra.id);
      }

      if(this.objPesquisa.tag !== ""){
        this.palavras = this.palavras.filter(p => p.tag === this.objPesquisa.tag);
      }


      // this.palavras = this.palavras.filter(p => {

      //   (this.objPesquisa.direcao === "portugues" ?
      //     p.palavraPt === this.objPesquisa.pesquisar : this.objPesquisa.direcao === "ingles" ? p => p.palavraEg === this.objPesquisa.pesquisar : '')
      //   && (this.objPesquisa.tipoPalavra.nome !== "" ? p => p.tipoPalavra.id === this.objPesquisa.tipoPalavra.id : '')
      //   && (this.objPesquisa.tag !== "" ? p => p.tag === this.objPesquisa.tag : '')
      // });

      console.log(this.objPesquisa);
      console.log(this.palavras);
  }

  ocultarPesquisar(){
    this.palavras = this.arrayPalavrasBackupPequisa;
    this.arrayPalavrasBackupPequisa = [];
    this.showCardPesquisa = false;
  }


}
