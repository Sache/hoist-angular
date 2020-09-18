import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';
import { NgForOfContext, NgForOf } from '@angular/common';

NgForOf
NgForOfContext

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated
  // inputs: [
  //   'playlists:items'
  // ]
})
export class PlaylistListComponent implements OnInit {

  @Input('items')
  playlists: Playlist[] = []

  @Input()
  selected: Playlist | null = null;

  @Output('selectedChange')
  selectedChange = new EventEmitter<Playlist>()

  select(playlist: Playlist) {
    this.selectedChange.emit(playlist)
  }

  constructor() { }

  ngOnInit(): void {
    // setInterval(()=>{
    //   if(this.playlists.length)
    //     this.playlists.unshift(this.playlists.pop()!)
    // },1000)
  }

}
