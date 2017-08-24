import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent  { 

toggleNav: boolean;

constructor(){
  this.toggleNav = false;
}

  hideShow(){
    this.toggleNav = !this.toggleNav;
    console.log(this.toggleNav);
  }
 }
