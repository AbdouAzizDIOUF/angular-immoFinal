import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppartementService } from 'src/app/services/appartement.service';
import { ContratService } from 'src/app/services/contrat.service';
import {ContratForm} from '../../model/contrat-form';
import {KeycloakSecurityService} from '../../services/keycloak-security.service';
import {PopupMessageComponent} from '../../alets/popup-message/popup-message.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'list-detail-one',
  templateUrl: './AppartementDetailOne.component.html',
  styleUrls: ['./AppartementDetailOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppartementDetailOneComponent implements OnInit{

   public lat : any;
   public lng : any;
   public appartement: any;
   public appartementGaleryImage: any;

   public demandeContrat: boolean;

   public clickDemandeContrat1: boolean= false;

   //public clickDemandeContrat2;

   public contratForm: ContratForm = new ContratForm();

   constructor(
       private route: ActivatedRoute,
       public globalService: GlobalService,
       private appartementService: AppartementService,
       private contratService: ContratService,
       private keycloakSecurityService: KeycloakSecurityService,
       private modalService: NgbModal
       ){}

   ngOnInit(){
        this.getAppartementDetail();
   }


   getAppartementDetail(){
       let url = atob(this.route.snapshot.params.url);
       console.log(url);
       this.globalService.getRessourceByBien(url).subscribe(data=> {
           this.appartement=data;
           this.appartementGaleryImage = [
               {image: this.appartementService.getGlobalResource().host+'/app/photoProduit1/'+this.appartement.id},
               {image: this.appartementService.getGlobalResource().host+'/app/photoProduit2/'+this.appartement.id},
               {image: this.appartementService.getGlobalResource().host+'/app/photoProduit3/'+this.appartement.id},
               {image: this.appartementService.getGlobalResource().host+'/app/photoProduit4/'+this.appartement.id}
           ]
           this.lat = this.appartement.latitude;
           this.lng = this.appartement.longitude;

       }, error => {
           console.log(error);
       });
   }


    onCreateContrat() {
        this.clickDemandeContrat1 = true;
        this.demandeContrat = true;
        if (!this.keycloakSecurityService.isAuthenticated()){
            this.keycloakSecurityService.onLogin();
        }else{
            this.contratForm.idClient = this.keycloakSecurityService.getUserID();
            this.contratForm.idBien = this.appartement.id;
            this.contratForm.typeClient = "particulier";
            this.contratForm.emailClient = this.keycloakSecurityService.userDetail("email");
            this.contratForm.firstName = this.keycloakSecurityService.userDetail("given_name");
            this.contratForm.lastName = this.keycloakSecurityService.userDetail("family_name");
            this.contratService.createContrat(this.contratForm).subscribe(data => {
                this.getAppartementDetail();
                this.clickDemandeContrat1 = true;
                this.contratForm = new ContratForm();
            }, error =>{
                console.log(error);
            })

        }

    }

    open() {
        const modalRef = this.modalService.open(PopupMessageComponent);
        modalRef.componentInstance.name = "";
    }
}
