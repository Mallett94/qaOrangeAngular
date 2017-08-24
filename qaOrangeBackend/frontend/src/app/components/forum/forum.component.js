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
var thread_service_1 = require("../../services/thread.service");
var ForumComponent = (function () {
    function ForumComponent(threadService) {
        this.threadService = threadService;
        this.threads = [];
    }
    ForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadService.getThreads()
            .then(function (threads) { return _this.threads = threads; });
    };
    return ForumComponent;
}());
ForumComponent = __decorate([
    core_1.Component({
        selector: 'forum',
        template: "\n    <a *ngFor='let thread of threads' [routerLink]=\"['/thread', thread.id]\">{{thread.title}}</a>\n  ",
        providers: [thread_service_1.ThreadService]
    }),
    __metadata("design:paramtypes", [thread_service_1.ThreadService])
], ForumComponent);
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map