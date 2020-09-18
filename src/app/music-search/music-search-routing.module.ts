import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumSearchComponent } from './containers/album-search/album-search.component';
import { SyncSearchComponent } from './containers/sync-search/sync-search.component';

const routes: Routes = [
  {
    path: 'search',
    children: [
      {
        path: '', 
        redirectTo: 'albums',
        pathMatch: 'full'
      },
      {
        path: 'albums',
        component: AlbumSearchComponent
      },
    ]
  },

  {
    path: 'sync',
    component: SyncSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicSearchRoutingModule { }
