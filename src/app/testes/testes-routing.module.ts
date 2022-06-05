import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarTesteSiginificadoPalavrasComponent } from './cadastrar-teste-siginificado-palavras/cadastrar-teste-siginificado-palavras.component';
import { EditarTesteSiginificadoPalavrasComponent } from './editar-teste-siginificado-palavras/editar-teste-siginificado-palavras.component';
import { ListarTesteSiginificadoPalavrasComponent } from './listar-teste-siginificado-palavras/listar-teste-siginificado-palavras.component';
import { RealizarTesteSiginificadoPalavrasComponent } from './realizar-teste-siginificado-palavras/realizar-teste-siginificado-palavras.component';

const routes: Routes = [

  {path: 'teste-significado-palavras/listar', component: ListarTesteSiginificadoPalavrasComponent},
  {path: 'teste-significado-palavras/cadastrar', component: CadastrarTesteSiginificadoPalavrasComponent},
  {path: 'teste-significado-palavras/editar/:id', component: EditarTesteSiginificadoPalavrasComponent},
  {path: 'teste-significado-palavras/realizar', component: RealizarTesteSiginificadoPalavrasComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestesRoutingModule { }
