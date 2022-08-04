import { Injectable } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bureau} from '../model/bureau';

@Injectable({
  providedIn: 'root'
})
export class BureauService {

  //public bhost = "http://immo-agence.fr:8888/bureaus";
  public bhost = "http://localhost:8888/bureaus";

  constructor(private globalService: GlobalService, private http: HttpClient) { }

  public getBurreaus() {
    return this.http.get(this.bhost);
  }

  public getBurreausDispo() {
    return this.http.get(this.bhost+"/search/bureauDispo");
  }

  public createBureau(bureau: Bureau): Observable<Object>{
    return this.http.post(`${this.bhost}`, bureau);
  }

  deleteBureau(id: number): Observable<Object>{
    return this.http.delete(`${this.bhost}/${id}`);
  }

  public getBureauById(id): Observable<Object>{
    return this.http.get(`${this.bhost}/${id}`);
  }

  updateBureau(id: number, bureau: Bureau): Observable<Object>{
    return this.http.put(`${this.bhost}/${id}`, bureau);
  }

  uploadPhotoBureau1(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/bur/uploadPhoto1/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoBureau2(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/bur/uploadPhoto2/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoBureau3(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/bur/uploadPhoto3/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoBureau4(file: any, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/bur/uploadPhoto4/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getGlobalResource(){
    return this.globalService;
  }

  public url = "http://immo-agence.fr:8888/bureaus/search/trouveBureau?"
  //public url = "http://localhost:8888/bureaus/search/trouveBureau?"
  public rechercheBien(a,s,p){
    return this.http.get(this.url+"adresse=+"+a+"&status="+s+"&price="+p);
  }
}
