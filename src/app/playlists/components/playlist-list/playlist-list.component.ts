import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';
import { NgForOfContext, NgForOf } from '@angular/common';

NgForOf
NgForOfContext

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistListComponent implements OnInit {

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
      public: true,
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

  select(playlist: Playlist) {
    this.selected =  playlist
  }

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.playlists.length)
        this.playlists.unshift(this.playlists.pop()!)
    },1000)
  }

}
