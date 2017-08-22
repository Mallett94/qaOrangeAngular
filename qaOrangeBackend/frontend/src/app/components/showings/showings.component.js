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
var core_1 = require("@angular/core");
var posts_service_1 = require("../../services/posts.service");
var ShowingsComponent = (function () {
    function ShowingsComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.postsService.getFilms().subscribe(function (films) {
            _this.films = films;
            console.log(_this.films);
        });
    }
    return ShowingsComponent;
}());
ShowingsComponent = __decorate([
    core_1.Component({
        selector: 'showings',
        template: "\n  <h1>Showings Page</h1>\n  <div>\n    <div *ngFor=\"let film of films\" class=\"mdl-grid film-grid\">\n      <h4 class=\"mdl-card__title-text\">{{film.film_name}}</h4>\n    </div>\n    <div class=\"mdl-card__supporting-text mdl-color-text--white\">{{film.quote}}</div>\n  </div>\n  ",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], ShowingsComponent);
exports.ShowingsComponent = ShowingsComponent;
;
//# sourceMappingURL=showings.component.js.map