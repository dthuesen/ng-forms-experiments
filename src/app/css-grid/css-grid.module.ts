import { CommonModule } from '@angular/common';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { cssGridRouting } from './css-grid-routing';

@NgModule({
  imports: [
    CommonModule,
    cssGridRouting,
  ],
  declarations: [
    GridHomeComponent,
  ],
  exports: [
    GridHomeComponent,
  ]
})
export class CssGridModule { }
