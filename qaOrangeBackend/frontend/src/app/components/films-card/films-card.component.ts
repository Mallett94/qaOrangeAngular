import { Component,Input} from '@angular/core';

@Component({
  moduleId:module.id,
  selector:'films-card',
  templateUrl:'films-card.component.html'

})

export class FilmsCardComponent {

@Input('films') film:any;


};
