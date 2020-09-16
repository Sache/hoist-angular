import { RouterModule, Routes } from '@angular/router';
import { PlaylistViewComponent } from './containers/playlist-view/playlist-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'playlists',
    component: PlaylistViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
