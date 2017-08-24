"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var user_component_1 = require("./components/test/user.component");
var showings_component_1 = require("./components/showings/showings.component");
var about_component_1 = require("./components/about/about.component");
var contact_component_1 = require("./components/contact/contact.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var booking_component_1 = require("./components/booking/booking.component");
var footer_component_1 = require("./components/footer/footer.component");
var homepage_component_1 = require("./components/homepage/homepage.component");
var paypal_component_1 = require("./components/paypal/paypal.component");
var films_card_component_1 = require("./components/films-card/films-card.component");
var app_routing_1 = require("./routing/app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            user_component_1.UserComponent,
            showings_component_1.ShowingsComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            navbar_component_1.NavbarComponent,
            booking_component_1.BookingComponent,
            footer_component_1.FooterComponent,
            homepage_component_1.HomePageComponent,
            films_card_component_1.FilmsCardComponent,
            paypal_component_1.PaypalComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map