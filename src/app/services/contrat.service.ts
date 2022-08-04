import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { ContratForm } from '../model/contrat-form';
import {ContratFormClientBien} from '../model/contrat-form-client-bien';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ContratService{

   // public cbhost = "http://immo-agence.fr:8888/contrats/";
   public cbhost = "http://localhost:8888/contrats/";

    //public cthost = "http://immo-agence.fr:8888/contratClientBiens/search/contratType?key=";
   public cthost = "http://localhost:8888/contratClientBiens/search/contratType?key=";

   //public chost = "http://immo-agence.fr:8888/contratClientBiens/"
   public chost = "http://localhost:8888/contratClientBiens/";

  public CBBhoste = "http://localhost:8888/contratClientBiens/";

  //private  cbchost = "http://immo-agence.fr:8888/contrats/approuveContrat";
  private  cbchost = "http://localhost:8888/contrats/approuveContrat";


  //private  cbchost = "http://immo-agence.fr:8888/contrats/approuveContrat";
  private  cbdhost = "http://localhost:8888/contrats/approuveContrat";

  private url: String = "/particuliers/"


  constructor(private http: HttpClient, private globalService: GlobalService){}

  public createContrat(contratForm: ContratForm){
      return this.http.post(`${this.cbhost+"appartement"}`, contratForm);
  }

  public getContratById(id: number){
     return this.http.get(this.chost+id);
  }

  public getContratParticulierByClientID(id){
    return this.globalService.getRessource(this.url+id+"/contratClientBiens");
  }

  public getContratByType(type){
    return this.http.get(this.cthost+type);
  }

  public getClientByContratId(id){
    return this.http.get(this.chost+id+"/client");
  }

  public getBienByContratId(id){
      return this.http.get(this.chost+id+"/bien");
  }

  public onApprouveContrat(contratFormClientBien: ContratFormClientBien):Observable<Object>{
      return this.http.post(`${this.cbchost}`,contratFormClientBien )
  }

  public onRejetteContrat(id: number){
    return this.http.delete(this.chost+id);
  }

  public onRejetteContrat2(id: number):Observable<Object>{
    return this.http.post(`${this.cbhost+"rejeteContrat/"+id}`, id);
  }
}
