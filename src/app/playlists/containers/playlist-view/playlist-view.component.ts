import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  mode: 'details' | 'form' = 'details'
    
  playlists: Playlist[] = [
    {
      id: 123,
      name: 'pancakes 1',
      public: true,
      description: 'Test'
    },
    {
      id: 234,
      name: 'pancakes 2',
      public: false,
      description: 'Test'
    },
    {
      id: 345,
      name: 'pancakes 3',
      public: true,
      description: 'Test'
    },
  ]
  
  selected:Playlist = this.playlists[0]
  
  constructor() { }

  selectPlaylist(playlist:Playlist){
    if(playlist.public)
    this.selected = playlist
  }

  ngOnInit(): void {
  }


  edit() {
    this.mode = 'form'
  }

  cancel() {
    this.mode = 'details'
  }

  save() {
    this.mode = 'details'
  }

}
