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
  seats: string;
  showBasket: boolean;
  

  constructor(){
    this.showBasket = false;
    this.adultTicketQuantity = 0;
    this.kidsTicketQuantity = 0;
    this.seniorTicketQuantity = 0;

  }

  addToOrder(){
    this.showBasket = true;
  }

  resetAdults(){
    this.adultTicketQuantity = 0;
  }

  resetKids(){
    this.kidsTicketQuantity = 0;
  }

  resetSeniors(){
    this.seniorTicketQuantity = 0;
  }
  
};