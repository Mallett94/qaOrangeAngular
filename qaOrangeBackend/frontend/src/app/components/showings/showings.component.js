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
var api_service_1 = require("../../services/api.service");
var ShowingsComponent = (function () {
    function ShowingsComponent(apiService) {
        this.apiService = apiService;
        this.isActive = false;
        this.filmName = '';
        this.filmDesc = '';
        this.trailer = undefined;
        this.comments = [''];
    }
    ShowingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getFilms()
            .subscribe(function (films) { return _this.films = films; });
        // this.apiService.bookingSubject.subscribe(
        //   res => console.log(res)
        //   //data => this.filmName = data
        //   )
    };
    ShowingsComponent.prototype.onSelect = function (film) {
        this.toggleIsActive();
        this.filmName = film.film_name;
        this.filmDesc = film.film_description;
        this.trailer = film.trailer;
        this.comments = film.comments;
        console.log(this.filmName);
        // this.apiService.getFilmName(film)
    };
    ShowingsComponent.prototype.onClose = function () {
        this.toggleIsActive();
        this.filmName = '';
        this.filmDesc = '';
        this.trailer = undefined;
        this.comments = [''];
    };
    ShowingsComponent.prototype.toggleIsActive = function () {
        this.isActive = !this.isActive;
    };
    ShowingsComponent.prototype.onClickBook = function () {
        // console.log(this.filmName);
        this.apiService.getFilmName(this.filmName);
    };
    return ShowingsComponent;
}());
ShowingsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'showings',
        templateUrl: 'showings.component.html',
        providers: [api_service_1.ApiService],
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ShowingsComponent);
exports.ShowingsComponent = ShowingsComponent;
;
//# sourceMappingURL=showings.component.js.map