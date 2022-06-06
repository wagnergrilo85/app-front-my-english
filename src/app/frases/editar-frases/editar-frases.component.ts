import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEnum } from 'src/app/enum/status.enum';
import { CategoriaFraseModel } from 'src/app/model/categoria-frase.model';
import { FrasesModel } from 'src/app/model/frases.model';
import { TipoFraseModel } from 'src/app/model/tipo-frase.model';
import { CategoriaFraseService } from 'src/app/services/categoria-frase.service';
import { FraseService } from 'src/app/services/frase.service';
import { TipoFraseService } from 'src/app/services/tipo-frase.service';

@Component({
  selector: 'app-editar-frases',
  templateUrl: './editar-frases.component.html',
  styleUrls: ['./editar-frases.component.css']
})
export class EditarFrasesComponent implements OnInit {

  public fraseModel: FrasesModel= new FrasesModel();
  mensagemAlerta: string = "";
  tipoAlerta: string = "success";
  public arrayCategoriaFrases: Array<CategoriaFraseModel> = [];
  public tipoFrases: Array<TipoFraseModel> = [];
  public statusEnum = StatusEnum;
  public enumKeysStatusEnum = [];
  public categoriaFraseSelecionada: CategoriaFraseModel;

  constructor(private fraseService: FraseService,
    private tipofraseServise: TipoFraseService,
    private categoriafraseService: CategoriaFraseService,
    private route : Router,
    private activeRoute : ActivatedRoute,) {
      this.enumKeysStatusEnum = Object.keys(this.statusEnum);
     }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.fraseService.pesquisarFrasesPorId(+ params['id']).subscribe(fraseEditar => {
            this.fraseModel = fraseEditar;
            this.getListaTipo();
            this.getListaCategoriasFrase();
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  alterarTipoSelect(value: any){
    const idSelecionado = value.target.value;
    this.fraseModel.tipoFrase = this.tipoFrases.find(tipo => tipo.id == idSelecionado);
  }

  getListaTipo(){
    this.tipofraseServise.listarTipos().subscribe(respListaTipos =>{
      this.tipoFrases = respListaTipos;
    });
  }

  getListaCategoriasFrase(){
    this.categoriafraseService.listarCategorias().subscribe( lista =>{
      this.arrayCategoriaFrases = lista;
    })
  }

  editarFrase(){
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

    this.fraseService.editarFrases(this.fraseModel,this.fraseModel.id ).subscribe(fraseEditada => {
      console.log("---------RESPOSTA-----------");
      console.log(fraseEditada);

        if (fraseEditada !== null) {
          this.mensagemAlerta = `Frase ${this.fraseModel.frasePt} editada com sucesso!`;
          this.mensagemAlerta = `Frase ${this.fraseModel.fraseEg} editada com sucesso!`;
          this.tipoAlerta = "success";
        } else {
          this.mensagemAlerta = `Erro ao cadastrar a Frase ${this.fraseModel.frasePt}!`;
          this.mensagemAlerta = `Erro ao cadastrar a Frase ${this.fraseModel.fraseEg}!`;
          this.tipoAlerta = "danger";
        }
    });
  }

  public adicionarCategoria(){
    if(this.categoriaFraseSelecionada != null){
      this.fraseModel.categoriaFrases.push(this.categoriaFraseSelecionada);
      this.categoriaFraseSelecionada = null;
    }
  }

  public removerCategoriaFrase(frase: CategoriaFraseModel){
    if(frase != null){
      this.fraseModel.categoriaFrases =  this.fraseModel.categoriaFrases.filter(fra => fra !== frase);
    }
  }

}
