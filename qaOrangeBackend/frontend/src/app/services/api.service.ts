//nathan
import { Injectable, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Injectable()
export class ApiService {

  public bookingSubject = new AsyncSubject<string>();
  // public bookingSubject = new AsyncSubject<any>();
  //notifyObservable$ = this.bookingSubject.asObservable();
  //_data;
  constructor(private http: Http) {
    // , public apiService:ApiService
    // this.apiService = apiService
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

  getFilms() {
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

  getFilmName(data) {
    // console.log(data)
    // console.log(this.bookingSubject)
    // this.bookingSubject.subscribe(
    //   res => console.log(res)
    // )
    this.bookingSubject.next(data);
    return this.checkStatus();
  }

  checkStatus(){
    console.log(this.bookingSubject);
  }


}
