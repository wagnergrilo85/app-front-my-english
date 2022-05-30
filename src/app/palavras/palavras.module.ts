import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalavrasRoutingModule } from './palavras-routing.module';
import { ListarPalavrasComponent } from './listar-palavras/listar-palavras.component';
import { CadastrarPalavrasComponent } from './cadastrar-palavras/cadastrar-palavras.component';
import { ConsultarPalavrasComponent } from './consultar-palavras/consultar-palavras.component';
import { EditarPalavrasComponent } from './editar-palavras/editar-palavras.component';
import { ExcluirPalavrasComponent } from './excluir-palavras/excluir-palavras.component';
import { FormsModule } from '@angular/forms';
import { ListaCategoriasPalavrasComponent } from './lista-categorias-palavras/lista-categorias-palavras.component';
import { CadastrarCategoriasPalavrasComponent } from './cadastrar-categorias-palavras/cadastrar-categorias-palavras.component';
import { EditarCategoriasPalavrasComponent } from './editar-categorias-palavras/editar-categorias-palavras.component';
import { ExcluirCategoriaPalavrasComponent } from './excluir-categoria-palavras/excluir-categoria-palavras.component';
import { CadastrarTipoPalavraComponent } from './cadastrar-tipo-palavra/cadastrar-tipo-palavra.component';
import { ListarTipoPalavraComponent } from './listar-tipo-palavra/listar-tipo-palavra.component';
import { ExcluirTipoPalavraComponent } from './excluir-tipo-palavra/excluir-tipo-palavra.component';
import { EditarTipoPalavraComponent } from './editar-tipo-palavra/editar-tipo-palavra.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListarPalavrasComponent,
    CadastrarPalavrasComponent,
    ConsultarPalavrasComponent,
    EditarPalavrasComponent,
    ExcluirPalavrasComponent,
    ListaCategoriasPalavrasComponent,
    CadastrarCategoriasPalavrasComponent,
    EditarCategoriasPalavrasComponent, ExcluirCategoriaPalavrasComponent, CadastrarTipoPalavraComponent, ListarTipoPalavraComponent, ExcluirTipoPalavraComponent, EditarTipoPalavraComponent],
  imports: [
    FormsModule,
    CommonModule,
    PalavrasRoutingModule,
    SharedModule
  ]
})
export class PalavrasModule { }
