import { Component } from '@angular/core';
import {PostsService} from '../../services/posts.service'

@Component({
  selector: 'about',
  template:`
  <h3>About Us</h3>
  <div>
    We have Cinemas at various locations:
    <ul>
      <li *ngFor="let location of locations">
        {{location.location}}
      </li>
    </ul>

    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </v>
  </div>
  `,
  providers:[PostsService]
})

export class AboutComponent  {
  locations : Location[];

  lat: number = 0;
  lng: number = 0;

  constructor(private postsService: PostsService){
    this.postsService.getLocations().subscribe(locations =>{
      this.locations = locations;
    })
  }
};

interface Location{
  id: number;
  location: string;
  lat: number;
  lng: number;
}
