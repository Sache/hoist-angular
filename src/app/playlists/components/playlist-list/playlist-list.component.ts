import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
