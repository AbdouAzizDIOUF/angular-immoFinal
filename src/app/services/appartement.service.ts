import { Injectable } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Appartement} from '../model/appartement';
import {Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  appartement: Appartement = new Appartement();

  public appartements: any;
  //public ahost = "http://immo-agence.fr:8888/appartements";
  public ahost = "http://localhost:8888/appartements";

  constructor(private globalService: GlobalService, private http: HttpClient) { }

  public getAppartements(){
    return this.http.get(this.ahost);
  }

  public getAppartementsDispo(){
    return this.http.get(this.ahost+"/search/appartementDispo");
  }

  public createAppartement(appartement: Appartement): Observable<Object>{
    return this.http.post(`${this.ahost}`, appartement);
  }

  deleteAppartement(id: number): Observable<Object>{
    return this.http.delete(`${this.ahost}/${id}`);
  }

  getAppartementById(id: number): Observable<Object>{
    return this.http.get(`${this.ahost}/${id}`);
  }

  updateAppartement(id: number, appartement: Appartement): Observable<Object>{
    return this.http.put(`${this.ahost}/${id}`, appartement);
  }

  uploadPhotoAppartement1(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/app/uploadPhoto1/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoAppartement2(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/app/uploadPhoto2/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoAppartement3(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/app/uploadPhoto3/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoAppartement4(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/app/uploadPhoto4/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getGlobalResource(){
    return this.globalService;
  }


  public url = "http://immo-agence.fr:8888/appartements/search/trouveAppartement?"
  //public url = "http://localhost:8888/appartements/search/trouveAppartement?"
  public rechercheBien(a,s,p){
    return this.http.get(this.url+"adresse=+"+a+"&status="+s+"&price="+p);
  }

  public url2 = "http://immo-agence.fr:8888/appartements/search/trouveAppartement2?"
  //public url2 = "http://localhost:8888/appartements/search/trouveAppartement2?"
  public rechercheBien2(a,s,p){
    return this.http.get(this.url+"adresse=+"+a+"&status="+s+"&price="+p);
  }

  public url3 = "http://immo-agence.fr:8888/appartements/search/trouveAppartementStatus?"
  //public url3 = "http://localhost:8888/appartements/search/trouveAppartementStatus?"
  public rechercheBienStatus(s){
    return this.http.get(this.url+"status=+"+s);
  }

  public url4 = "http://immo-agence.fr:8888/appartements/search/trouveAppartementAdresse?"
  //public url4 = "http://localhost:8888/appartements/search/trouveAppartementAdresse?"
  public rechercheBienAdresse(s){
    return this.http.get(this.url+"adresse=+"+s);
  }

  public url5 = "http://immo-agence.fr:8888/appartements/search/trouveAppartementPrice?"
  //public url5 = "http://localhost:8888/appartements/search/trouveAppartementPrice?"
  public rechercheBienPrice(s){
    return this.http.get(this.url+"price=+"+s);
  }
}
