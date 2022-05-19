import { ClienteModel } from './../../model/cliente.model';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  clientes: ClienteModel[];
  nome: string = "";

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }


  consultar(){
    this.clienteService.filtrarPorNome(this.nome).subscribe(listaClientesFiltrados => {
        this.clientes = listaClientesFiltrados;
    });
  }
}
