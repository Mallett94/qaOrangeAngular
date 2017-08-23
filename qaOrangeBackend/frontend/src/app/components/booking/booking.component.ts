import { Component } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent  {
 
  filmName: string;
  location: string;
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
  

  constructor(){
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