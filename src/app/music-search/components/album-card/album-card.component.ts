import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  
  // <app-album-card [class.card]="isCard"></app-album-card>

  @Input()
  album!:Album 

  @HostBinding('class.card')
  isCard = true

  constructor() { }

  ngOnInit(): void {
  }

}
