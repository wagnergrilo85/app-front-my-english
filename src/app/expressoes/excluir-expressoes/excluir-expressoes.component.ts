import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpressoesModel } from 'src/app/model/expressoes.model';
import { ExpressaoService } from 'src/app/services/expressao.service';

@Component({
  selector: 'app-excluir-expressoes',
  templateUrl: './excluir-expressoes.component.html',
  styleUrls: ['./excluir-expressoes.component.css']
})
export class ExcluirExpressoesComponent implements OnInit {

  public expressao: ExpressoesModel = new ExpressoesModel();
  mensagemAlerta : string = "";
  


  constructor(private expressaoService: ExpressaoService,
    private route: Router,
    private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.expressaoService.pesquisarExpressaoPorId(+ params['id']).subscribe(expressaoExcluir => {
            this.expressao = expressaoExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirExpressao(){
    if (confirm("Deseja excluir a expressão " + "?")) {

      this.expressaoService.deletarExpressao(+this.expressao.id).subscribe(resposta => {
        console.log("-------------")
        console.log(resposta)
        if(resposta){
          alert('Expressão deletada com sucesso!');
          this.route.navigate(['/expressoes'])
        }else{
          this.mensagemAlerta = "Erro ao excluir a expressão!";
          return false;
        }
      });

    }

  }
}