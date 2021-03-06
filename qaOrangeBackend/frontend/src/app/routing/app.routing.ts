//nathan
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../components/test/user.component';
import { ShowingsComponent } from '../components/showings/showings.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BookingComponent } from '../components/booking/booking.component';
import { HomePageComponent} from '../components/homepage/homepage.component';
import { ForumComponent } from '../components/forum/forum.component';
import { ThreadComponent } from '../components/forum/thread.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'showings',
    component: ShowingsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'thread/:id',
    component: ThreadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
