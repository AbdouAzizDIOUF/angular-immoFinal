import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { BookingComponent } from './Booking/Booking.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';
import { GlobalModule } from '../globalFrontendComponents/global.module';
import { PagesRoutes } from './pages.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonespaceComponent} from './Mon espace/Monespace.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPayPalModule } from 'ngx-paypal';




const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    GlobalModule,
    DropzoneModule,
    NgbModule,
    NgxPayPalModule,
    RouterModule.forChild(PagesRoutes),
  ],
  declarations: [

    ContactComponent,
    AboutComponent,
    BookingComponent,
    MonespaceComponent,
  ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})

export class PagesModule {}
