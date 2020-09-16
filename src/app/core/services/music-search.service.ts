import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Album, AlbumsSearchResponse } from '../models/album';
import { AuthService } from '../security/auth.service';
import { SEARCH_API_URL } from './tokens';
import { catchError, map, pluck } from 'rxjs/operators'
import { EMPTY, of, throwError } from 'rxjs';

@Injectable({
  // providedIn: CoreModule
  providedIn: 'root',
})
export class MusicSearchService {

  constructor(
    @Inject(SEARCH_API_URL) public api_url: string,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  searchAlbums(query = 'batman') {
    return this.http.get<AlbumsSearchResponse>(this.api_url, {
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      },
      params: {
        type: 'album',
        q: query
      },
    })
      .pipe(
        map(res => res.albums.items),
        // pluck('albums','items')
        catchError((error) => {

          if (error instanceof HttpErrorResponse) {
            return throwError(new Error(error.error.error.message))
          }
          // return throwError(error)
          return throwError(new Error('Unexpected Error'))

          // return EMPTY
          // return [ ]
          // return [ [] ]
          // return of( mockAlbums as Album[] )
        })
      )

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