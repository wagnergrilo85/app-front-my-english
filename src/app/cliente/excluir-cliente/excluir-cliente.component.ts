import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from 'src/app/model/cliente.model';
import { TelefoneModel } from 'src/app/model/telefone.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent implements OnInit {

  cliente : ClienteModel = new ClienteModel;
  mostrarTipoPessoa : boolean = true;
  mensagemAlerta : string = "";
  mostrarDivNovoTelefone : boolean = false;
  telefone : TelefoneModel = new TelefoneModel;

  constructor(private clienteService : ClienteService, private route : Router, private activeRoute : ActivatedRoute) {
    this.cliente.tipoCliente = 0;
  }

  ngOnInit() {
    this.cliente.telefones = [];

    this.activeRoute.params.subscribe(params => {
        if (params.hasOwnProperty('id')) {
          this.clienteService.pesquisarClientePorId(+ params['id']).subscribe(cliente => {
              this.cliente = cliente;
            }, error => console.log('Opss deu erro ' + error))
        }
      });
    }
 

  excluirCliente(){
    if (confirm("Deseja excluir o cliente " + this.cliente.nome + "?")) {

      this.clienteService.deletarCliente(+this.cliente.id).subscribe(resposta => {
        if(resposta){
          alert('Cliente deletado com sucesso!');
          this.route.navigate(['/cliente'])
        }else{
          this.mensagemAlerta = "Erro ao excluir cliente!";
          return false;
        }
      });

    }

  }

}
