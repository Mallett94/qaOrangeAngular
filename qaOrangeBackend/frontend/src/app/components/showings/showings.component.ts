import { Component } from '@angular/core';

@Component({
  selector: 'showings',
  template: `
  <h1>Showings Page</h1>
  <div>
    {{filmTitle}}
    <img src={{filmImg}} />
    {{filmDesc}}
  </div>
  `,
})
export class ShowingsComponent  {

};
