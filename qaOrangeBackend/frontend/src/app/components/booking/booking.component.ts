// Marc + Nathan

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

//import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  filmName;
  //private subscription: Subscription;
  venues: Venue[];
  selectedVenue: string;
  day: string;
  time: string;
  adultTicketQuantity: number;
  kidsTicketQuantity: number;
  seniorTicketQuantity: number;
  totalTicketQuantity: number;
  seats: string;
  showBasket: boolean;
  vProgress : number;
  dProgress : number;
  timeProgress : number;
  tickProgress : number;
  sProgress : number;
  totalProgress;
  progressComplete: boolean;


  constructor(public apiService:ApiService){
    // this.filmName = 'test'
    this.showBasket = false;
    this.adultTicketQuantity = 0;
    this.kidsTicketQuantity = 0;
    this.seniorTicketQuantity = 0;
    this.totalTicketQuantity = 0;
    this.totalProgress = 0;
    this.vProgress = 0;
    this.dProgress = 0;
    this.timeProgress = 0;
    this.tickProgress = 0;
    this.sProgress = 0;
    this.progressComplete =  false;

  }

  ngOnInit() {
    // console.log('film name from showings page should appear below');
    // this.apiService.bookingSubject.subscribe(
    //   res => this.filmName = res
    //   //data => this.filmName = data
    //   )
    this.apiService.getLocations()
      .subscribe(
         locations => this.venues = locations
      );
    this.filmName = localStorage.getItem('filmName');
  }

  addToOrder(){
    this.showBasket = true;
  }

  resetAdults(){
    this.adultTicketQuantity = 0;
    return this.checkTotalTickets();
  }

  resetKids(){
    this.kidsTicketQuantity = 0;
    return this.checkTotalTickets()
  }

  resetSeniors(){
    this.seniorTicketQuantity = 0;
    return this.checkTotalTickets()
  }

  checkVProgress(v){
    {(v.value == null) ? this.vProgress = 20 : this.vProgress = 0}
    return this.progressBar();
  }

  checkDProgress(d){
    {(d.value == null) ? this.dProgress = 20 : this.dProgress = 0}
    return this.progressBar();
  }

  checkTimeProgress(t){
    {(t.value == null) ? this.timeProgress = 20 : this.timeProgress = 0}
    return this.progressBar();
  }

  checkTotalTickets(){
    this.totalTicketQuantity = this.adultTicketQuantity + this.kidsTicketQuantity + this.seniorTicketQuantity;
    return this.checkTickProgress();
  }

  checkTickProgress(){
    {(this.totalTicketQuantity == 0) ? this.tickProgress = 0 : this.tickProgress = 20}
    return this.progressBar();
  }

  checkSProgress(s){
    {s.value == null ? this.sProgress = 20 : this.sProgress = 0}
    return this.progressBar();
  }

  progressBar(){
    this.totalProgress = this.vProgress + this.dProgress + this.timeProgress + this.tickProgress + this.sProgress;
    return this.checkProgressComplete();
  }

  checkProgressComplete(){
    {(this.totalProgress == 100) ? this.progressComplete = true : this.progressComplete = false}
  }

};

interface Venue{
  id: number;
  location: string;
  lat: number;
  lng: number;
}