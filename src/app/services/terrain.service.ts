import { Injectable } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Appartement} from '../model/appartement';
import {Observable} from 'rxjs';
import {Terrain} from '../model/terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  //public thost = "http://immo-agence.fr:8888/terrains";
  public thost = "http://localhost:8888/terrains";

  constructor(private globalService: GlobalService, private http: HttpClient) { }

  public getTerrain(){
    return this.http.get(this.thost);
  }

  public getTerrainsDispo(){
    return this.http.get(this.thost+"/search/terrainDispo");
  }

  public createTerrain(terrain: Terrain): Observable<Object>{
    return this.http.post(`${this.thost}`, terrain);
  }

  deleteTerrain(id: number): Observable<Object>{
    return this.http.delete(`${this.thost}/${id}`);
  }

  public getTerrainById(id):Observable<Object>{
    return this.http.get(`${this.thost}/${id}`);
  }

  updateTerrain(id: number, terrain: Terrain): Observable<Object>{
    return this.http.put(`${this.thost}/${id}`, terrain);
  }

  uploadPhotoTerrain1(file: any, id: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/ter/uploadPhoto1/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoTerrain2(file: any, id: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/ter/uploadPhoto2/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoTerrain3(file: any, id: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/ter/uploadPhoto3/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoTerrain4(file: any, id: any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log(formdata);
    const req = new HttpRequest('POST', this.globalService.host+'/ter/uploadPhoto4/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getGlobalResource(){
    return this.globalService;
  }

  public url = "http://immo-agence.fr:8888/terrains/search/trouveTerrain?"
  //public url = "http://localhost:8888/terrains/search/trouveTerrain?"
  public rechercheBien(a,s,p){
    return this.http.get(this.url+"adresse=+"+a+"&status="+s+"&price="+p);
  }
}
