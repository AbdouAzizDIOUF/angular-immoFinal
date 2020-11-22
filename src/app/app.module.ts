import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';

import { HeaderComponent } from './core/Header/Header.component';
import { FooterComponent } from './core/Footer/Footer.component';
import { MenuComponent } from './core/Menu/Menu.component';

import { MenuItems } from './core/Menu/menu-items';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };

@NgModule({
  declarations: [
      AppComponent,
      FrontendPanelLayoutComponent,
      HeaderComponent,
      FooterComponent,
      MenuComponent

  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      DropzoneModule,
      RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
      HttpClientModule
  ],
  providers: [
      MenuItems
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
