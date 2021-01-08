import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'grid-full-width',
  templateUrl: './StudioFullWidth.component.html',
  styleUrls: ['./StudioFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudioFullWidthComponent implements OnInit{

    public href: string;

   Data : any = [
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Tom Restaurant',
                        address  : '964 School Street, New York',
                        image    : 'assets/images/most-img-1.jpg',
                        rating   : '5',
                        review   : '(12 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Events',
                        title    : 'Sticky Band',
                        address  : 'Bishop Avenue, New York',
                        rating   : '5',
                        image    : 'assets/images/most-img-2.jpg',
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Hotels',
                        title    : 'Hotel Govendor',
                        address  : '778 Country Street, New York',
                        image    : 'assets/images/most-img-3.jpg',
                        rating   : '5',
                        review   : '(17 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Burger House',
                        address  : '2726 Shinn Street, New York',
                        image    : 'assets/images/most-img-4.jpg',
                        rating   : '5',
                        review   : '(31 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Airport',
                        title    : 'Burger House',
                        address  : '1512 Duncan Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        rating   : '5',
                        review   : '(46 reviews)'
                     },
                     {
                        badge    : 'Now Closed',
                        category : 'Eat & Drink',
                        title    : 'Think Coffee',
                        address  : '215 Terry Lane, New York',
                        image    : 'assets/images/most-img-6.jpg',
                        rating   : '5',
                        review   : '(15 reviews)'
                     }

                  ];
                  
   constructor(public router: Router, ){}

   ngOnInit(){

       this.href = this.router.url;
       console.log(this.href);
       let tabURL = this.href.split('/');
       console.log(tabURL);
       console.log(tabURL[0]);
       console.log(tabURL[1]);
       console.log(tabURL[2]);
       if(tabURL[1]=="biens"){
           console.log("bienvenu dans l'espace reserve au biens");
           if(tabURL[2]=="appartement"){
                console.log("appartement commponent");
           }else if(tabURL[2]=="bureau"){
               console.log("bureau")
           }else if(tabURL[2]=="terrain"){
               console.log("terrain");
           }
       }
   }

   ngAfterViewInit()
   {

   }
}
