import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ExcluirClienteComponent } from './excluir-cliente/excluir-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [
  {path: 'cliente', component: ListarClienteComponent},
  {path: 'cliente/cadastrar', component: CadastrarClienteComponent},
  {path: 'cliente/editar/:id', component: EditarClienteComponent},
  {path: 'cliente/consultar',component: ConsultarClienteComponent},
  {path: 'cliente/excluir/:id',  component: ExcluirClienteComponent}
];

@NgModule({
  imports: [
    CommonModule,   
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
