import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, iif, of, Subject } from 'rxjs';
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

  fetchPlaylist = new BehaviorSubject(null)

  selectedId = this.route.paramMap.pipe(
    map(param => param.get('id')),
  )

  selectedPlaylist = combineLatest([
    this.selectedId,
    this.fetchPlaylist
  ]).pipe(
    map(([id, _]) => id),
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
    this.service.savePlaylist(draft).subscribe(() => {
      this.fetchPlaylist.next()
    })
    // this.mode = 'details';
  }

}
