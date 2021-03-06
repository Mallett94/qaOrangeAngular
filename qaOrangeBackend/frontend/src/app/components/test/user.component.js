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
//user.components.ts
var core_1 = require("@angular/core");
var api_service_1 = require("../../services/api.service");
var UserComponent = (function () {
    function UserComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.name = 'Nathan',
            this.email = 'nmallett94@gmail.com',
            this.address = {
                street: '15 The Burrows',
                city: 'Batley',
                county: 'West Yorkshire'
            };
        this.hobbies = ['Sports', 'Reading fiction', 'Video games'],
            this.showHobbies = false;
        this.apiService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            console.log(posts);
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html',
        providers: [api_service_1.ApiService]
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map