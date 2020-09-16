import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class AuthConfig {
  auth_url = ''
  client_id = ''
  response_type = 'token'
  redirect_uri = ''
  scopes: string[] = []
  show_dialog = false
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null = null

  constructor(private config: AuthConfig) { }

  init() {
    debugger
    if (!this.token) {
      this.extractToken()
    }

    if (!this.token) {
      this.authenticate()
    }
  }

  authenticate() {
    const { auth_url, show_dialog, scopes, response_type,
      redirect_uri, client_id
    } = this.config

    const p = new HttpParams({
      fromObject: {
        client_id,
        show_dialog: show_dialog ? 'true' : '',
        scope: scopes.join(' '),
        response_type,
        redirect_uri,
      }
    })

    console.log(`${auth_url}?${p.toString()}`)
  }

  extractToken() {
    const p = new HttpParams({
      fromString: window.location.hash
    })
    let access_token = p.get('#access_token')

    if (access_token !== null) {
      sessionStorage.setItem('token', JSON.stringify(access_token))
    } else {
      const rawToken = sessionStorage.getItem('token');
      access_token = rawToken && JSON.parse(rawToken)
    }
    this.token = access_token

    return access_token
  }

  getToken() {
    return this.token
  }

}
