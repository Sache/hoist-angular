import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesnoPipe } from './yesno.pipe';



@NgModule({
  declarations: [
    CardComponent, 
    YesnoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    YesnoPipe
  ]
})
export class SharedModule { }
