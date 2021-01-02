import {Injectable, OnInit} from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BienService{

  public url = "/biens/"

  constructor(public globalService: GlobalService,private http: HttpClient) { }


  getBiens(){
    return this.globalService.getRessource(this.url);
  }

  getSupprimeBien(id){
    console.log(this.globalService.host+this.url+id);
    return this.http.delete(this.globalService.host+this.url+id);
  }

}
