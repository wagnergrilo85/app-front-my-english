import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressoesModule } from './expressoes/expressoes.module';
import { FrasesModule } from './frases/frases.module';
import { PalavrasModule } from './palavras/palavras.module';
import { TestesModule } from './testes/testes.module';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./frases/frases.module').then(m => m.FrasesModule)
    },
    {
      path: '',
      loadChildren: () => import('./expressoes/expressoes.module').then(m => m.ExpressoesModule)
    },
    {
      path: '',
      loadChildren: () => import('./palavras/palavras.module').then(m => m.PalavrasModule)
    },
    {
      path: '',
      loadChildren: () => import('./testes/testes.module').then(m => m.TestesModule)
    }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ExpressoesModule,
    FrasesModule,
    PalavrasModule,
    TestesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
