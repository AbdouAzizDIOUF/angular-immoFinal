import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ParticulierService } from 'src/app/services/particulier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-bookmarks',
  templateUrl: './Bookmarks.component.html',
  styleUrls: ['./Bookmarks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookmarksComponent implements OnInit{

    public particuliers: any;
    public entreprises: any;

    public listContratsByClient: any;
    clientOne: Object;

   constructor(private particulierService: ParticulierService, private router: Router){}

   ngOnInit(){
       this.getParticulers();
   }

   ngAfterViewInit()
   {

      
   }

    getParticulers() {
       this.listContratsByClient = null;
        this.entreprises=null;
        this.particulierService.getClients()
            .subscribe(data =>{
                this.particuliers = data;
            }, error => console.log(error));

    }

    getEntreprises() {

    }

    consulteClient(id: string) {

    }

    consulteContrat(id: string)
    {
       this.particuliers = null;

        this.particulierService.getInformationPersonnel(id)
            .subscribe(data =>{
                this.clientOne = data;
            }, error => console.log(error));
       this.particulierService.listContratByClient(id)
           .subscribe(data=>{
               this.listContratsByClient = data;
           }, error => {
               console.log(error);
           });

    }

    consulterPaiementByContrat(id: any) {

    }

    contacterClient(id: string){

    }
}
