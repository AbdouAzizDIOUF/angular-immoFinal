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

  public onLogin() {
    this.kc.login();
  }

  public onLogout() {
    this.kc.logout();
  }

  public onChangePassword() {
    this.kc.getKeycloakInstance().accountManagement();
  }

  public isAuthenticated(): boolean{
    return this.kc.getKeycloakInstance().authenticated;
  }

  public isAppManager(): boolean {
    return this.kc.getKeycloakInstance.hasRealmRole("app-manager");
  }

  public userDetail(value:string){
    return this.kc.getKeycloakInstance().tokenParsed[value];
  }

  public getUserID(){
    return this.kc.getKeycloakInstance().subject;
  }

  public getKeycloakInstance(){
    return this.kc.getKeycloakInstance();
  }
}
