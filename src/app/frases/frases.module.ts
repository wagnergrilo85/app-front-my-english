import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrasesRoutingModule } from './frases-routing.module';
import { ListarFrasesComponent } from './listar-frases/listar-frases.component';
import { CadastrarFrasesComponent } from './cadastrar-frases/cadastrar-frases.component';
import { ConsultarFrasesComponent } from './consultar-frases/consultar-frases.component';
import { ExcluirFrasesComponent } from './excluir-frases/excluir-frases.component';
import { EditarFrasesComponent } from './editar-frases/editar-frases.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarTipoFraseComponent } from './editar-tipo-frase/editar-tipo-frase.component';
import { CadastrarTipoFraseComponent } from './cadastrar-tipo-frase/cadastrar-tipo-frase.component';
import { ExcluirTipoFraseComponent } from './excluir-tipo-frase/excluir-tipo-frase.component';
import { ListarTipoFraseComponent } from './listar-tipo-frase/listar-tipo-frase.component';
import { ListarCategoriaFraseComponent } from './listar-categoria-frase/listar-categoria-frase.component';
import { CadastrarCategoriaFraseComponent } from './cadastrar-categoria-frase/cadastrar-categoria-frase.component';
import { EditarCategoriaFraseComponent } from './editar-categoria-frase/editar-categoria-frase.component';
import { ExcluirCategoriaFraseComponent } from './excluir-categoria-frase/excluir-categoria-frase.component';

@NgModule({
  declarations: [ListarFrasesComponent, CadastrarFrasesComponent, ConsultarFrasesComponent, ExcluirFrasesComponent, EditarFrasesComponent, EditarTipoFraseComponent, CadastrarTipoFraseComponent, ExcluirTipoFraseComponent, ListarTipoFraseComponent, ListarCategoriaFraseComponent, CadastrarCategoriaFraseComponent, EditarCategoriaFraseComponent, ExcluirCategoriaFraseComponent],
  imports: [
    CommonModule,
    FormsModule,
    FrasesRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class FrasesModule { }
