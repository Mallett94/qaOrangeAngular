"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//nathan
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AsyncSubject_1 = require("rxjs/AsyncSubject");
var ApiService = (function () {
    // public bookingSubject = new AsyncSubject<any>();
    //notifyObservable$ = this.bookingSubject.asObservable();
    //_data;
    function ApiService(http) {
        this.http = http;
        this.bookingSubject = new AsyncSubject_1.AsyncSubject();
        // , public apiService:ApiService
        // this.apiService = apiService
    }
    ApiService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getFilms = function () {
        return this.http.get('http://localhost:3002/FilmsAll')
            .map(function (res) { return res.json(); });
    };
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
    ApiService.prototype.getLocations = function () {
        return this.http.get('http://localhost:3002/Locations')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getPrices = function () {
        return this.http.get('http://localhost:3002/Prices')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getFilmName = function (data) {
        // console.log(data)
        // console.log(this.bookingSubject)
        // this.bookingSubject.subscribe(
        //   res => console.log(res)
        // )
        this.bookingSubject.next(data);
        return this.checkStatus();
    };
    ApiService.prototype.checkStatus = function () {
        console.log(this.bookingSubject);
    };
    ApiService.prototype.parseJSON = function (res) {
        return console.log(res + 'test');
        // res.json();
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map