import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaylistsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {}
// export class AppModule implements DoBootstrap {

//   ngDoBootstrap(appRef: ApplicationRef) {
//     // getConfigFromAPI.then( () => ...
//     appRef.bootstrap(AppComponent, 'root-app')
//   }
// }
