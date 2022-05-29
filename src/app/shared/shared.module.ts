import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './header-top/header-top.component';
import { CardTopListarComponent } from './card-top-listar/card-top-listar.component';

@NgModule({
  declarations: [HeaderTopComponent, CardTopListarComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderTopComponent, CardTopListarComponent]
})
export class SharedModule { }
