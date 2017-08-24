import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  providers:[ApiService]
})

export class AboutComponent  {
  locations : Location[];

  constructor(private apiService: ApiService){
    this.apiService.getLocations().subscribe(locations =>{
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
