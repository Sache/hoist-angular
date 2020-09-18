import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'MusicAppr';

  expanded = false

  constructor() {  }

  ngOnInit() {
  }
}
