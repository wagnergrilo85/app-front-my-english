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

@NgModule({
  declarations: [ListarFrasesComponent, CadastrarFrasesComponent, ConsultarFrasesComponent, ExcluirFrasesComponent, EditarFrasesComponent],
  imports: [
    CommonModule,
    FrasesRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class FrasesModule { }
