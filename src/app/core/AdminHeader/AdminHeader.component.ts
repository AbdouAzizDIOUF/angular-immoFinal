import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AdminMenuItems } from './admin-menu-items';
import {KeycloakSecurityService} from '../../services/keycloak-security.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './AdminHeader.component.html',
  styleUrls: ['./AdminHeader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHeaderComponent implements OnInit {

   constructor(public adminMenuItems: AdminMenuItems, public Keycloak: KeycloakSecurityService){}

   ngOnInit(){}

   ngAfterViewInit()
   {
   }
}
