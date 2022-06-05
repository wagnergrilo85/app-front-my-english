import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestesRoutingModule } from './testes-routing.module';
import { ListarTesteSiginificadoPalavrasComponent } from './listar-teste-siginificado-palavras/listar-teste-siginificado-palavras.component';
import { CadastrarTesteSiginificadoPalavrasComponent } from './cadastrar-teste-siginificado-palavras/cadastrar-teste-siginificado-palavras.component';
import { EditarTesteSiginificadoPalavrasComponent } from './editar-teste-siginificado-palavras/editar-teste-siginificado-palavras.component';
import { ListarTesteSiginificadoFrasesComponent } from './listar-teste-siginificado-frases/listar-teste-siginificado-frases.component';
import { CadastrarTesteSiginificadoFrasesComponent } from './cadastrar-teste-siginificado-frases/cadastrar-teste-siginificado-frases.component';
import { EditarTesteSiginificadoFrasesComponent } from './editar-teste-siginificado-frases/editar-teste-siginificado-frases.component';
import { RealizarTesteSiginificadoPalavrasComponent } from './realizar-teste-siginificado-palavras/realizar-teste-siginificado-palavras.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarTesteSiginificadoPalavrasComponent, CadastrarTesteSiginificadoPalavrasComponent, EditarTesteSiginificadoPalavrasComponent, ListarTesteSiginificadoFrasesComponent, CadastrarTesteSiginificadoFrasesComponent, EditarTesteSiginificadoFrasesComponent,  RealizarTesteSiginificadoPalavrasComponent],
  imports: [
    CommonModule,
    TestesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TestesModule { }
