import { Injectable } from '@angular/core';
import {KeycloakSecurityService} from './keycloak-security.service';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService {

  constructor(private keycloakService: KeycloakSecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request http intercept ...");
    if (!this.keycloakService.kc.authenticated){
      return next.handle(req);
    }
    let request = req.clone({
      setHeaders:{
        Authorization:'Bearer '+this.keycloakService.kc.token
      }
    });
    return next.handle(request);
  }
}
