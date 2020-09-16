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

  
  searchAlbums(query: string) {
    const recipeForPancakes = this.service.searchAlbums(query)

    const sub: Subscription = recipeForPancakes.subscribe()
    sub.unsubscribe()

    recipeForPancakes.subscribe({
      next: resp => {
        this.results = resp.albums.items
      },
      error: error => {
        this.message = error.error.error.message;
      },
      complete: () => { console.log('complete') }
    })

    /* do something else in meantime */
  }

  constructor(
    // @Inject(MusicSearchService)
    private service: MusicSearchService
  ) { }

  ngOnInit(): void {
    this.searchAlbums('batman')
  }

}
