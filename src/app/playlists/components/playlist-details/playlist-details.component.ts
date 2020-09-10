import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  playlist = {
    name: 'pancakes',
    public: false,
    description: 'Test'
  }

  // yesno(option: string) {
  //   return option ? 'Yes' : 'No';
  // }

  constructor() { }

  ngOnInit(): void {
  }


}
