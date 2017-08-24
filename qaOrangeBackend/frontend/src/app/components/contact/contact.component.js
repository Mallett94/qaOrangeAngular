"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
    };
    // storeAsJson(e) {
    //   e.preventDefault();
    //   let submission = {
    //     honorific: this.honorific,
    //     firstName: document.getElementById("firstName").value,
    //     surname: document.getElementById('surname').value,
    //     dob: document.getElementById("dob").value,
    //     email: document.getElementById("email").value,
    //     contactReason: this.reason,
    //     message: document.getElementById("message").value
    //   }
    //   // Client.addToContactForm(submission);
    //   let myJSON = JSON.stringify(submission);
    //   localStorage.setItem("testJSON", myJSON);
    //   document.getElementById("contactForm").reset();
    // }
    ContactComponent.prototype.outputJson = function () {
        var text = localStorage.getItem("testJSON");
        var submission = JSON.parse(text);
        document.getElementById("comments").innerHTML += submission.honorific + " "
            + submission.surname + " said:<br>"
            + submission.message + "<br> <br>";
    };
    ContactComponent.prototype.getHonorific = function (e) {
        this.honorific = e.target.value;
        console.log(e.target.value);
    };
    ContactComponent.prototype.getReason = function (e) {
        this.reason = e.target.value;
        console.log(e.target.value);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: './contact.component.html',
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
;
//# sourceMappingURL=contact.component.js.map