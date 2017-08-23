import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/showings">Showings</a></li>
    <li><a routerLink="/about">About</a></li>
    <li><a routerLink="/contact">Contact Us</a></li>
    <li><a routerLink='/forum'>Forum</a></li>
  </ul>
  <hr />
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {

};
