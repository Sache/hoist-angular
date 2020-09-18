import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectableObservable, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { filter, map, multicast, publish, publishReplay, refCount, share, shareReplay, takeUntil, takeWhile, tap } from 'rxjs/operators';
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
  results: Observable<Album[]> = this.service.getAlbumsUpdates().pipe(share())

  query = this.service.query

  constructor(
    private service: MusicSearchService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      map(parms => parms.get('query'))
    ).subscribe(query => {
      if (!query) { return }
      this.service.searchAlbums(query)
    })

    // const query = this.route.snapshot.queryParamMap.get('query')
    // if (query) {
    //   this.searchAlbums(query)
    // }
  }

  searchAlbums(query: string) {
   
    // this.router.navigate(['/search','albums'],{})
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        query
      }
    })
  }
}
