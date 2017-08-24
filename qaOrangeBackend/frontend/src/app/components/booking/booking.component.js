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
        this.totalTicketQuantity = 0;
        this.totalProgress = 0;
        this.vProgress = 0;
        this.dProgress = 0;
        this.timeProgress = 0;
        this.tickProgress = 0;
        this.sProgress = 0;
        this.progressComplete = false;
    }
    BookingComponent.prototype.addToOrder = function () {
        this.showBasket = true;
    };
    BookingComponent.prototype.resetAdults = function () {
        this.adultTicketQuantity = 0;
        return this.checkTotalTickets();
    };
    BookingComponent.prototype.resetKids = function () {
        this.kidsTicketQuantity = 0;
        return this.checkTotalTickets();
    };
    BookingComponent.prototype.resetSeniors = function () {
        this.seniorTicketQuantity = 0;
        return this.checkTotalTickets();
    };
    BookingComponent.prototype.checkVProgress = function (v) {
        {
            (v.value == null) ? this.vProgress = 20 : this.vProgress = 0;
        }
        return this.progressBar();
    };
    BookingComponent.prototype.checkDProgress = function (d) {
        {
            (d.value == null) ? this.dProgress = 20 : this.dProgress = 0;
        }
        return this.progressBar();
    };
    BookingComponent.prototype.checkTimeProgress = function (t) {
        {
            (t.value == null) ? this.timeProgress = 20 : this.timeProgress = 0;
        }
        return this.progressBar();
    };
    BookingComponent.prototype.checkTotalTickets = function () {
        this.totalTicketQuantity = this.adultTicketQuantity + this.kidsTicketQuantity + this.seniorTicketQuantity;
        return this.checkTickProgress();
    };
    BookingComponent.prototype.checkTickProgress = function () {
        {
            (this.totalTicketQuantity == 0) ? this.tickProgress = 0 : this.tickProgress = 20;
        }
        return this.progressBar();
    };
    BookingComponent.prototype.checkSProgress = function (s) {
        {
            s.value == null ? this.sProgress = 20 : this.sProgress = 0;
        }
        return this.progressBar();
    };
    BookingComponent.prototype.progressBar = function () {
        this.totalProgress = this.vProgress + this.dProgress + this.timeProgress + this.tickProgress + this.sProgress;
        return this.checkProgressComplete();
    };
    BookingComponent.prototype.checkProgressComplete = function () {
        {
            (this.totalProgress == 100) ? this.progressComplete = true : this.progressComplete = false;
        }
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