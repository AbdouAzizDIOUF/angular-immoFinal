import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import * as Keycloak from 'keycloak-js';
import {KeycloakService} from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc: any;

  //public kc:KeycloakInstance;

  constructor(public keycloakService: KeycloakService) {
    if (this.kc==null){
        this.kc = this.keycloakService;
    }
  }

  onLogin() {
    this.kc.login();
  }

  onLogout() {
    this.kc.logout();
  }

  onChangePassword() {
    this.kc.getKeycloakInstance().accountManagement();
  }

  isAuthenticated(): boolean{
    return this.kc.getKeycloakInstance().authenticated;
  }

  isAppManager(): boolean {
    return this.kc.getKeycloakInstance.hasRealmRole("app-manager");
  }

  userDetail(value:string){
    return this.kc.getKeycloakInstance().tokenParsed[value];
  }


}
