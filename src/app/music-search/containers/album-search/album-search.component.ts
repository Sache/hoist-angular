import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/core/models/album';
import { MusicSearchService } from 'src/app/core/services/music-search.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss']
})
export class AlbumSearchComponent implements OnInit {
  message = ''
  results: Album[] = []
  
  constructor(private service: MusicSearchService) { }

  searchAlbums(query: string) {
    this.service.searchAlbums(query).subscribe({
      next: albums => this.results = albums,
      error: error => this.message = error.message,
    })
  }

  ngOnInit(): void {
    this.searchAlbums('batman')
  }
}
