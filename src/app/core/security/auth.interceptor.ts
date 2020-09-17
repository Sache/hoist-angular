import { Component, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMapTo } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    })

    return next.handle(authRequest).pipe(
      catchError((error) => {
        // Logger.logHttpError(error)
        
        if (error instanceof HttpErrorResponse) {
          if(error.status === 401){
            // return this.auth.refreshToken().pipe(switchMap(()=>next.handle(authRequest)))
            this.auth.authenticate()
          }

          return throwError(new Error(error.error.error.message))
        }
        return throwError(new Error('Unexpected Error'))
      })
    )
  }
}

// A.next = B
// B.next = C 
// C.next = Server.send

// res = A.send(x)
