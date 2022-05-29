import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestesRoutingModule } from './testes-routing.module';
import { ListarTesteSiginificadoPalavrasComponent } from './listar-teste-siginificado-palavras/listar-teste-siginificado-palavras.component';
import { CadastrarTesteSiginificadoPalavrasComponent } from './cadastrar-teste-siginificado-palavras/cadastrar-teste-siginificado-palavras.component';
import { EditarTesteSiginificadoPalavrasComponent } from './editar-teste-siginificado-palavras/editar-teste-siginificado-palavras.component';
import { ListarTesteSiginificadoFrasesComponent } from './listar-teste-siginificado-frases/listar-teste-siginificado-frases.component';
import { CadastrarTesteSiginificadoFrasesComponent } from './cadastrar-teste-siginificado-frases/cadastrar-teste-siginificado-frases.component';
import { EditarTesteSiginificadoFrasesComponent } from './editar-teste-siginificado-frases/editar-teste-siginificado-frases.component';

@NgModule({
  declarations: [ListarTesteSiginificadoPalavrasComponent, CadastrarTesteSiginificadoPalavrasComponent, EditarTesteSiginificadoPalavrasComponent, ListarTesteSiginificadoFrasesComponent, CadastrarTesteSiginificadoFrasesComponent, EditarTesteSiginificadoFrasesComponent],
  imports: [
    CommonModule,
    TestesRoutingModule
  ]
})
export class TestesModule { }
