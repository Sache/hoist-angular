import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesnoPipe } from './yesno.pipe';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    CardComponent, 
    YesnoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    YesnoPipe,
    FormsModule
  ]
})
export class SharedModule { }
