//nathan
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
  //_data;
  constructor(private http: Http) {
    console.log('apiService Initialized...')
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

  getFilms() {
    console.log('gettings FilmList');
    return this.http.get('../../json/Films_All.json')
      .map(res => res.json());
  }

  getLocations(){ //michael
    return this.http.get('../../json/Locations.json')
      .map(res => res.json())
      // .map( (data) =>
      // this._data = data
    //)
  }

}
