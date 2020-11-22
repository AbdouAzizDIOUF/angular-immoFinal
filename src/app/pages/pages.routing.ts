import { Routes } from '@angular/router';

import { BookingComponent } from './Booking/Booking.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';

export const PagesRoutes: Routes = [

    {
      path: 'contact-us',
      component: ContactComponent
    },
    {
      path: 'booking',
      component: BookingComponent
    },
    {
      path: 'about-us',
      component: AboutComponent
    },
    {
        path: '',
        component: ContactComponent
    }
 ];

