import { Routes } from '@angular/router';

import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { ListingDetailOneComponent } from './ListingDetailOne/ListingDetailOne.component';

export const ListingRoutes: Routes = [

    //{path: 'list/full-width', component: ListFullWidthComponent},
    {path: 'appartement', component: GridFullWidthComponent},
    {path: 'bureau', component: GridFullWidthComponent},
    {path: 'studio', component: GridFullWidthComponent},
    {path: 'parcelle', component: GridFullWidthComponent},
    {path: 'villa', component: GridFullWidthComponent},

    {path: 'detail/version1', component: ListingDetailOneComponent},


    {path: 'list/appartement', component: ListFullWidthComponent},
    {path: 'list/bureau', component: ListFullWidthComponent},
    {path: 'list/studio', component: ListFullWidthComponent},
    {path: 'list/parcelle', component: ListFullWidthComponent},
    {path: 'list/villa', component: ListFullWidthComponent},


];


