import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalavrasRoutingModule } from './palavras-routing.module';
import { ListarPalavrasComponent } from './listar-palavras/listar-palavras.component';
import { CadastrarPalavrasComponent } from './cadastrar-palavras/cadastrar-palavras.component';
import { ConsultarPalavrasComponent } from './consultar-palavras/consultar-palavras.component';
import { EditarPalavrasComponent } from './editar-palavras/editar-palavras.component';
import { ExcluirPalavrasComponent } from './excluir-palavras/excluir-palavras.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarPalavrasComponent, CadastrarPalavrasComponent, ConsultarPalavrasComponent, EditarPalavrasComponent, ExcluirPalavrasComponent],
  imports: [
    FormsModule,
    CommonModule,
    PalavrasRoutingModule
  ]
})
export class PalavrasModule { }
