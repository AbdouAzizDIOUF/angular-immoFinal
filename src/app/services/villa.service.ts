import { Injectable } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Appartement} from '../model/appartement';
import {Observable} from 'rxjs';
import {Villa} from '../model/villa';
import {Terrain} from '../model/terrain';

@Injectable({
  providedIn: 'root'
})


export class VillaService {

  public vhost = "http://immo-agence.fr:8888/villas";
  constructor(private globalService: GlobalService, private http: HttpClient) { }

  public getVillas(){
    return this.http.get(this.vhost);
  }

  public createVilla(villa: Villa): Observable<Object>{
    return this.http.post(`${this.vhost}`, villa);
  }

  deleteVilla(id: number): Observable<Object>{
    return this.http.delete(`${this.vhost}/${id}`);
  }

  public getVillaById(id): Observable<Object>{
    return this.http.get(`${this.vhost}/${id}`);
  }

  updateVilla(id: number, villa: Villa): Observable<Object>{
    return this.http.put(`${this.vhost}/${id}`, villa);
  }

  uploadPhotoVilla1(file: any, idProduct: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/vil/uploadPhoto1/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoVilla2(file: any, idProduct: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/vil/uploadPhoto2/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoVilla3(file: any, idProduct: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/vil/uploadPhoto3/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoVilla4(file: any, idProduct: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/vil/uploadPhoto4/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getGlobalResource(){
    return this.globalService;
  }
}
