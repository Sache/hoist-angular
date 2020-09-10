import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistViewComponent } from './containers/playlist-view/playlist-view.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistListItemComponent } from './components/playlist-list-item/playlist-list-item.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';


@NgModule({
  declarations: [
    PlaylistViewComponent,
    PlaylistListComponent,
    PlaylistListItemComponent,
    PlaylistDetailsComponent,
    PlaylistFormComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule
  ],
  exports: [
    PlaylistViewComponent
  ]
})
export class PlaylistsModule { }
