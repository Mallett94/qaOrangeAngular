import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../components/test/user.component';
import { ShowingsComponent } from '../components/showings/showings.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
