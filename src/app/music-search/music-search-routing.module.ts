import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumSearchComponent } from './containers/album-search/album-search.component';

const routes: Routes = [
  {
    path:'search',
    component: AlbumSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicSearchRoutingModule { }
