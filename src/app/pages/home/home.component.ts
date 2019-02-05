import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public _mov_service: PeliculasService) {
    console.log('get populares');
    this._mov_service.getPopulares().then((data: any) => {
      this._mov_service.getTrailer(data[0].id).then((trailer: any) => {
        const key = trailer[0].key;
        const url = 'https://www.youtube.com/watch?v=' + key;
      });
    });
  }

  ngOnInit() {

  }

}
