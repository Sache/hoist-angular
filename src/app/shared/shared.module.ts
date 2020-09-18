import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { YesnoPipe } from './yesno.pipe';

import {FormsModule} from '@angular/forms';
import { MusicServiceProviderComponent } from './music-service-provider/music-service-provider.component';
import { DurationPipe } from './duration.pipe'

@NgModule({
  declarations: [
    CardComponent, 
    YesnoPipe, MusicServiceProviderComponent, DurationPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    YesnoPipe,
    FormsModule,
    MusicServiceProviderComponent,
    DurationPipe
  ]
})
export class SharedModule { }
