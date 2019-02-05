import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
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
  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }

  moveLeft() {
    let slider = $("#movies-poster-slider");
    console.log(slider.css("marginLeft"));
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
