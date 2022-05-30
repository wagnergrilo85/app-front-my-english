import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarCategoriaExpressaoComponent } from './cadastrar-categoria-expressao/cadastrar-categoria-expressao.component';
import { CadastrarExpressoesComponent } from './cadastrar-expressoes/cadastrar-expressoes.component';
import { CadastrarTipoExpressaoComponent } from './cadastrar-tipo-expressao/cadastrar-tipo-expressao.component';
import { ConsultarExpressoesComponent } from './consultar-expressoes/consultar-expressoes.component';
import { EditarCategoriaExpressaoComponent } from './editar-categoria-expressao/editar-categoria-expressao.component';
import { EditarExpressoesComponent } from './editar-expressoes/editar-expressoes.component';
import { EditarTipoExpressaoComponent } from './editar-tipo-expressao/editar-tipo-expressao.component';
import { ExcluirCategoriaExpressaoComponent } from './excluir-categoria-expressao/excluir-categoria-expressao.component';
import { ExcluirExpressoesComponent } from './excluir-expressoes/excluir-expressoes.component';
import { ExcluirTipoExpressaoComponent } from './excluir-tipo-expressao/excluir-tipo-expressao.component';
import { ListarCategoriaExpressaoComponent } from './listar-categoria-expressao/listar-categoria-expressao.component';
import { ListarExpressoesComponent } from './listar-expressoes/listar-expressoes.component';
import { ListarTipoExpressaoComponent } from './listar-tipo-expressao/listar-tipo-expressao.component';

const routes: Routes = [
  {path: 'expressoes', component: ListarExpressoesComponent},
  {path: 'expressoes/cadastrar', component: CadastrarExpressoesComponent},
  {path: 'expressoes/editar/:id', component: EditarExpressoesComponent},
  {path: 'expressoes/consultar',component: ConsultarExpressoesComponent},
  {path: 'expressoes/excluir/:id',  component: ExcluirExpressoesComponent},

  {path: 'expressoes/categorias/listar', component: ListarCategoriaExpressaoComponent},
  {path: 'expressoes/categorias/cadastrar', component: CadastrarCategoriaExpressaoComponent},
  {path: 'expressoes/categorias/editar/:id', component: EditarCategoriaExpressaoComponent},
  {path: 'expressoes/categorias/consultar',component: ConsultarExpressoesComponent},
  {path: 'expressoes/categorias/excluir/:id',  component: ExcluirCategoriaExpressaoComponent},

  {path: 'expressoes/tipos/listar', component: ListarTipoExpressaoComponent},
  {path: 'expressoes/tipos/cadastrar', component: CadastrarTipoExpressaoComponent},
  {path: 'expressoes/tipos/editar/:id', component: EditarTipoExpressaoComponent},
  {path: 'expressoes/tipos/consultar',component: ConsultarExpressoesComponent},
  {path: 'expressoes/tipos/excluir/:id',  component: ExcluirTipoExpressaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressoesRoutingModule { }
