import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NouisliderModule } from 'ng2-nouislider';

import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { ListingDetailOneComponent } from './ListingDetailOne/ListingDetailOne.component';
import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SmallGallerySliderComponent } from '../globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component';
import { SidebarLayoutOneComponent } from './SidebarLayoutOne/SidebarLayoutOne.component';

import { ListingRoutes } from './listing.routing';
import { GlobalModule } from '../globalFrontendComponents/global.module';
import {FormsModule} from '@angular/forms';
import {BureauFullWidthComponent} from './BureauFullWidth/BureauFullWidth.component';
import {AppartementFullWidthComponent} from './AppartementFullWidth/AppartementFullWidth.component';
import {VillaFullWidthComponent} from './VillaFullWidth/VillaFullWidth.component';
import {TerrainFullWidthComponent} from './TerrainFullWidth/TerrainFullWidth.component';
import {StudioFullWidthComponent} from './StudioFullWidth/StudioFullWidth.component';
import {AppartementDetailOneComponent} from './AppartementDetailOne/AppartementDetailOne.component';
import {BureauDetailOneComponent} from './BureauDetailOne/BureauDetailOne.component';
import {TerrainDetailOneComponent} from './TerrainDetailOne/TerrainDetailOne.component';
import {VillaDetailOneComponent} from './VillaDetailOne/VillaDetailOne.component';
import {StudioDetailOneComponent} from './StudioDetailOne/StudioDetailOne.component';


@NgModule({
    imports: [
        CommonModule,
        GlobalModule,
        SlickCarouselModule,
        NouisliderModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
        RouterModule.forChild(ListingRoutes),
        FormsModule,
    ],
  declarations: [ 
     ListFullWidthComponent,
     GridFullWidthComponent,
     ListingDetailOneComponent,
     GallerySliderComponent,
     SmallGallerySliderComponent,
     SidebarLayoutOneComponent,
     BureauFullWidthComponent,
     AppartementFullWidthComponent,
     VillaFullWidthComponent,
     TerrainFullWidthComponent,
     StudioFullWidthComponent,
     AppartementDetailOneComponent,
     BureauDetailOneComponent,
     TerrainDetailOneComponent,
     VillaDetailOneComponent,
     StudioDetailOneComponent,
   ]
})

export class ListingModule {}
