import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Album } from '../models/album';
import { SEARCH_API_URL } from './tokens';

@Injectable({
  // providedIn: CoreModule
  providedIn: 'root',
})
export class MusicSearchService {

  constructor(
    @Inject(SEARCH_API_URL) public api_url: string,
    private http: HttpClient
  ) { }

  searchAlbums(query = 'batman') {

    this.http.get(this.api_url,{
      headers:{},
      params:{},
      // observe:'response', // do we want headers too
      // reportProgress:true, // download / upload progress
      // responseType:'arraybuffer', // parse response
      // withCredentials:true // send cookies
    })

    return mockAlbums as unknown as Album[]
  }
}



export const mockAlbums: Partial<Pick<Album, 'id' | 'name' | 'images'>>[] = [
  {
    id: '123', name: 'Album 123', images: [
      { height: 400, width: 300, url: 'https://www.placecage.com/c/300/300' }
    ]
  },
  {
    id: '234', name: 'Album 234', images: [
      { height: 400, width: 300, url: 'https://www.placecage.com/c/400/400' }
    ]
  },
  {
    id: '345', name: 'Album 345', images: [
      { height: 400, width: 300, url: 'https://www.placecage.com/c/500/500' }
    ]
  },
]