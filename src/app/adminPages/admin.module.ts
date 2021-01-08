import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AdminDashboardlComponent } from './Dashboard/AdminDashboard.component';
import { MessagesComponent } from './Messages/Messages.component';
import { BookingsComponent } from './Bookings/Bookings.component';
import { ReviewsComponent } from './Reviews/Reviews.component';
import { BookmarksComponent } from './Bookmarks/Bookmarks.component';
import { ListComponent } from './List/List.component';
import { AddListComponent } from './AddList/AddList.component';
import { ProfileComponent } from './Profile/Profile.component';

import { AdminRoutes } from './admin.routing';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {PlacesComponent} from '../singlecomp/places.component';
import {NgAisModule} from 'angular-instantsearch';
import {AgmCoreModule} from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };


// @ts-ignore
@NgModule({
  declarations: [
    AdminDashboardlComponent,
    MessagesComponent,
    BookingsComponent,
    ReviewsComponent,
    BookmarksComponent,
    ListComponent,
    AddListComponent,
    ProfileComponent,
    PlacesComponent,
  ],

    imports: [
        CommonModule,
        CommonModule,
        DropzoneModule,
        FormsModule,
        NgbModule,
        RouterModule.forChild(AdminRoutes),
        NgAisModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCtiXPI5QFoDz3lT4LDym2XOZiZszra34c'
        }),
    ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})

export class AdminModule {}
