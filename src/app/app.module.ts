import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MusicSearchModule } from './music-search/music-search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    PlaylistsModule,
    MusicSearchModule,
    AppRoutingModule,
  ],
  providers: [
    // {
    //   provide: 'SEARCH_API_URL',
    //   useValue: 'this app is using different url'
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule  {}

// export class AppModule implements DoBootstrap {

//   ngDoBootstrap(appRef: ApplicationRef) {
//     // getConfigFromAPI.then( () => ...
//     appRef.bootstrap(AppComponent, 'root-app')
//   }
// }
