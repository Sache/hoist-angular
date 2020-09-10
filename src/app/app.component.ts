import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Hoist Angular Team';
  counter = 0

  constructor(private cdr: ChangeDetectorRef) {
    // this.cdr.detach()

    setInterval(() => {
      this.counter += 1;
      console.log('counter', this.counter)
      // this.cdr.detectChanges()
    }, 1000)
  }

  ngOnInit() {
    // this.cdr.detectChanges()
  }


  alert(mgs: string) {
    // this.title = "changed!" // ExpressionChangedAfterItHasBeenCheckedError
    if (this.title != 'changed!')
      setTimeout(() => {
        this.title = "changed!"
      }, 0)

    console.log(mgs)
  }
}
