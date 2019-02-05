import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-movies-poster-slider',
  templateUrl: './movies-poster-slider.component.html',
  styleUrls: ['./movies-poster-slider.component.css']
})
export class MoviesPosterSliderComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  type: string;

  movies: any;

  moviesProvider: PeliculasService;

  constructor(public movies_provider: PeliculasService) {
    this.moviesProvider = movies_provider;
  }

  validateTypeOfMovies() {
    switch (this.type) {
      case "popular":
        this.moviesProvider.getPopulares().then((data: any) => {
          this.movies = data;
        });
        break;
      case "on_showing":
        this.moviesProvider.getCartelera().then((data: any) => {
          this.movies = data;
        });
        break;
      default: break;
    }
  }

  ngOnInit() {
    this.validateTypeOfMovies();
  }

  moveLeft() {
    let slider = $("#movies-poster-slider");
    if (slider.css("marginLeft") != "0px") {
      slider.animate({ "marginLeft": "+=230px" }, 300);
    }

  }

  moveRight() {
    let slider = $("#movies-poster-slider");
    if (true) {
      slider.animate({ "marginLeft": "-=230px" }, 300);
    }
  }
}
