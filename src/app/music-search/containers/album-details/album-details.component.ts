import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Album } from 'src/app/core/models/album';
import { Track } from 'src/app/core/models/Track';
import { MusicSearchService } from 'src/app/core/services/music-search.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album_id = this.route.paramMap.pipe(
    map(p => p.get('album_id'))
  )

  selectedTrack?: Track

  albumData?: Album
  album = this.album_id.pipe(
    filter(id => !!id),
    switchMap(id => this.service.getAlbumById(id!)),
    tap(album => this.albumData = album),
    tap(console.log)
  )

  @ViewChild('audioRef')
  audioRef?: ElementRef<HTMLAudioElement>

  ngAfterViewInit() {
    if (this.audioRef) {
      this.audioRef.nativeElement.volume = 0.2;
    }
  }

  select(track: Track) {
    this.selectedTrack = track

    setTimeout(() => {
      this.audioRef?.nativeElement.play()
    })
  }

  constructor(
    private route: ActivatedRoute,
    private service: MusicSearchService
  ) {
  }

  ngOnInit(): void {
  }


}
