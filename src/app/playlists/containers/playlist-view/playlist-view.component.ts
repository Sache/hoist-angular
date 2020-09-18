import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, iif, Observable, of, Subject } from 'rxjs';
import { filter, map, mergeAll, mergeMap, shareReplay, startWith, switchMap } from 'rxjs/operators';
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

  selectedId = this.route.paramMap.pipe(
    map(param => param.get('id')),
  )

  selectedPlaylist!: Observable<Playlist | undefined>;
  updateSelected() {
    this.selectedPlaylist = this.selectedId.pipe(
      switchMap(id => {
        if (id == 'new') {
          this.mode = 'form'
          return of({
            name: '',
            public: false,
            description: '',
            type: 'Playlist'
          } as Playlist)
        } else if (id !== null) {
          return this.service.getPlaylistById(id)
        } else {
          return of(undefined)
        }
      }),
      shareReplay()
    )
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PlaylistsService
  ) {
    this.updateSelected()
  }

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
    this.service.savePlaylist(draft).subscribe((playlist) => {
      console.log(playlist)

      this.updateSelected()
      this.playlists = this.service.getUserPlaylists()
    })
    // this.mode = 'details';
  }

}
