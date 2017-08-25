import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})

export class AboutComponent  {
  locations : Location[];
  prices : Price[];

  constructor(private apiService: ApiService){

  }

  ngOnInit() {
        this.apiService.getLocations()
          .subscribe(
            locations => this.locations = locations
        );
        this.apiService.getPrices()
        .subscribe(
          prices => this.prices = prices
          );
      }
};

interface Location{
  id: number;
  location: string;
  lat: number;
  lng: number;
}

interface Price{
  price_category: string;
  price: number;
}