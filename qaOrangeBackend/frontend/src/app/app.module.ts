import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/test/user.component';
import { ShowingsComponent } from './components/showings/showings.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { routing } from './routing/app.routing';

import {AgmCoreModule} from '@Agm/core'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBQ8hQes_8os5LLPhX0Qogvup093EatmTc'
  })],
  declarations: [ AppComponent, UserComponent, ShowingsComponent, AboutComponent, ContactComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
