import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movie', component: MovieComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
  /*

  {path: 'home', component: HomeComponent},
  {path: 'popular', component: PopularComponent},

  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
