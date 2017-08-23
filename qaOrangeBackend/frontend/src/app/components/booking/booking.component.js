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
var BookingComponent = (function () {
    function BookingComponent() {
        this.showBasket = false;
        this.adultTicketQuantity = 0;
        this.kidsTicketQuantity = 0;
        this.seniorTicketQuantity = 0;
    }
    BookingComponent.prototype.addToOrder = function () {
        this.showBasket = true;
    };
    BookingComponent.prototype.resetAdults = function () {
        this.adultTicketQuantity = 0;
    };
    BookingComponent.prototype.resetKids = function () {
        this.kidsTicketQuantity = 0;
    };
    BookingComponent.prototype.resetSeniors = function () {
        this.seniorTicketQuantity = 0;
    };
    return BookingComponent;
}());
BookingComponent = __decorate([
    core_1.Component({
        selector: 'booking',
        templateUrl: './booking.component.html',
    }),
    __metadata("design:paramtypes", [])
], BookingComponent);
exports.BookingComponent = BookingComponent;
;
//# sourceMappingURL=booking.component.js.map