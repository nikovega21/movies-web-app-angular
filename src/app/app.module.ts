import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { MoviesPosterSliderComponent } from './components/movies-poster-slider/movies-poster-slider.component';

// @material
import { MaterialModule } from './MaterialAngularModule';
// Services
import { PeliculasService } from './services/peliculas.service';
import { JsonpModule } from '@angular/http';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesSliderComponent,
    MoviePosterComponent,
    MoviesPosterSliderComponent,
    MovieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
