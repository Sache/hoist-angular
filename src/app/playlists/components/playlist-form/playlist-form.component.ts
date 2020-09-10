import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {

  playlist: Playlist = {
    name: '123',
    public: true,
    description: 'Test'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
