import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist!: Playlist 


  @Output() 
  cancelClicked = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
