import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarExpressoesComponent } from './cadastrar-expressoes/cadastrar-expressoes.component';
import { ConsultarExpressoesComponent } from './consultar-expressoes/consultar-expressoes.component';
import { EditarExpressoesComponent } from './editar-expressoes/editar-expressoes.component';
import { ExcluirExpressoesComponent } from './excluir-expressoes/excluir-expressoes.component';
import { ListarExpressoesComponent } from './listar-expressoes/listar-expressoes.component';

const routes: Routes = [
  {path: 'expressoes', component: ListarExpressoesComponent},
  {path: 'expressoes/cadastrar', component: CadastrarExpressoesComponent},
  {path: 'expressoes/editar/:id', component: EditarExpressoesComponent},
  {path: 'expressoes/consultar',component: ConsultarExpressoesComponent},
  {path: 'expressoes/excluir/:id',  component: ExcluirExpressoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressoesRoutingModule { }
