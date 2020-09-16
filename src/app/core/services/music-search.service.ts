import { Inject, Injectable, Optional } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  constructor(
    @Optional() @Inject('SEARCH_API_URL')
    public api_url = environment.api_config.search_url
  ) {}

  searchAlbums(query = 'batman') {
    this.api_url
  }
}
