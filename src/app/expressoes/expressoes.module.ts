import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpressoesRoutingModule } from './expressoes-routing.module';
import { ConsultarExpressoesComponent } from './consultar-expressoes/consultar-expressoes.component';
import { CadastrarExpressoesComponent } from './cadastrar-expressoes/cadastrar-expressoes.component';
import { ListarExpressoesComponent } from './listar-expressoes/listar-expressoes.component';
import { EditarExpressoesComponent } from './editar-expressoes/editar-expressoes.component';
import { ExcluirExpressoesComponent } from './excluir-expressoes/excluir-expressoes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConsultarExpressoesComponent, CadastrarExpressoesComponent, ListarExpressoesComponent, EditarExpressoesComponent, ExcluirExpressoesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExpressoesRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: []
})
export class ExpressoesModule { }
