import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  url = 'https://api.spotify.com/v1/me'

  private userProfile = new BehaviorSubject<UserProfile | null>(null)

  public userChange = this.userProfile.asObservable()

  getUser() {
    return this.userProfile.getValue()
  }

  constructor(
    private http: HttpClient, private auth: AuthService
  ) {

    auth.loggedInChange.pipe(
      filter(login => login == true),
      switchMap(() => this.http.get<UserProfile>(this.url)),
      o => o
    ).subscribe(user => this.userProfile.next(user))
  }
}


// Generated by https://quicktype.io

export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface Image {
  height: null;
  url: string;
  width: null;
}
