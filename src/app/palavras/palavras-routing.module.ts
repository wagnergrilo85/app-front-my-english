import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarCategoriasPalavrasComponent } from './cadastrar-categorias-palavras/cadastrar-categorias-palavras.component';
import { CadastrarPalavrasComponent } from './cadastrar-palavras/cadastrar-palavras.component';
import { CadastrarTipoPalavraComponent } from './cadastrar-tipo-palavra/cadastrar-tipo-palavra.component';
import { ConsultarPalavrasComponent } from './consultar-palavras/consultar-palavras.component';
import { EditarPalavrasComponent } from './editar-palavras/editar-palavras.component';
import { EditarTipoPalavraComponent } from './editar-tipo-palavra/editar-tipo-palavra.component';
import { ExcluirCategoriaPalavrasComponent } from './excluir-categoria-palavras/excluir-categoria-palavras.component';
import { ExcluirPalavrasComponent } from './excluir-palavras/excluir-palavras.component';
import { ExcluirTipoPalavraComponent } from './excluir-tipo-palavra/excluir-tipo-palavra.component';
import { ListaCategoriasPalavrasComponent } from './lista-categorias-palavras/lista-categorias-palavras.component';
import { ListarPalavrasComponent } from './listar-palavras/listar-palavras.component';
import { ListarTipoPalavraComponent } from './listar-tipo-palavra/listar-tipo-palavra.component';

const routes: Routes = [

  {path: 'palavras', component: ListarPalavrasComponent},
  {path: 'palavras/cadastrar', component: CadastrarPalavrasComponent},
  {path: 'palavras/editar/:id', component: EditarPalavrasComponent},
  {path: 'palavras/consultar',component: ConsultarPalavrasComponent},
  {path: 'palavras/excluir/:id',  component: ExcluirPalavrasComponent},

  {path: 'palavras/categorias/listar', component: ListaCategoriasPalavrasComponent},
  {path: 'palavras/categorias/cadastrar', component: CadastrarCategoriasPalavrasComponent},
  {path: 'palavras/categorias/editar/:id', component: ListaCategoriasPalavrasComponent},
  {path: 'palavras/categorias/excluir/:id',  component: ExcluirCategoriaPalavrasComponent},

  {path: 'palavras/tipos/listar', component: ListarTipoPalavraComponent},
  {path: 'palavras/tipos/cadastrar', component: CadastrarTipoPalavraComponent},
  {path: 'palavras/tipos/editar/:id', component: EditarTipoPalavraComponent},
  {path: 'palavras/tipos/excluir/:id',  component: ExcluirTipoPalavraComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalavrasRoutingModule { }
