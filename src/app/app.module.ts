import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import {KeycloakSecurityService} from './services/keycloak-security.service';
import {AdminPanelLayoutComponent} from './layouts/adminPanel/AdminPanelLayout.component';
import {AdminHeaderComponent} from './core/AdminHeader/AdminHeader.component';
import {AdminSidebarComponent} from './core/AdminSidebar/AdminSidebar.component';
import {AdminMenuItems} from './core/AdminHeader/admin-menu-items';
import {AgmCoreModule} from '@agm/core';
import { PlacesComponent } from './singlecomp/places.component';
import {NgAisModule} from 'angular-instantsearch';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';


// initialisation de la service keycloakSecurity avant la demarrage de l'appli
function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                /* url:"http://immo-agence.fr:8889/auth/",
                realm:"IMMO AGENCE",
                clientId:"AngularImmoApp"*/
                url: 'http://localhost:8889/auth/',
                realm: 'immo-realmTest',
                clientId: 'GuardTest',
            },
            initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri:
                    window.location.origin + '/assets/silent-check-sso.html',
            },
        });
}
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
        MenuComponent,

        AdminPanelLayoutComponent,
        AdminHeaderComponent,
        AdminSidebarComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DropzoneModule,
        RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
        /*AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCtiXPI5QFoDz3lT4LDym2XOZiZszra34c'
        }),*/
        HttpClientModule,
        KeycloakAngularModule,
    ],
    providers: [
        {
            provide:APP_INITIALIZER,
            deps:[KeycloakService],
            useFactory:initializeKeycloak,
            multi:true
        },


        MenuItems,
        AdminMenuItems,
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        }
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
