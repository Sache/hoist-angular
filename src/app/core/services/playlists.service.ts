import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagingObject } from '../models/PagingObject';
import { Playlist } from '../models/playlist';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  api_url = 'https://api.spotify.com/v1'
  constructor(
    private userservice: UserProfileService,
    private http: HttpClient,

  ) { }

  getUserPlaylists(): Observable<Playlist[]> {
    return this.http.get<PagingObject<Playlist>>(this.api_url + '/me/playlists').pipe(map(res => res.items))
  }

  getPlaylistById(playlist_id: string) {
    return this.http.get<Playlist>(this.api_url+`/playlists/${playlist_id}`)
  }


  savePlaylist(draft: Playlist): Observable<Playlist> {
    const user_id = this.userservice.getUser()?.id

    if (draft.id == undefined) {
      return this.http.post<Playlist>(this.api_url + `/users/${user_id}/playlists`, {
        name: draft.name,
        public: draft.public,
        description: draft.description
      })

    }
    return of({} as Playlist)
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
