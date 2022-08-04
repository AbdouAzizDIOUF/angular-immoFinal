import { Routes } from '@angular/router';

import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { ListingDetailOneComponent } from './ListingDetailOne/ListingDetailOne.component';
import {BureauFullWidthComponent} from './BureauFullWidth/BureauFullWidth.component';
import {AppartementFullWidthComponent} from './AppartementFullWidth/AppartementFullWidth.component';
import {TerrainFullWidthComponent} from './TerrainFullWidth/TerrainFullWidth.component';
import {VillaFullWidthComponent} from './VillaFullWidth/VillaFullWidth.component';
import {StudioFullWidthComponent} from './StudioFullWidth/StudioFullWidth.component';
import {AppartementDetailOneComponent} from './AppartementDetailOne/AppartementDetailOne.component';
import {BureauDetailOneComponent} from './BureauDetailOne/BureauDetailOne.component';
import {TerrainDetailOneComponent} from './TerrainDetailOne/TerrainDetailOne.component';
import {VillaDetailOneComponent} from './VillaDetailOne/VillaDetailOne.component';
import {StudioDetailOneComponent} from './StudioDetailOne/StudioDetailOne.component';

export const ListingRoutes: Routes = [

    {path: '', component: AppartementFullWidthComponent},
    {path: 'appartement', component: AppartementFullWidthComponent},
    {path: 'bureau', component: BureauFullWidthComponent},
    {path: 'studio', component: StudioFullWidthComponent},
    {path: 'parcelle', component: TerrainFullWidthComponent},
    {path: 'villa', component: VillaFullWidthComponent},


    {path: 'studio', component: GridFullWidthComponent},

    {path: 'detail/version1', component: ListingDetailOneComponent},

    {path: 'list/appartement', component: ListFullWidthComponent},

    {path: 'detail/appartement/:url', component: AppartementDetailOneComponent},
    {path: 'detail/bureau/:url', component: BureauDetailOneComponent},
    {path: 'detail/studio/:url', component: StudioDetailOneComponent},
    {path: 'detail/parcelle/:url', component: TerrainDetailOneComponent},
    {path: 'detail/villa/:url', component: VillaDetailOneComponent},


];


