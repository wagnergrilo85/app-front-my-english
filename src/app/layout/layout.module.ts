import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [MenuComponent,RodapeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ],
  exports: [MenuComponent,RodapeComponent]
})
export class LayoutModule { }
