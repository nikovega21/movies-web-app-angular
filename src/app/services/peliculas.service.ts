import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  populars: any[] ;
  billboard: any[] ;
  trailer: any[];
  ninos: any[] ;
  private apikey = '544dc170e1224ff4a7f93960ec2b2b12';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  constructor( private jsonp: Jsonp ) { }

  // populars
  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=en&callback=JSONP_CALLBACK`;
  return new Promise((resolve , reject) => {
      this.jsonp.get( url ).subscribe(result => {
        if ( result) {
          this.populars = result.json().results;
          resolve(this.populars); // sends the array resultant, use console.log to show attribs
        } else {
          reject(null);
        }
      });
    });
  }

    // billboard
    getCartelera() {
      const f = new Date();
      const  t = new Date();
      t.setDate(f.getDate() + 9 );
      const from = `${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()}`;
      const to = `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
      // tslint:disable-next-line:max-line-length
      const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${from}&primary_release_date.lte=${to}&api_key=${ this.apikey }&language=en&callback=JSONP_CALLBACK`;
      return new Promise((resolve , reject) => {
        this.jsonp.get( url ).subscribe(result => {
          if ( result) {
            this.populars = result.json().results;
            resolve(this.populars);
          } else {
            reject(null);
          }
        });
      });
    }

  // kids suggestions
  getNinos() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=en&callback=JSONP_CALLBACK`;
    // tslint:disable-next-line:max-line-length
    return new Promise((resolve , reject) => {
      this.jsonp.get( url ).subscribe(result => {
        if ( result) {
          this.ninos = result.json().results;

          resolve(this.ninos);
        } else {
          reject(null);
        }
      });
    });
  }
  buscarPelicula( texto: string ) { 
    // tslint:disable-next-line:max-line-length
    /*const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res => res.json());*/
  }

  // return specific trailer info of a movie id
  getTrailer(id: string = null) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&append_to_response=videos&callback=JSONP_CALLBACK`;
    return new Promise((resolve , reject) => {
      this.jsonp.get( url ).subscribe(result => {
        if ( result) {
          resolve(result.json().videos.results);
        } else {
          reject(null);
        }
      });
    });
  }
}
