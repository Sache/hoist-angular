import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Album, AlbumsSearchResponse } from '../models/album';
import { AuthService } from '../security/auth.service';
import { SEARCH_API_URL } from './tokens';
import { catchError, concatAll, delay, exhaust, filter, map, mergeAll, pluck, startWith, switchAll, switchMap, switchMapTo, tap } from 'rxjs/operators'
import { BehaviorSubject, concat, EMPTY, from, merge, Observable, of, ReplaySubject, Subject, throwError } from 'rxjs';

@Injectable({
  // providedIn: CoreModule
  providedIn: 'root',
})
export class MusicSearchService {
  private albumsFound = new BehaviorSubject<Album[]>(mockAlbums as Album[])

  private queryChange = new BehaviorSubject<string>('batman')
  public query = this.queryChange.asObservable()

  public errorNotifications = new Subject<Error>();

  constructor(
    @Inject(SEARCH_API_URL) public api_url: string,
    private http: HttpClient,
  ) {
    // this.albumsFound.getValue(); // get current value without subscribing
    (window as any).subject = this.albumsFound

    this.queryChange.pipe(
      // filter(q => q !== ''),
      map(query => ({
        type: 'album',
        q: query
      })),
      // mergeMap(...
      // concatMap(...
      // exhaustMap(...
      switchMap(params => this.http.get<AlbumsSearchResponse>(this.api_url, { params }).pipe(
        catchError((err) => { this.errorNotifications.next(err); return EMPTY })
      )),
      // o => o, //  Observable<Observable<AlbumsSearchResponse>>
      // mergeAll(),
      // concatAll(),
      // exhaust(), // throttle
      // switchAll(), // debouce
      // o => o, // Observable<AlbumsSearchResponse>
      map(res => res.albums.items)
    )
      .subscribe(this.albumsFound)

    // .subscribe({
    //   next: albums => {
    //     this.albumsFound.next(albums)
    //   }
    // })
  }

  getAlbumsUpdates(): Observable<Album[]> {
    return this.albumsFound;
  }

  searchAlbums(query: string) {
    this.queryChange.next(query)
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