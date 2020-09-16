import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  
  // <app-album-card [class.card]="isCard"></app-album-card>

  @HostBinding('class.card')
  isCard = true

  constructor() { }

  ngOnInit(): void {
  }

}
