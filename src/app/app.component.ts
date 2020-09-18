import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './core/security/auth.service';
import { UserProfileService } from './core/services/user-profile.service';

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

  logout() {
    this.auth.logout()
  }

  constructor(
    public user: UserProfileService,
    private auth: AuthService) { }

  ngOnInit() {
  }
}
