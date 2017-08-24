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
var HomePageComponent = (function () {
    function HomePageComponent() {
        this.films = [
            { "id": "1", "film_name": "War for the Planet of the Apes", "release_date": "2017", "age_rating": "/img/ratings/BBFC_12A_(2002).svg", "rating_name": "12a",
                "img": "/img/apesposter.jpg", "quote": "Get your stinking paws off me, you damn dirty ape!",
                "film_description": "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of the planet." },
            { "id": "2", "film_name": "Spider-man: Homecoming", "release_date": "2017", "age_rating": "/img/ratings/BBFC_12A_(2002).svg", "rating_name": "12a",
                "img": "/img/spiderman.jpg", "quote": "I'm your friendly neighbourhood spider-man!",
                "film_description": "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened." },
            { "id": "3", "film_name": "Baby Driver", "release_date": "2017", "age_rating": "/img/ratings/BBFC_12A_(2002).svg", "rating_name": "12a",
                "img": "/img/babydriver.jpg", "quote": "All you need is one killer track.",
                "film_description": "Baby is a partially hearing impaired getaway driver who can make any wild move while the right track is playing. It's a critical talent he needs to survive his indentured servitude to the crime boss, Doc. However, just when Baby thinks he is finally free and clear, Baby finds himself in terrible danger. To survive and escape the coming maelstrom, it will take all of Baby's skill, but can he make it when life is forcing him to face the music?" },
            { "id": "4", "film_name": "Lego Batman Movie", "release_date": "2017", "age_rating": "/img/ratings/BBFC_U_(2002).svg", "rating_name": "U",
                "img": "/img/LegoBatman.jpg", "quote": "He's taking them under his wing... of awesomeness!",
                "film_description": "There are big changes brewing in Gotham City, and if he wants to save the city from The Joker's hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up." },
        ];
    }
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'homepage',
        templateUrl: 'homepage.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
;
//# sourceMappingURL=homepage.component.js.map