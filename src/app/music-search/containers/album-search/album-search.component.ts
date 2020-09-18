import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, takeWhile, tap } from 'rxjs/operators';
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
  results!: Observable<Album[]>

  query =  this.service.query

  constructor(private service: MusicSearchService) { }

  searchAlbums(query: string) {
    // this.results =  this.service.searchAlbums(query)
    this.results = this.service.sendSearchRequest(query)
  }

  ngOnInit(): void {
 
  }

}
