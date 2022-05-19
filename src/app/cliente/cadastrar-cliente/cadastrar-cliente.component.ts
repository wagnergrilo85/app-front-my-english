import { TelefoneModel } from '../../model/telefone.model';
import { ClienteModel } from '../../model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({ selector: 'app-cadastrar-cliente', templateUrl: './cadastrar-cliente.component.html', styleUrls: ['./cadastrar-cliente.component.css'] })
export class CadastrarClienteComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel;
  mostrarTipoPessoa: boolean = true;
  mensagemAlerta: string = "";
  mostrarDivNovoTelefone: boolean = false;
  telefone: TelefoneModel = new TelefoneModel;
  totalCpf: number = 0;

  constructor(private clienteService: ClienteService) {
    this.cliente.tipoCliente = 0;
  }

  ngOnInit() {
    this.cliente.telefones = [];
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

  deletarTelefone(telefone: TelefoneModel) {
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

  cadastrarCliente() {

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

    if (this.cliente.tipoCliente == 0) {
      this
        .clienteService
        .checaCpfJaCadastrado(this.cliente.cpf)
        .subscribe(resposta => {
          if (resposta > 0) {
            this.mensagemAlerta = "CPF já cadastrado!";
            return false;
          } else {
            this
              .clienteService
              .cadastrarCliente(this.cliente)
              .subscribe(resposta => {
                alert('Cliente PF cadastrado com sucesso!');
              });
          }
        });
    } else {
      this
        .clienteService
        .checaCnpjJaCadastrado(this.cliente.cnpj)
        .subscribe(resposta => {
          if (resposta > 0) {
            this.mensagemAlerta = "CNPJ já cadastrado!";
            return false;
          } else {
            this
              .clienteService
              .cadastrarCliente(this.cliente)
              .subscribe(resposta => {
                alert('Cliente PJ cadastrado com sucesso!');
              });
          }
        });
    }

  }

  verificaExisteCPF() {
    this
      .clienteService
      .checaCpfJaCadastrado(this.cliente.cpf)
      .subscribe(resposta => {
        alert('resposta: ' + resposta);
        this.totalCpf = resposta;
      });
  }

}
