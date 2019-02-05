import { Component, OnInit , Input} from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public _mov_service: PeliculasService) {
    console.log('get populares');
    this._mov_service.getPopulares().then(( data: any ) => {
      console.log(data);

      console.log('get a trailer info of an movie`s id');
      this._mov_service.getTrailer(data[0].id).then( ( trailer: any) => {
        const key = trailer[0].key;
        const url = 'https://www.youtube.com/watch?v=' + key;
        console.log('watch the trailer');
        console.log(url);

      } );
    });
  }

  ngOnInit() {
  }

}
