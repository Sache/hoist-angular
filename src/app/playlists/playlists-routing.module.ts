import { RouterModule, Routes } from '@angular/router';
import { PlaylistViewComponent } from './containers/playlist-view/playlist-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'playlists',
    children:[
      {
        path:'',
        component: PlaylistViewComponent
      },
      {
        path:':id',
        component: PlaylistViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
