import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../global.service';
import {TerrainService} from '../../services/terrain.service';
import {ContratForm} from '../../model/contrat-form';
import {ContratService} from '../../services/contrat.service';
import {KeycloakSecurityService} from '../../services/keycloak-security.service';

@Component({
  selector: 'list-detail-one',
  templateUrl: './TerrainDetailOne.component.html',
  styleUrls: ['./TerrainDetailOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerrainDetailOneComponent implements OnInit{

    public lat : any;
    public lng : any;
    public terrain: any;
    public terrainGaleryImage: any;

    public demandeContrat: boolean;

    public contratForm: ContratForm = new ContratForm();

    public clickDemandeContrat1 = false;

    constructor(
        private route: ActivatedRoute,
        public globalService: GlobalService,
        private terrainService: TerrainService,
        private contratService: ContratService,
        private keycloakSecurityService: KeycloakSecurityService
        ){}

    ngOnInit(){
        this.getTerrainDetail();
    }


    getTerrainDetail(){
        let url = atob(this.route.snapshot.params.url);
        console.log(url);
        this.globalService.getRessourceByBien(url).subscribe(data=> {
            this.terrain=data;
            this.terrainGaleryImage = [
                {image: this.terrainService.getGlobalResource().host+'/ter/photoProduit1/'+this.terrain.id},
                {image: this.terrainService.getGlobalResource().host+'/ter/photoProduit2/'+this.terrain.id},
                {image: this.terrainService.getGlobalResource().host+'/ter/photoProduit3/'+this.terrain.id},
                {image: this.terrainService.getGlobalResource().host+'/ter/photoProduit4/'+this.terrain.id}
            ]
            this.lat = this.terrain.latitude;
            this.lng = this.terrain.longitude;

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
            this.contratForm.idBien = this.terrain.id;
            this.contratForm.typeClient = "particulier";
            this.contratForm.emailClient = this.keycloakSecurityService.userDetail("email");
            this.contratForm.firstName = this.keycloakSecurityService.userDetail("given_name");
            this.contratForm.lastName = this.keycloakSecurityService.userDetail("family_name");
            this.contratService.createContrat(this.contratForm).subscribe(data => {
                this.clickDemandeContrat1 = true;
                this.getTerrainDetail();
                this.contratForm = new ContratForm();
            }, error =>{
                console.log(error);
            })

        }

    }
}
