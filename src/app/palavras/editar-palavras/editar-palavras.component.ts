import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-editar-palavras',
  templateUrl: './editar-palavras.component.html',
  styleUrls: ['./editar-palavras.component.css']
})
export class EditarPalavrasComponent implements OnInit {

  public palavraModel: PalavrasModel = new PalavrasModel();
  mensagemAlerta: string = "";
  tipoAlerta: string = "success";
  
  constructor(private palavraService: PalavraService,
    private route : Router, 
    private activeRoute : ActivatedRoute, ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
    if (params.hasOwnProperty('id')) {
      this.palavraService.pesquisarPalavraPorId(+ params['id']).subscribe(palavraEditar => {
          this.palavraModel = palavraEditar;
        }, error => console.log('Opss deu erro ' + error))
    }
  });

  }

  editarPalavra(){
    this.mensagemAlerta = "";

    if (this.palavraModel.palavraEg == "" || this.palavraModel.palavraEg == null) {
      this.mensagemAlerta = "O nome da palavra em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }
    
    if (this.palavraModel.palavraPt == "" || this.palavraModel.palavraPt == null) {
      this.mensagemAlerta = "O nome da palavra em português é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.palavraService.editarPalavra(this.palavraModel).subscribe(palavraEditada => {
      console.log("---------RESPOSTA-----------");
      console.log(palavraEditada);

        if (palavraEditada !== null) {
          this.mensagemAlerta = `Palavra ${this.palavraModel.palavraPt} editada com sucesso!`;
          this.mensagemAlerta = `Palavra ${this.palavraModel.palavraEg} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.palavraModel.palavraPt}!`;
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.palavraModel.palavraEg}!`;
          this.tipoAlerta = "danger";
        }
    });

  }

}
