import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClienteModel} from 'src/app/model/cliente.model';
import {TelefoneModel} from 'src/app/model/telefone.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({selector: 'app-editar-cliente', templateUrl: './editar-cliente.component.html', styleUrls: ['./editar-cliente.component.css']})
export class EditarClienteComponent implements OnInit {

  cliente : ClienteModel = new ClienteModel;
  mostrarTipoPessoa : boolean = true;
  mensagemAlerta : string = "";
  mostrarDivNovoTelefone : boolean = false;
  telefone : TelefoneModel = new TelefoneModel;

constructor(private clienteService : ClienteService, private route : Router, private activeRoute : ActivatedRoute,) {
    this.cliente.tipoCliente = 0;
  }

  ngOnInit() {
    this.cliente.telefones = [];

this
  .activeRoute
  .params
  .subscribe(params => {
    if (params.hasOwnProperty('id')) {
      this.clienteService.pesquisarClientePorId(+ params['id']).subscribe(cliente => {
          this.cliente = cliente;
        }, error => console.log('Opss deu erro ' + error))
    }
  });

  }

  adicionarNovoTelefone() {

    this.mensagemAlerta = "";

    if (this.telefone.ddd == "" || this.telefone.ddd == null) {
      this.mensagemAlerta = "O DDD não pode ser vazio";
      return false;
    }
    if (this.telefone.ddd.length != 2) {
      this.mensagemAlerta = "O campo DDD deve ter apenas 2 dígitos";
      return false;
    }
    if (this.telefone.telefone == "" || this.telefone.telefone == null) {
      this.mensagemAlerta = "O Telefone não pode ser vazio";
      return false;
    }
    if (this.telefone.telefone.length != 8 && this.telefone.telefone.length != 9) {
      this.mensagemAlerta = "O telefone tem que ter 8 ou 9 dígitos ";
      return false;
    }

    for (let tel of this.cliente.telefones) {
      if (this.telefone.ddd == tel.ddd && this.telefone.telefone == tel.telefone) {
        this.mensagemAlerta = "Este telefone já foi cadastrado";
        return false;
      }
    }

    this
      .cliente
      .telefones
      .push(this.telefone);
    this.telefone = new TelefoneModel();
    this.ocultarTelaCadastroTelefone();
  }

  deletarTelefone(telefone : TelefoneModel) {
    for (let tel of this.cliente.telefones) {
      if (tel == telefone) {
        this.cliente.telefones = this
          .cliente
          .telefones
          .filter(obj => obj !== tel);
      }
    }
    return false;
  }

  mostrarTelaCadastroTelefone() {
    this.mensagemAlerta = "";
    this.mostrarDivNovoTelefone = true;
    this.telefone.ddd = "";
    this.telefone.telefone = "";
  }

  ocultarTelaCadastroTelefone() {
    this.mensagemAlerta = "";
    this.mostrarDivNovoTelefone = false;
  }

  mostrarTipoCliente() {
    if (this.cliente.tipoCliente == 0) 
      this.mostrarTipoPessoa = true;
    else {
      this.mostrarTipoPessoa = false;
    }
  }

  editarCliente() {

    this.mensagemAlerta = "";

    if (this.cliente.nome == "" || this.cliente.nome == null) {
      this.mensagemAlerta = "O nome é obrigatório";
      return false;
    }

    if (this.cliente.tipoCliente != 0 && this.cliente.tipoCliente != 1) {
      this.mensagemAlerta = "Informe o tipo do cliente";
      return false;
    }

    if (this.cliente.cpf == "" || this.cliente.cpf == null && this.cliente.tipoCliente == 0) {
      this.mensagemAlerta = "O cpf é obrigatório"
      return false;
    }

    if (this.cliente.cnpj == "" || this.cliente.cnpj == null && this.cliente.tipoCliente == 1) {
      this.mensagemAlerta = "O cnpj é obrigatório"
      return false;
    }

    this
      .clienteService
      .editarCliente(this.cliente, +this.cliente.id)
      .subscribe(resposta => {
        alert('OK');
      });

  }
}
