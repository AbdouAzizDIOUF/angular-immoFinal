import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {BienService} from '../../services/bien.service';

@Component({
  selector: 'dashboard-one',
  templateUrl: './DashboardOne.component.html',
  styleUrls: ['./DashboardOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOneComponent implements OnInit{

	bannerTitle: string = 'Trouver des attractions à proximité';
	//bannerDesc : string = 'Expolore top-rated attractions, activities and more';
	bannerDesc : string = '';
	bannerImage: string = 'assets/images/main-search-background-01.jpg';

	popularCategoriesTitle : string = 'Catégories populaires';
	popularCategoriesDesc  : string = 'Parcourir les catégories les plus désirables';

	categories : any = [
								{
									title: 'appart',
									subTitle : '64 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-bed'
								},
								{
									title: 'appart',
									subTitle : '14 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-shopping-bag'
								},
								{
									title: 'appart',
									subTitle : '67 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-calendar'
								},
								{
									title: 'appart',
									subTitle : '27 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-glass'
								},
								{
									title: 'appart',
									subTitle : '22 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-glass'
								},
								{
									title: 'appart',
									subTitle : '127 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-glass'
								}
							];


	mostVisitedPlacesTitle : string = 'Nous sommes leader du domaine';
	mostVisitedPlacesDesc  : string = 'Découvrez les biens immobiliers les mieux adaptes';


	places : any = [
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
						  {
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
						  },
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},
							{
								badge    : 'Disponible',
								category : 'appart',
								title    : 'Maledy appart',
								address  : '95800, cergy, France',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
							},

						];


	public biens: any;

	constructor(private bienservice: BienService){}

	ngOnInit(){
		this.bienservice.getBiens()
			.subscribe(data => {
				//console.log(data);
				this.biens = data;
			}, error => {
				console.log(error.message);
			})
	}

	ngAfterViewInit()
	{

	}
}
