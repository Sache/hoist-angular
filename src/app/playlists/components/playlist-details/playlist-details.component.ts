import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';


@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input()
  playlist: Playlist = {
    id:123,
    name: 'pancakes',
    public: true,
    description: 'Test'
  }

  // yesno(option: string) {
  //   return option ? 'Yes' : 'No';
  // }

  constructor() { }

  ngOnInit(): void {
  }


}
