import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, takeWhile, tap } from 'rxjs/operators';
import { Album } from 'src/app/core/models/album';
import { MusicSearchService } from 'src/app/core/services/music-search.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss'],
  // providers:[MusicSearchService]
})
export class AlbumSearchComponent implements OnInit, OnDestroy {
  message = ''
  results: Album[] = []
  query = '';

  constructor(private service: MusicSearchService) { }

  searchAlbums(query: string) {
    this.service.searchAlbums(query)
  }

  ngOnInit(): void {

    this.service.getAlbumsUpdates()
      .pipe(takeUntil(this.destroySignal))
      .subscribe({
        next: albums => this.results = albums,
        error: error => this.message = error.message,
      })

    this.service.query
      .pipe(takeUntil(this.destroySignal))
      .subscribe({
        next: query => {
          this.query = query
        }
      })
  }

  destroySignal = new Subject()

  ngOnDestroy() {
    this.destroySignal.next()
  }
}
