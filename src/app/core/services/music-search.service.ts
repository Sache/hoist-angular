import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Album, AlbumsSearchResponse } from '../models/album';
import { AuthService } from '../security/auth.service';
import { SEARCH_API_URL } from './tokens';
import { catchError, map, pluck, startWith, tap } from 'rxjs/operators'
import { BehaviorSubject, concat, EMPTY, merge, Observable, of, ReplaySubject, Subject, throwError } from 'rxjs';

@Injectable({
  // providedIn: CoreModule
  providedIn: 'root',
})
export class MusicSearchService {
  private albumsFound = new BehaviorSubject<Album[]>(mockAlbums as Album[])

  private queryChange = new BehaviorSubject<string>('batman')
  public query = this.queryChange.asObservable()

  constructor(
    @Inject(SEARCH_API_URL) public api_url: string,
    private http: HttpClient,
  ) {
    this.albumsFound.getValue(); // get current value without subscribing

    (window as any).subject = this.albumsFound
  }

  getAlbumsUpdates(): Observable<Album[]> {
    return this.albumsFound;
  }

  searchAlbums(query: string) {
    this.queryChange.next(query)

    this.sendSearchRequest(query).subscribe({
      next: albums => {
        this.albumsFound.next(albums)
      }
    })
  }


  sendSearchRequest(query: string) {
    return this.http.get<AlbumsSearchResponse>(this.api_url, {
      params: {
        type: 'album',
        q: query
      },
    }).pipe(
      map(res => res.albums.items)
    );
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