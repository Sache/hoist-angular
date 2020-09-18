import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ConnectableObservable, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { multicast, publish, publishReplay, refCount, share, shareReplay, takeUntil, takeWhile, tap } from 'rxjs/operators';
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
  results: Observable<Album[]> = this.service.getAlbumsUpdates().pipe(
    share()
  )

  query = this.service.query

  constructor(private service: MusicSearchService) { }

  searchAlbums(query: string) {
    this.service.searchAlbums(query)
  }

  ngOnInit(): void {

  }


}
