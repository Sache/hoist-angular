import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Album } from 'src/app/core/models/album';
import { MusicSearchService } from 'src/app/core/services/music-search.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss'],
  // providers:[MusicSearchService]
})
export class AlbumSearchComponent implements OnInit {
  message = ''
  results: Album[] = []
  
  constructor(private service: MusicSearchService) { }

  searchAlbums(query: string) {
    this.service.searchAlbums(query)
  }
  
  ngOnInit(): void {
    this.service.getAlbumsUpdates().pipe(
      tap(console.log)
    ).subscribe({
      next: albums => this.results = albums,
      error: error => this.message = error.message,
    })
  }
}
