import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParticulierService } from './particulier.service';
import { EntrepriseService } from './entreprise.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
      private http: HttpClient,
      private particulierService: ParticulierService,
      private entrepriseService: EntrepriseService
  ) { }


  getParticulierService(){
    return this.particulierService;
  }

  getEntrepriseService(){
    return this.entrepriseService;
  }
}
