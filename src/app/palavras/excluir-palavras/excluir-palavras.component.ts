import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PalavrasModel } from 'src/app/model/palavras.model';
import { PalavraService } from 'src/app/services/palavra.service';

@Component({
  selector: 'app-excluir-palavras',
  templateUrl: './excluir-palavras.component.html',
  styleUrls: ['./excluir-palavras.component.css']
})
export class ExcluirPalavrasComponent implements OnInit {

  public palavra: PalavrasModel = new PalavrasModel();
  mensagemAlerta : string = "";
  
  
  constructor(private palavraService: PalavraService, private route: Router, private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    
    this.activeRoute.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.palavraService.pesquisarPalavraPorId(+ params['id']).subscribe(palavraExcluir => {
            this.palavra = palavraExcluir;
          }, error => console.log('Opss deu erro ' + error))
      }
    });
  }

  excluirPalavra(){
    if (confirm("Deseja excluir a palavra " + "?")) {

      this.palavraService.deletarPalavra(+this.palavra.id).subscribe(resposta => {
        console.log("-------------")
        console.log(resposta)
        if(resposta){
          alert('Palavra deletada com sucesso!');
          this.route.navigate(['/palavras'])
        }else{
          this.mensagemAlerta = "Erro ao excluir a palavra!";
          return false;
        }
      });

    }

  }


}
