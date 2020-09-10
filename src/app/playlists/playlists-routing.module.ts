import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistViewComponent } from './containers/playlist-view/playlist-view.component';

const routes: Routes = [
  {
    path:'',
    component: PlaylistViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
