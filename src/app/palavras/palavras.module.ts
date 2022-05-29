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

@NgModule({
  declarations: [ListarPalavrasComponent, 
    CadastrarPalavrasComponent, 
    ConsultarPalavrasComponent, 
    EditarPalavrasComponent, 
    ExcluirPalavrasComponent, 
    ListaCategoriasPalavrasComponent, 
    CadastrarCategoriasPalavrasComponent, 
    EditarCategoriasPalavrasComponent, ExcluirCategoriaPalavrasComponent],
  imports: [
    FormsModule,
    CommonModule,
    PalavrasRoutingModule
  ]
})
export class PalavrasModule { }
