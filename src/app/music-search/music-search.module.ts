import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicSearchRoutingModule } from './music-search-routing.module';
import { AlbumSearchComponent } from './containers/album-search/album-search.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [AlbumSearchComponent, AlbumCardComponent, SearchFormComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    MusicSearchRoutingModule
  ]
})
export class MusicSearchModule { }
