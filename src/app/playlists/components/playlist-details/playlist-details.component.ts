import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input()
  playlist!: Playlist

  @Output()
  editClicked = new EventEmitter()

  // constructor(
  //   private parent: PlaylistViewComponent
  // ) { 
  //   parent.edit()
  // }

  ngOnInit(): void {
  }


}
