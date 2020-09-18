import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Playlist } from '../models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor() { }

  getUserPlaylists(): Observable<Playlist[]> {
    return of(this.playlists)
  }

  getPlaylistById(id: number) {
    return of(this.playlists.find(p => p.id == id))
  }


  playlists: Playlist[] = [
    {
      id: 123,
      type: 'Playlist',
      name: 'Service playlist 1',
      public: true,
      description: 'Test'
    },
    {
      id: 234,
      type: 'Playlist',
      name: 'Service playlist 2',
      public: false,
      description: 'Test'
    },
    {
      id: 345,
      type: 'Playlist',
      name: 'Service playlist 3',
      public: true,
      description: 'Test'
    },
  ]

}
