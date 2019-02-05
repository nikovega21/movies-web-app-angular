import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule,MatToolbarModule,MatIconModule, MatFormFieldModule, MatCardModule,MatRippleModule} from '@angular/material';
import { MoviesSliderComponent } from './movies-slider/movies-slider.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MoviesPosterSliderComponent } from './movies-poster-slider/movies-poster-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MoviesSliderComponent,
    MoviePosterComponent,
    MoviesPosterSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,MatInputModule,
    MatCardModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
