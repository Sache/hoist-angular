import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { SEARCH_API_URL } from "./services/tokens";
// import { MusicSearchService } from './services/music-search.service';
import {
  HttpClientModule,
  HttpClient
} from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
    // SuperHiperWidgetModule
  ],
  providers: [
    // {
    //   provide:HttpHandler,
    //   useClass: MySpeicalHttpHandler
    // },
    // {
    //   provide:'SuperHiperWidgetDateFormater',
    //   useValue: MyOwnDateFormatter
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
export class CoreModule { }
