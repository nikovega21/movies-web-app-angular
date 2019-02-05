import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.css']
})
export class MoviesSliderComponent implements OnInit {
  constructor() { }
  counter: number = 0;
  images: String[] = ["https://image.tmdb.org/t/p/original/93xA62uLd5CwMOAs37eQ7vPc1iV.jpg",
    "https://image.tmdb.org/t/p/original/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg",
    "https://image.tmdb.org/t/p/original/xcaSYLBhmDzJ6P14bcKe0KTh3QV.jpg"];

  ngOnInit() {
    
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
    if (this.counter < 2) {
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
