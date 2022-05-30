import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarCategoriaFraseComponent } from './cadastrar-categoria-frase/cadastrar-categoria-frase.component';
import { CadastrarFrasesComponent } from './cadastrar-frases/cadastrar-frases.component';
import { CadastrarTipoFraseComponent } from './cadastrar-tipo-frase/cadastrar-tipo-frase.component';
import { ConsultarFrasesComponent } from './consultar-frases/consultar-frases.component';
import { EditarCategoriaFraseComponent } from './editar-categoria-frase/editar-categoria-frase.component';
import { EditarFrasesComponent } from './editar-frases/editar-frases.component';
import { EditarTipoFraseComponent } from './editar-tipo-frase/editar-tipo-frase.component';
import { ExcluirCategoriaFraseComponent } from './excluir-categoria-frase/excluir-categoria-frase.component';
import { ExcluirFrasesComponent } from './excluir-frases/excluir-frases.component';
import { ExcluirTipoFraseComponent } from './excluir-tipo-frase/excluir-tipo-frase.component';
import { ListarCategoriaFraseComponent } from './listar-categoria-frase/listar-categoria-frase.component';
import { ListarFrasesComponent } from './listar-frases/listar-frases.component';
import { ListarTipoFraseComponent } from './listar-tipo-frase/listar-tipo-frase.component';

const routes: Routes = [
  {path: 'frases', component: ListarFrasesComponent},
  {path: 'frases/cadastrar', component: CadastrarFrasesComponent},
  {path: 'frases/editar/:id', component: EditarFrasesComponent},
  {path: 'frases/consultar',component: ConsultarFrasesComponent},
  {path: 'frases/excluir/:id',  component: ExcluirFrasesComponent},

  {path: 'frases/categorias/listar', component: ListarCategoriaFraseComponent},
  {path: 'frases/categorias/cadastrar', component: CadastrarCategoriaFraseComponent},
  {path: 'frases/categorias/editar/:id', component: EditarCategoriaFraseComponent},
  {path: 'frases/categorias/consultar',component: ConsultarFrasesComponent},
  {path: 'frases/categorias/excluir/:id',  component: ExcluirCategoriaFraseComponent},

  {path: 'frases/tipos/listar', component: ListarTipoFraseComponent},
  {path: 'frases/tipos/cadastrar', component: CadastrarTipoFraseComponent},
  {path: 'frases/tipos/editar/:id', component: EditarTipoFraseComponent},
  {path: 'frases/tipos/consultar',component: ConsultarFrasesComponent},
  {path: 'frases/tipos/excluir/:id',  component: ExcluirTipoFraseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrasesRoutingModule { }
