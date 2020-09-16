import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  // public api_url = ''

  constructor(
    public api_url = environment.api_config.search_url
  ) {
    // this.api_url = api_url
  }

  searchAlbums(query = 'batman') {
    this.api_url
  }
}
