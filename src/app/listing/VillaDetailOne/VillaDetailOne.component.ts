import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../global.service';
import { VillaService } from 'src/app/services/villa.service';
import {ContratForm} from '../../model/contrat-form';
import {ContratService} from '../../services/contrat.service';
import {KeycloakSecurityService} from '../../services/keycloak-security.service';

@Component({
  selector: 'list-detail-one',
  templateUrl: './VillaDetailOne.component.html',
  styleUrls: ['./VillaDetailOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VillaDetailOneComponent implements OnInit{

    public lat : any;
    public lng : any;
    public villa: any;
    public villaGaleryImage: any;

    public demandeContrat: boolean;
    public clickDemandeContrat1 = false;

    public contratForm: ContratForm = new ContratForm();

    constructor(
        private route: ActivatedRoute,
        public globalService: GlobalService,
        public villaService: VillaService,
        private contratService: ContratService,
        private keycloakSecurityService: KeycloakSecurityService
        ) {}

    ngOnInit(){
        this.getVillaDetail();
    }


    getVillaDetail(){
        let url = atob(this.route.snapshot.params.url);
        console.log(url);
        this.globalService.getRessourceByBien(url).subscribe(data=> {
            this.villa=data;
            this.villaGaleryImage = [
                {image: this.villaService.getGlobalResource().host+'/vil/photoProduit1/'+this.villa.id},
                {image: this.villaService.getGlobalResource().host+'/vil/photoProduit2/'+this.villa.id},
                {image: this.villaService.getGlobalResource().host+'/vil/photoProduit3/'+this.villa.id},
                {image: this.villaService.getGlobalResource().host+'/vil/photoProduit4/'+this.villa.id}
            ]
            this.lat = this.villa.latitude;
            this.lng = this.villa.longitude;

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
            this.contratForm.idBien = this.villa.id;
            this.contratForm.typeClient = "particulier";
            this.contratForm.emailClient = this.keycloakSecurityService.userDetail("email");
            this.contratForm.firstName = this.keycloakSecurityService.userDetail("given_name");
            this.contratForm.lastName = this.keycloakSecurityService.userDetail("family_name");
            console.log(this.contratForm);
            this.contratService.createContrat(this.contratForm).subscribe(data => {
                this.getVillaDetail();
                this.clickDemandeContrat1 = true;
                this.contratForm = new ContratForm();
            }, error =>{
                console.log(error);
            })

        }

    }
}
