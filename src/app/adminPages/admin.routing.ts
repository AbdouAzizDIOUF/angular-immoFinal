import { Routes } from '@angular/router';

import { AdminDashboardlComponent } from './Dashboard/AdminDashboard.component';
import { MessagesComponent } from './Messages/Messages.component';
import { BookingsComponent } from './Bookings/Bookings.component';
import { ReviewsComponent } from './Reviews/Reviews.component';
import { BookmarksComponent } from './Bookmarks/Bookmarks.component';
import { ListComponent } from './List/List.component';
import { AddListComponent } from './AddList/AddList.component';

export const AdminRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'dashboard',
      component: AdminDashboardlComponent
    },
    {
      path: 'contrats',
      component: MessagesComponent
    },
    {
      path: 'paies',
      component: BookingsComponent
    },
    {
      path: 'contacts',
      component: ReviewsComponent
    },
    {
      path: 'clients',
      component: BookmarksComponent
    },
    /*{
      path: 'list',
      component: ListComponent
    },*/
    {
      path: 'add-list',
      component: AddListComponent
    }
];
