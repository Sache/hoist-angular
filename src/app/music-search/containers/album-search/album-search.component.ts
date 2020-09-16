import { Component, Inject, OnInit } from '@angular/core';
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
    const resp = this.service.searchAlbums(query)

    resp.subscribe({
      next: resp => {
        console.log(resp)
        this.results = resp as Album[];
      },
      error: error => {
        console.error(error)
        this.message = error.message;
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
  }

}
