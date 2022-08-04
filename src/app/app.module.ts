import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RequestInterceptorService} from "./services/request-interceptor.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PopupMessageComponent } from './alets/popup-message/popup-message.component';
import { PopupConfirmeDemandeComponent } from './alets/popup-confirme-demande/popup-confirme-demande.component';
import { PopupConfirmeDeleteComponent } from './alets/popup-confirme-delete/popup-confirme-delete.component';
import {NgxPayPalModule} from 'ngx-paypal';

// initialisation de la service keycloakSecurity avant la demarrage de l'appli
function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                /*url:"http://localhost:8889/auth/",
                realm:"IMMO-REALM",
                clientId:"angular"*/
                url:"http://localhost:8889/auth/",
                realm:"IMMO-REALM",
                clientId:"angularLocal"
                /*url: "http://immo-agence.fr:8889/auth/",
                realm: "IMMO-REALM",
                clientId: "angular"*/
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
        PopupMessageComponent,
        PopupConfirmeDemandeComponent,
        PopupConfirmeDeleteComponent,
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
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgxPayPalModule,

    ],
    providers: [
        {provide:APP_INITIALIZER, deps:[KeycloakService], useFactory:initializeKeycloak, multi:true},
        /*{provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true},*/// intercepte toutes les requettes emisent


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
