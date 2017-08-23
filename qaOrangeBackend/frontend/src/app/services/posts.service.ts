import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  _data: any
  constructor(private http: Http) {
    console.log('PostsService Initialized...')
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

  getLocations(){
    return this.http.get('/Assets/json/Locations.json')
      .map(res => res.json())
      .map( (data) => 
      this._data = data
    )
  }
}
