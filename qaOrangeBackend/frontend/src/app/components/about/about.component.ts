import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})

export class AboutComponent  {
  locations : Location[];

  constructor(private apiService: ApiService){

  }

  ngOnInit() {
        this.apiService.getLocations()
          .subscribe(
            locations => this.locations = locations
        );
      }
};

interface Location{
  id: number;
  location: string;
  lat: number;
  lng: number;
}
