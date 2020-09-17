import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Album, AlbumsSearchResponse } from '../models/album';
import { AuthService } from '../security/auth.service';
import { SEARCH_API_URL } from './tokens';
import { catchError, map, pluck, startWith, tap } from 'rxjs/operators'
import { concat, EMPTY, merge, Observable, of, throwError } from 'rxjs';

@Injectable({
  // providedIn: CoreModule
  providedIn: 'root',
})
export class MusicSearchService {

  prevResults: Album[] = mockAlbums as Album[]
  private albumsFound = new EventEmitter<Album[]>()

  constructor(
    @Inject(SEARCH_API_URL) public api_url: string,
    private http: HttpClient,
  ) { }

  getAlbumsUpdates(): Observable<Album[]> {
    // return merge(
    //   of(mockAlbums as Album[]),
    //   this.albumsFound.asObservable(),
    // )
    return this.albumsFound.pipe(startWith(this.prevResults))
  }

  searchAlbums(query: string) {
    this.http.get<AlbumsSearchResponse>(this.api_url, {
      params: {
        type: 'album',
        q: query
      },
    }).pipe(
      map(res => res.albums.items)
    ).subscribe({
      next: albums => {
        this.prevResults = albums
        this.albumsFound.emit(albums)
      }
    })
  }

}

// console.log(MusicSearchService)

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