import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../global.service';
import {AppartementService} from '../../services/appartement.service';
import { BureauService } from 'src/app/services/bureau.service';
import {ContratForm} from '../../model/contrat-form';
import {ContratService} from '../../services/contrat.service';
import {KeycloakSecurityService} from '../../services/keycloak-security.service';

@Component({
  selector: 'list-detail-one',
  templateUrl: './BureauDetailOne.component.html',
  styleUrls: ['./BureauDetailOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BureauDetailOneComponent implements OnInit{

    public demandeContrat: boolean;

    public lat : any;
    public lng : any;
    public bureau: any;
    public bureauGaleryImage: any;

    public clickDemandeContrat1=false;

    public contratForm: ContratForm = new ContratForm();

    constructor(
        private route: ActivatedRoute,
        public globalService: GlobalService,
        private bureauService: BureauService,
        private contratService: ContratService,
        private keycloakSecurityService: KeycloakSecurityService
        ){}

    ngOnInit(){
        this.getBureauDetail();
    }


    getBureauDetail(){
        let url = atob(this.route.snapshot.params.url);
        console.log(url);
        this.globalService.getRessourceByBien(url).subscribe(data=> {
            this.bureau=data;
            this.bureauGaleryImage = [
                {image: this.bureauService.getGlobalResource().host+'/bur/photoProduit1/'+this.bureau.id},
                {image: this.bureauService.getGlobalResource().host+'/bur/photoProduit2/'+this.bureau.id},
                {image: this.bureauService.getGlobalResource().host+'/bur/photoProduit3/'+this.bureau.id},
                {image: this.bureauService.getGlobalResource().host+'/bur/photoProduit4/'+this.bureau.id}
            ]
            this.lat = this.bureau.latitude;
            this.lng = this.bureau.longitude;

        }, error => {
            console.log(error);
        });
    }

    onCreateContrat() {
        this.demandeContrat = true;
        this.clickDemandeContrat1 = true;
        console.log(this.contratForm.typeClient);
        console.log(this.demandeContrat)
        if (!this.keycloakSecurityService.isAuthenticated()){
            this.keycloakSecurityService.onLogin();
        }else{
            this.contratForm.idClient = this.keycloakSecurityService.getUserID();
            this.contratForm.idBien = this.bureau.id;
            this.contratForm.typeClient = "particulier";
            this.contratForm.emailClient = this.keycloakSecurityService.userDetail("email");
            this.contratForm.firstName = this.keycloakSecurityService.userDetail("given_name");
            this.contratForm.lastName = this.keycloakSecurityService.userDetail("family_name");
            this.contratService.createContrat(this.contratForm).subscribe(data => {
                this.clickDemandeContrat1 = true;
                this.getBureauDetail();
                this.contratForm = new ContratForm();
            }, error =>{
                console.log(error);
            })

        }

    }
}
