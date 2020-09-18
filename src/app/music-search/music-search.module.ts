import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicSearchRoutingModule } from './music-search-routing.module';
import { AlbumSearchComponent } from './containers/album-search/album-search.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SyncSearchComponent } from './containers/sync-search/sync-search.component';
import { AlbumDetailsComponent } from './containers/album-details/album-details.component';


@NgModule({
  declarations:    [
      AlbumSearchComponent,
      AlbumCardComponent,
      SearchFormComponent,
      SearchResultsComponent,
      SyncSearchComponent,
      AlbumDetailsComponent
    ],
  imports: [
    CommonModule,
    MusicSearchRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MusicSearchModule { }
