import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AppartementService} from '../../services/appartement.service';
import {Rechercher} from '../../model/rechercher';

// @ts-ignore
@Component({
  selector: 'grid-full-width',
  templateUrl: './AppartementFullWidth.component.html',
  styleUrls: ['./AppartementFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppartementFullWidthComponent implements OnInit{

    public appartements: any;

    public bienRechercher: any;

    public rechercheBien: Rechercher = new Rechercher();

   constructor(public router: Router, public appartementService: AppartementService){}

   ngOnInit(){
       this.getAppartements();
   }

   public getAppartements(){
       this.appartements = null;
        this.appartementService.getAppartementsDispo()
            .subscribe(data=>{
                // @ts-ignore
                console.log(data._embedded);
                this.appartements = data;
            }, err=>{
                console.log(err);
            })
   }

     getBienRechercher(){
        this.appartements = null;
        if(this.rechercheBien.adresse==null || this.rechercheBien.status == null ||  this.rechercheBien.price == null ){
            this.appartementService.rechercheBien(this.rechercheBien.adresse, this.rechercheBien.status, this.rechercheBien.price)
                .subscribe(data => {
                    // @ts-ignore
                    console.log(data._embedded);
                    this.appartements = data;
                }, err => {
                    console.log(err);
                })
        }else if (this.rechercheBien.adresse != null && (this.rechercheBien.status == null &&  this.rechercheBien.price == null) ) {
            this.appartementService.rechercheBienAdresse(this.rechercheBien.adresse)
                .subscribe(data => {
                    // @ts-ignore
                    console.log(data._embedded);
                    this.appartements = data;
                }, err => {
                    console.log(err);
                })
        }else if (this.rechercheBien.status != null && (this.rechercheBien.adresse == null && this.rechercheBien.price == null)){
            this.appartementService.rechercheBienStatus(this.rechercheBien.status)
                .subscribe(data => {
                    // @ts-ignore
                    console.log(data._embedded);
                    this.appartements = data;
                }, err => {
                    console.log(err);
                })
        }else if ((this.rechercheBien.adresse == null && this.rechercheBien.status == null) &&  this.rechercheBien.price != null){
            this.appartementService.rechercheBienPrice(this.rechercheBien.price)
                .subscribe(data => {
                    // @ts-ignore
                    console.log(data._embedded);
                    this.appartements = data;
                }, err => {
                    console.log(err);
                })
        }{
            this.appartementService.rechercheBien(this.rechercheBien.adresse, this.rechercheBien.status, this.rechercheBien.price)
                .subscribe(data => {
                    // @ts-ignore
                    console.log(data._embedded);
                    this.appartements = data;
                }, err => {
                    console.log(err);
                })
        }
    }

    onAppartementDetail(app:any) {
        console.log(app);
        let url=btoa(app._links.appartement.href);
        console.log(url);
        this.router.navigateByUrl("biens/detail/appartement/"+url);
    }

}
