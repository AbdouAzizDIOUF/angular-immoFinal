import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  //public phost: string = "http://immo-agence.fr:8888/particuliers";

  public phost: string = "http://localhost:8888/particuliers/";

  constructor(private http: HttpClient) { }

  public getInformationPersonnel(id:string){
      return this.http.get(this.phost+id);
  }

  public getClients(){
    return this.http.get(this.phost);
  }



}
