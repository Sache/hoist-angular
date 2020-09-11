import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  mode: 'details' | 'form' = 'details'

  constructor() { }

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
