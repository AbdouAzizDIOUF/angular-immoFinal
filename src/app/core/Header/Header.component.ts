import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {KeycloakSecurityService} from '../../services/keycloak-security.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

   private _router: Subscription;
   url: string;

   isFixedClass : boolean = false; 

   constructor(private router: Router, private keycloakSecurityService: KeycloakSecurityService){}

   ngOnInit(){
        console.log(this.keycloakSecurityService.getKeycloakInstance())
        console.log(this.keycloakSecurityService.getKeycloakInstance().subject)
   }

   isFixedHeader()
   {
      if (this.url === '/listing/half-map/grid' || this.url === '/listing/half-map/list') {
         return true;
       } else {
         return false
       }
   }

   ngAfterViewInit()
   {
     
   }

    onLogin() {
        this.keycloakSecurityService.onLogin();
    }

    onLogout() {
       this.keycloakSecurityService.onLogout();
    }

    onChangePassword() {
        this.keycloakSecurityService.onChangePassword();
    }

    isAuthenticated(): boolean{
        return this.keycloakSecurityService.isAuthenticated();
    }

    isAppManager(): boolean {
        return this.keycloakSecurityService.isAppManager();
    }

    userDetail(value:string){
        return this.keycloakSecurityService.userDetail(value);
    }
}
