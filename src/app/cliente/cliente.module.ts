import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';

import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ExcluirClienteComponent } from './excluir-cliente/excluir-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';

@NgModule({
  declarations: [CadastrarClienteComponent, ListarClienteComponent, EditarClienteComponent, ConsultarClienteComponent, ExcluirClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: []
})
export class ClienteModule { }
