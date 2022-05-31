import { Component, OnInit } from '@angular/core';
import { StatusEnum } from 'src/app/enum/status.enum';
import { CategoriaFraseModel } from 'src/app/model/categoria-frase.model';
import { FrasesModel } from 'src/app/model/frases.model';
import { TipoFraseModel } from 'src/app/model/tipo-frase.model';
import { CategoriaFraseService } from 'src/app/services/categoria-frase.service';
import { FraseService } from 'src/app/services/frase.service';
import { TipoFraseService } from 'src/app/services/tipo-frase.service';

@Component({
  selector: 'app-cadastrar-frases',
  templateUrl: './cadastrar-frases.component.html',
  styleUrls: ['./cadastrar-frases.component.css']
})
export class CadastrarFrasesComponent implements OnInit {

  public fraseModel: FrasesModel = new FrasesModel();
  public mensagemAlerta: string = "";
  public tipoAlerta: string = "success";
  public tipoFrases: Array<TipoFraseModel> = [];
  public arrayCategoriaFrases: Array<CategoriaFraseModel> = [];
  public statusEnum = StatusEnum;
  public enumKeysStatusEnum = [];
  public categoriaFraseSelecionada: CategoriaFraseModel;

  constructor(
    private fraseService: FraseService,
    private tipoFraseService: TipoFraseService,
    private categoriaFraseService: CategoriaFraseService
  ) {
    this.enumKeysStatusEnum = Object.keys(this.statusEnum);
  }

  ngOnInit() {
    this.fraseModel.categoriaFrases = [];
    this.fraseModel.rating = 3;
    this.fraseModel.status = StatusEnum.ATIVADO;
    this.getListaTipoFrase();
    this.getListaCategoriasPalavras();
  }

  getListaTipoFrase(){
    this.tipoFraseService.listarTipos().subscribe(respListaTiposFrase =>{
      this.tipoFrases = respListaTiposFrase;
    });
  }

  getListaCategoriasPalavras(){
    this.categoriaFraseService.listarCategorias().subscribe( listaCategoriaFrase =>{
      this.arrayCategoriaFrases = listaCategoriaFrase;
    })
  }

  cadastrarFrase() {

    this.mensagemAlerta = "";

    if (this.fraseModel.fraseEg == "" || this.fraseModel.fraseEg == null) {
      this.mensagemAlerta = "A frase  em inglês é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.fraseModel.frasePt == "" || this.fraseModel.frasePt == null) {
      this.mensagemAlerta = "A frase em português é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    if (this.fraseModel.tag == "" || this.fraseModel.tag == null) {
      this.mensagemAlerta = "O campo tag é obrigatório";
      this.tipoAlerta = "danger";
      return false;
    }

    this.fraseService.cadastrarFrases(this.fraseModel).subscribe(
      fraseCadastrada => {
        if (fraseCadastrada !== null) {
          this.mensagemAlerta = `Frase ${this.fraseModel.frasePt} cadastrada com sucesso!`;
          this.tipoAlerta = "success";
          this.resetDados();
        } else {
          this.mensagemAlerta = `Erro ao cadastrar a frase ${this.fraseModel.frasePt}!`;
          this.tipoAlerta = "danger";
        }
      }, error => {
        console.log(error);

        this.mensagemAlerta = error;
        this.tipoAlerta = "danger";
      }
    );
  }

  public adicionarCategoriaFrase(){
    if(this.categoriaFraseSelecionada != null){
      this.fraseModel.categoriaFrases.push(this.categoriaFraseSelecionada);
      this.categoriaFraseSelecionada = null;
    }
  }

  public removerCategoria(frase: CategoriaFraseModel){
    if(frase != null){
      this.fraseModel.categoriaFrases =  this.fraseModel.categoriaFrases.filter(cat => cat != frase);
    }
  }

  public resetDados(){
    this.fraseModel.categoriaFrases = [];
    this.fraseModel.fraseEg = "";
    this.fraseModel.frasePt= "";
    this.fraseModel.tag = "";
    this.fraseModel.rating = 3;
    this.fraseModel.status = StatusEnum.ATIVADO;
    this.categoriaFraseSelecionada = null;
  }

}
