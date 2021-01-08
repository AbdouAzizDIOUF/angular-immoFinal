import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AppartementService} from '../../services/appartement.service';

// @ts-ignore
@Component({
  selector: 'grid-full-width',
  templateUrl: './AppartementFullWidth.component.html',
  styleUrls: ['./AppartementFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppartementFullWidthComponent implements OnInit{

    public appartements: any;

                  
   constructor(public router: Router, public appartementService: AppartementService ){}

   ngOnInit(){
       this.getAppartements();
   }

   public getAppartements(){
        this.appartementService.getAppartements()
            .subscribe(data=>{
                //console.log(data._embedded.appartements);
                // @ts-ignore
                console.log(data._embedded);
                this.appartements = data;
            }, err=>{
                console.log(err);
            })
   }

    onAppartementDetail(app:any) {
        console.log(app);
        let url=btoa(app._links.appartement.href);
        console.log(url);
        this.router.navigateByUrl("biens/detail/appartement/"+url);
    }

}
