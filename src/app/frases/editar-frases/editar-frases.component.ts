import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrasesModel } from 'src/app/model/frases.model';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-editar-frases',
  templateUrl: './editar-frases.component.html',
  styleUrls: ['./editar-frases.component.css']
})
export class EditarFrasesComponent implements OnInit {

  public fraseModel: FrasesModel= new FrasesModel();
  mensagemAlerta: string = "";
  tipoAlerta: string = "success";

  constructor(private fraseService: FraseService,
    private route : Router, 
    private activeRoute : ActivatedRoute,) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.fraseService.pesquisarFrasesPorId(+ params['id']).subscribe(fraseEditar => {
            this.fraseModel = fraseEditar;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }
  editarPalavra(){
    this.mensagemAlerta = "";

    if (this.fraseModel.fraseEg == "" || this.fraseModel.fraseEg == null) {
      this.mensagemAlerta = "A frase em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }
    
    if (this.fraseModel.frasePt == "" || this.fraseModel.frasePt == null) {
      this.mensagemAlerta = "A frase em português é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.fraseService.editarFrases(this.fraseModel,1 ).subscribe(palavraEditada => {
      console.log("---------RESPOSTA-----------");
      console.log(palavraEditada);

        if (palavraEditada !== null) {
          this.mensagemAlerta = `Palavra ${this.fraseModel.frasePt} editada com sucesso!`;
          this.mensagemAlerta = `Palavra ${this.fraseModel.fraseEg} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.fraseModel.frasePt}!`;
          this.mensagemAlerta = `Erro ao cadastrar palavra ${this.fraseModel.fraseEg}!`;
          this.tipoAlerta = "danger";
        }
    });

  }

}
