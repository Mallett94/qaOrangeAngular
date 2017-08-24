import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/test/user.component';
import { ShowingsComponent } from './components/showings/showings.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import  { PaypalComponent } from './components/paypal/paypal.component';
import { FilmsCardComponent} from './components/films-card/films-card.component';

import { routing } from './routing/app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    UserComponent,
    ShowingsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    BookingComponent,
    FooterComponent,
    HomePageComponent,
    FilmsCardComponent,
    PaypalComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
