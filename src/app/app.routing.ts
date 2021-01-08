import { Routes } from '@angular/router';

import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import {AboutComponent} from './pages/About/About.component';
import {ContactComponent} from './pages/Contact/Contact.component';
import {AdminPanelLayoutComponent} from './layouts/adminPanel/AdminPanelLayout.component';
import {AuthGuardService} from './services/auth-guard.service';
import {BookingComponent} from './pages/Booking/Booking.component';
import {MonespaceComponent} from './pages/Mon espace/Monespace.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '',
      component: FrontendPanelLayoutComponent,
      children: [
        {
          path: 'home',
          loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
          path: 'biens',
          loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
        },
        {
          path: 'pages',
          loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
        },
        {
          path: 'about-us', component:AboutComponent
        },
        {
          path: 'contact-us', component:ContactComponent
        },
        {
          path: 'monespace',
          component: MonespaceComponent,
          canActivate: [AuthGuardService]
          /*data: {roles: ['CLIENT']},*/
        },
        {
          path: 'paiement',
          component: BookingComponent,
          canActivate: [AuthGuardService],
          data: {roles: ['CLIENT']},
        },
      ]
    },
    {
      path: 'admin',
      component: AdminPanelLayoutComponent,
      canActivate: [AuthGuardService],
      data: {roles: ['SUPERADMIN']},
      children: [{
        path: '',
        loadChildren: () => import('./adminPages/admin.module').then(m => m.AdminModule)
      }]
    },
];

