import { ClienteModel } from '../../model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: ClienteModel[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.listarClientes().subscribe(listaClientes => {
      this.clientes = listaClientes;
    });
  }

}
