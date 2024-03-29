import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-detail-one',
  templateUrl: './StudioDetailOne.component.html',
  styleUrls: ['./StudioDetailOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudioDetailOneComponent implements OnInit{

  lat = -34.397;
  lng = 150.644;

   headerGallerySlider : any =
       [
           {image: 'assets/images/dp-1.jpg'},
           {image: 'assets/images/dp-5.jpg'},
           {image: 'assets/images/dp-3.jpg'},
           {image: 'assets/images/dp-4.jpg'}
       ]

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {
      
   }
}
