import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.css']
})

export class MoviesSliderComponent implements OnInit {

  moviesProvider: PeliculasService;

  constructor(public movies_provider: PeliculasService) {
    this.moviesProvider = movies_provider;
  }
  counter: number = 0;

  movies: any;

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesProvider.getCartelera().then((data: any) => this.movies = data.filter(x => x.backdrop_path != null && x.overview != ""));
  }
  changeBlurRight() {
    let blur = $("#images-container-blur");
    blur.animate({
      "marginLeft": "-=100%"
    }, 800);
  }

  changeBlurLeft() {
    let blur = $("#images-container-blur");
    blur.animate({
      "marginLeft": "+=100%"
    }, 800);
  }
  moveRight() {
    let contenedor = $("#images-container");
    if (this.counter < this.movies.length-1) {
      contenedor.animate({
        "marginLeft": "-=100%"
      }, 800);
      this.counter++;
      this.changeBlurRight();
    }
  }
  moveLeft() {

    let contenedor = $("#images-container");
    if (this.counter > 0) {
      contenedor.animate({
        "marginLeft": "+=100%"
      }, 800);
      this.counter--;
      this.changeBlurLeft();
    }
  }
}
