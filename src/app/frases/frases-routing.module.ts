import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarFrasesComponent } from './cadastrar-frases/cadastrar-frases.component';
import { ConsultarFrasesComponent } from './consultar-frases/consultar-frases.component';
import { EditarFrasesComponent } from './editar-frases/editar-frases.component';
import { ExcluirFrasesComponent } from './excluir-frases/excluir-frases.component';
import { ListarFrasesComponent } from './listar-frases/listar-frases.component';

const routes: Routes = [
  {path: 'frases', component: ListarFrasesComponent},
  {path: 'frases/cadastrar', component: CadastrarFrasesComponent},
  {path: 'frases/editar/:id', component: EditarFrasesComponent},
  {path: 'frases/consultar',component: ConsultarFrasesComponent},
  {path: 'frases/excluir/:id',  component: ExcluirFrasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrasesRoutingModule { }
