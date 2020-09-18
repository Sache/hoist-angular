import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, of } from 'rxjs';
import { filter, map, mergeAll, mergeMap, shareReplay, switchMap } from 'rxjs/operators';
import { Playlist } from 'src/app/core/models/playlist';
import { PlaylistsService } from 'src/app/core/services/playlists.service';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {
  mode: 'details' | 'form' = 'details'

  playlists = this.service.getUserPlaylists()

  selectedPlaylist = this.route.paramMap.pipe(
    map(param => param.get('id')),
    switchMap(id => id ?
      this.service.getPlaylistById(id) :
      of(undefined)),
    shareReplay()
  )

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PlaylistsService
  ) { }

  selectPlaylist(playlist: Playlist) {
    this.router.navigate(['/playlists', playlist.id], {
      // relativeTo: this.route
    })
  }

  ngOnInit(): void {
  }


  edit() {
    this.mode = 'form'
  }

  cancel() {
    this.mode = 'details'
  }

  savePlaylist(draft: Playlist) {
    this.service.savePlaylist(draft)
    // const index = this.playlists.findIndex(p => p.id == draft.id)
    // if (index !== -1) {
    //   this.playlists[index] = draft
    //   this.selected = draft
    // }
    // this.mode = 'details';
  }

}
