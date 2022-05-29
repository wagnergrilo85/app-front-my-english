import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarCategoriasPalavrasComponent } from './cadastrar-categorias-palavras/cadastrar-categorias-palavras.component';
import { CadastrarPalavrasComponent } from './cadastrar-palavras/cadastrar-palavras.component';
import { ConsultarPalavrasComponent } from './consultar-palavras/consultar-palavras.component';
import { EditarPalavrasComponent } from './editar-palavras/editar-palavras.component';
import { ExcluirCategoriaPalavrasComponent } from './excluir-categoria-palavras/excluir-categoria-palavras.component';
import { ExcluirPalavrasComponent } from './excluir-palavras/excluir-palavras.component';
import { ListaCategoriasPalavrasComponent } from './lista-categorias-palavras/lista-categorias-palavras.component';
import { ListarPalavrasComponent } from './listar-palavras/listar-palavras.component';

const routes: Routes = [
  {path: 'palavras', component: ListarPalavrasComponent},
  {path: 'palavras/cadastrar', component: CadastrarPalavrasComponent},
  {path: 'palavras/editar/:id', component: EditarPalavrasComponent},
  {path: 'palavras/consultar',component: ConsultarPalavrasComponent},
  {path: 'palavras/excluir/:id',  component: ExcluirPalavrasComponent},
  {path: 'palavras/cadastrar/categoria',  component: CadastrarCategoriasPalavrasComponent},
  {path: 'palavras/listar/categoria',  component: ListaCategoriasPalavrasComponent},
  {path: 'palavras/excluir/categoria/:id',  component: ExcluirCategoriaPalavrasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalavrasRoutingModule { }
