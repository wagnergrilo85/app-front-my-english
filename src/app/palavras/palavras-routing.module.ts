import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarPalavrasComponent } from './cadastrar-palavras/cadastrar-palavras.component';
import { ConsultarPalavrasComponent } from './consultar-palavras/consultar-palavras.component';
import { EditarPalavrasComponent } from './editar-palavras/editar-palavras.component';
import { ExcluirPalavrasComponent } from './excluir-palavras/excluir-palavras.component';
import { ListarPalavrasComponent } from './listar-palavras/listar-palavras.component';

const routes: Routes = [
  {path: 'palavras', component: ListarPalavrasComponent},
  {path: 'palavras/cadastrar', component: CadastrarPalavrasComponent},
  {path: 'palavras/editar/:id', component: EditarPalavrasComponent},
  {path: 'palavras/consultar',component: ConsultarPalavrasComponent},
  {path: 'palavras/excluir/:id',  component: ExcluirPalavrasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalavrasRoutingModule { }
