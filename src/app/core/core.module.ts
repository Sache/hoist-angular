import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { SEARCH_API_URL } from "./services/tokens";
// import { MusicSearchService } from './services/music-search.service';
import {
  HttpClientModule,
  HttpClient, HTTP_INTERCEPTORS, HttpClientXsrfModule
} from '@angular/common/http';
import { SecurityModule } from './security/security.module'
import { AuthConfig } from './security/auth.service';
import { AuthInterceptor } from './security/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SecurityModule,
    // SuperHiperWidgetModule
    // HttpClientXsrfModule.withOptions({
    //   cookieName: '', headerName: ''
    // }),
    HttpClientXsrfModule.disable()
  ],
  providers: [
    {
      provide: AuthConfig,
      useValue: environment.auth_config
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    // {
    //   provide: HttpClient,
    //   useClass: MyHttpClientWrapper
    // },
    // {
    //   provide:HttpHandler,
    //   useClass: MySpeicalHttpHandler
    // },
    // {
    //   provide:'SuperHiperWidgetDateFormater',
    //   useValue: MyOwnDateFormatter
    // },
    // {
    //   provide: AlbumService,
    //   useExisting: MusicSearchService
    // },
    {
      // provide: 'SEARCH_API_URL',
      provide: SEARCH_API_URL,
      useValue: environment.api_config.search_url
    },
    // {
    //   provide: MusicSearchService,
    //   useFactory(api_url: string/* aSerice, bValue */) {
    //     return new MusicSearchService(api_url)
    //   },
    //   // deps: [SEARCH_API_URL/* ,A_TOKEN,B_TOKEN */]
    // },
    // {
    //   provide: AbstractMusicSearchService,
    //   useClass: SpotifyMusicSearchService,
    //   // deps: [SEARCH_API_URL/* ,A_TOKEN,B_TOKEN */]
    // }
    // {
    //   provide: MusicSearchService,
    //   useClass: MusicSearchService
    // },
    // MusicSearchService,
  ]
})
export class CoreModule {

  // constructor(@Inject(HTTP_INTERCEPTORS) private interceptor: any[]) {
  //   console.log(interceptor)
  // }
}
