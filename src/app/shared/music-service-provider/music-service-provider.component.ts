import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from 'src/app/core/services/music-search.service';

@Component({
  selector: 'app-music-service-provider',
  templateUrl: './music-service-provider.component.html',
  styleUrls: ['./music-service-provider.component.scss'],
  providers:[MusicSearchService]
})
export class MusicServiceProviderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
