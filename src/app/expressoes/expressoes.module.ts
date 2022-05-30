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
import { ExcluirCategoriaExpressaoComponent } from './excluir-categoria-expressao/excluir-categoria-expressao.component';
import { ListarCategoriaExpressaoComponent } from './listar-categoria-expressao/listar-categoria-expressao.component';
import { CadastrarCategoriaExpressaoComponent } from './cadastrar-categoria-expressao/cadastrar-categoria-expressao.component';
import { EditarCategoriaExpressaoComponent } from './editar-categoria-expressao/editar-categoria-expressao.component';
import { EditarTipoExpressaoComponent } from './editar-tipo-expressao/editar-tipo-expressao.component';
import { ListarTipoExpressaoComponent } from './listar-tipo-expressao/listar-tipo-expressao.component';
import { CadastrarTipoExpressaoComponent } from './cadastrar-tipo-expressao/cadastrar-tipo-expressao.component';
import { ExcluirTipoExpressaoComponent } from './excluir-tipo-expressao/excluir-tipo-expressao.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ConsultarExpressoesComponent, CadastrarExpressoesComponent, ListarExpressoesComponent, EditarExpressoesComponent, ExcluirExpressoesComponent, ExcluirCategoriaExpressaoComponent, ListarCategoriaExpressaoComponent, CadastrarCategoriaExpressaoComponent, EditarCategoriaExpressaoComponent, EditarTipoExpressaoComponent, ListarTipoExpressaoComponent, CadastrarTipoExpressaoComponent, ExcluirTipoExpressaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExpressoesRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: []
})
export class ExpressoesModule { }
