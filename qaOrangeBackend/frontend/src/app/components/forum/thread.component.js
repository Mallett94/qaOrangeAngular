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
var thread_1 = require("../../services/thread");
var thread_service_1 = require("../../services/thread.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var ThreadComponent = (function () {
    function ThreadComponent(threadService, route, location) {
        this.threadService = threadService;
    }
    ThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.threadService.getThread(+params.get('id')); })
            .subscribe(function (thread) { return _this.thread = thread; });
    };
    return ThreadComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", thread_1.Thread)
], ThreadComponent.prototype, "thread", void 0);
ThreadComponent = __decorate([
    core_1.Component({
        selector: 'thread',
        template: "\n    <div *ngIf='thread'>\n      <h2>{{thread.title}}</h2>\n      <ul>\n        <li *ngFor='let post of thread.posts'>{{post.content}}</li>\n      </ul>\n    </div>\n  ",
        providers: [thread_service_1.ThreadService]
    }),
    __metadata("design:paramtypes", [thread_service_1.ThreadService, router_1.ActivatedRoute, common_1.Location])
], ThreadComponent);
exports.ThreadComponent = ThreadComponent;
//# sourceMappingURL=thread.component.js.map