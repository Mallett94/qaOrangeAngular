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
var AboutComponent = (function () {
    function AboutComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.lat = 0;
        this.lng = 0;
        this.postsService.getLocations().subscribe(function (locations) {
            _this.locations = locations;
        });
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: "\n  <h3>About Us</h3>\n  <div>\n    We have Cinemas at various locations:\n    <ul>\n      <li *ngFor=\"let location of locations\">\n        {{location.location}}\n      </li>\n    </ul>\n\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </v>\n  </div>\n  ",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
;
//# sourceMappingURL=about.component.js.map