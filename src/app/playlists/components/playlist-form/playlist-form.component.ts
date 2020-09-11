import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit, OnChanges {

  @Input()
  playlist!: Playlist

  draft!: Playlist

  @Output()
  cancelClicked = new EventEmitter();

  cancel() {
    this.cancelClicked.emit()
  }

  @Output()
  saveClicked = new EventEmitter<Playlist>()

  save() {
    this.saveClicked.emit({...this.draft})
  }

  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
    this.draft = {
      ...this.playlist
    }
  }
  
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  
  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

}
