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
     SidebarLayoutOneComponent
   ]
})

export class ListingModule {}
