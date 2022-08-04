import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bien} from './model/bien';
import {Appartement} from './model/appartement';
import {Client} from './model/client';
import {Bureau} from './model/bureau';
import {Villa} from './model/villa';
import {Terrain} from './model/terrain';
import {Contrat} from './model/contrat';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //public host:string = "http://immo-agence.fr:8888";

  public host:string = "http://localhost:8888";

  constructor(private http: HttpClient) { }


  /**
   * Obtnenir le lien du fournisseur d'api
   *
   */
  public getRessource(url){
    return this.http.get(this.host+url);
  }

  public getRessourceByBien(url){
    return this.http.get(url);
  }

  public deleteRessource(url){
      console.log(url);
      return this.http.delete(this.host+url);
  }

  public getBien(url):Observable<Object>
  {
    return this.http.get<Object>(url);
  }

  public getAppartement(url):Observable<Appartement>
  {
    return this.http.get<Appartement>(url);
  }

  public getBureau(url):Observable<Bureau>
  {
    return this.http.get<Bureau>(url);
  }

  public getVilla(url):Observable<Villa>
  {
    return this.http.get<Villa>(url);
  }

  public getTerrain(url):Observable<Terrain>
  {
    return this.http.get<Terrain>(url);
  }

  public getContrat(url):Observable<Contrat>
  {
    return this.http.get<Contrat>(url);
  }

  public getClient(url):Observable<Client>
  {
    return this.http.get<Client>(url);
  }





  /**
   * upload d'image
   *
   * @param file
   * @param id
   */
  uploadPhotoProduct(file: any, id: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.host+'/uploadPhoto/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
