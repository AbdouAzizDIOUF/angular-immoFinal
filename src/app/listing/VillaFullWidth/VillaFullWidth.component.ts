import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {BureauService} from '../../services/bureau.service';
import { VillaService } from 'src/app/services/villa.service';

// @ts-ignore
@Component({
  selector: 'grid-full-width',
  templateUrl: './VillaFullWidth.component.html',
  styleUrls: ['./VillaFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VillaFullWidthComponent implements OnInit{

    public villas: any;


    constructor(public router: Router, public villaService: VillaService ){}

    ngOnInit(){
        this.getVillas();
    }

    public getVillas(){
        this.villaService.getVillas()
            .subscribe(data=>{
                //console.log(data._embedded.appartements);
                // @ts-ignore
                console.log(data._embedded);
                this.villas = data;
            }, err=>{
                console.log(err);
            })
    }

    onVillaDetail(bur:any) {
        console.log(bur);
        let url=btoa(bur._links.villa.href);
        console.log(url);
        this.router.navigateByUrl("biens/detail/villa/"+url);
    }
}
