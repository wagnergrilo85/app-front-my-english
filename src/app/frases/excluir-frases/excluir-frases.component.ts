import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrasesModel } from 'src/app/model/frases.model';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-excluir-frases',
  templateUrl: './excluir-frases.component.html',
  styleUrls: ['./excluir-frases.component.css']
})
export class ExcluirFrasesComponent implements OnInit {

  frase: FrasesModel= new FrasesModel();
  mensagemAlerta : string = "";

  constructor(private fraseService: FraseService,
    private route: Router,
    private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.fraseService.pesquisarFrasesPorId(+ params['id']).subscribe(fraseExcluir => {
            this.frase = fraseExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirFrase(){
    if (confirm("Deseja excluir a frase " + "?")) {

      this.fraseService.deletarFrases(+this.frase.id).subscribe(resposta => {
        console.log("-------------")
        console.log(resposta)
        if(resposta){
          alert('Frase deletada com sucesso!');
          this.route.navigate(['/frases'])
        }else{
          this.mensagemAlerta = "Erro ao excluir a frase!";
          return false;
        }
      });

    }

  }

}
