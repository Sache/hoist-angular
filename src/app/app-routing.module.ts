import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    // component: HomePageComponent,
    redirectTo:'search', 
    pathMatch:'full'
  },
  {
    path:'**',
    // component: PageNotFoundComponent,
    redirectTo:'playlists'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
