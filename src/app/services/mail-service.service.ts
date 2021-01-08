import { Injectable} from '@angular/core';
import { MailModel } from '../model/mail-model';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService{

    private  mail: string = "http://immo-agence.fr:8888/mail/send";
   // private  mail: string = "http://localhost:8888/mail/send";

    constructor(private httpClient: HttpClient, public globalService: GlobalService) {
    }


    public envoieEmail(mail: MailModel): Observable<Object>{
        return this.httpClient.post(`${this.mail}`, mail);
    }


}
