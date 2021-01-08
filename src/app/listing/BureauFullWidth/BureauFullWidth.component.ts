import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AppartementService} from '../../services/appartement.service';
import { BureauService } from 'src/app/services/bureau.service';

// @ts-ignore
@Component({
  selector: 'grid-full-width',
  templateUrl: './BureauFullWidth.component.html',
  styleUrls: ['./BureauFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BureauFullWidthComponent implements OnInit{

    public bureaux: any;


    constructor(public router: Router, public bureauService: BureauService ){}

    ngOnInit(){
        this.getBureaux();
    }

    public getBureaux(){
        this.bureauService.getBurreaus()
            .subscribe(data=>{
                //console.log(data._embedded.appartements);
                // @ts-ignore
                console.log(data._embedded);
                this.bureaux = data;
            }, err=>{
                console.log(err);
            })
    }

    onBureauDetail(bur:any) {
        console.log(bur);
        let url=btoa(bur._links.bureau.href);
        console.log(url);
        this.router.navigateByUrl("biens/detail/bureau/"+url);
    }
}
