import { Routes } from '@angular/router';

import { BookingComponent } from './Booking/Booking.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';
import { MonespaceComponent } from './Mon espace/Monespace.component';
import {AuthGuardService} from '../services/auth-guard.service';

export const PagesRoutes: Routes = [

    {path: '', component: ContactComponent},
    {path: 'contact-us', component: ContactComponent},
    {path: 'about-us', component: AboutComponent},

    {
        path: 'paiement',
        component: BookingComponent,
        canActivate: [AuthGuardService],
        data: {roles: ['CLIENT']}
    },

    {
        path: 'monespace',
        component: MonespaceComponent,
        canActivate: [AuthGuardService],
        data: {roles: ['CLIENT']},
    },

 ];

