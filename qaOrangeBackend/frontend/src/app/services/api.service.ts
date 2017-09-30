//nathan
import { Injectable, Pipe } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
    return this.http.get('http://localhost:3002/FilmsAll')
      .map(res => res.json());
  }

  // getFilms() {
  //   return this.http.get('/FilmsAll', {
  //     method: 'get',
  //     mode: 'no-cors',
  //   })
  //     .map(res => res.json());
  // }


  // fetchFilms() {
  //   return this.http.get('://localhost:3002/FilmsAll', {
  //     mode: 'no-cors'
  //   })
  //     .then(this.parseJSON);
  //     // .map(res => res.json());
  // }

  // testFetch(){
  //   fetch('http://localhost:3002/FilmsAll', {
  //     method: 'get',
  //     mode: 'no-cors',
  //   }).then(() => {
  //     console.log('Works!');
  //     });
  // }
  

  getLocations() {
    return this.http.get('http://localhost:3002/Locations')
      .map(res => res.json());
  }

  getPrices() {
    return this.http.get('http://localhost:3002/Prices')
      .map(res => res.json());
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

  parseJSON(res){
    return console.log(res+'test');
    // res.json();
  }

}