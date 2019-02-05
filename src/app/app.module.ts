import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoviesSliderComponent } from './movies-slider/movies-slider.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MoviesPosterSliderComponent } from './movies-poster-slider/movies-poster-slider.component';

// @material
import { MaterialModule } from './MaterialAngularModule';
// Services
import { PeliculasService } from './services/peliculas.service';
import { JsonpModule } from '@angular/http';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
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
