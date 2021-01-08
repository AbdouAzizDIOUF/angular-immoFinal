import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ClientService} from '../../services/client.service';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import {Particulier} from '../../model/particulier';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'contact-us',
  templateUrl: './Monespace.component.html',
  styleUrls: ['./Monespace.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MonespaceComponent implements OnInit{

    public particulier: Particulier = new Particulier();

    public contratVar = false;
    public notificationVar = false;
    public paiementVar = false;
    public informationPersoVar = false;



    contrats: Object;

    constructor(
        private clientService: ClientService,
        private contratService: ContratService,
        private keycloakSecurityService: KeycloakSecurityService,
        private router: Router
    ) {}


    ngOnInit(): void {
        this.getUserInformation();
        this.onViewContrat(this.particulier.id)
    }


    private getUserInformation() {
        if (this.keycloakSecurityService.isAuthenticated()){
            this.particulier.id = this.keycloakSecurityService.getUserID();
            this.particulier.nom = this.keycloakSecurityService.userDetail("family_name");
            this.particulier.prenom = this.keycloakSecurityService.userDetail("given_name");
            this.particulier.email = this.keycloakSecurityService.userDetail("email");
        }
    }

    onViewContrat(id: string) {
     this.contratVar = true;
     this.notificationVar = false;
     this.paiementVar = false;
     this.informationPersoVar = false;

     this.contratService.getContratParticulierByClientID(this.particulier.id)
         .subscribe(data=>{
              this.contrats = data;
              console.log(this.contrats);
             }, err=>{
             console.log(err);
         })
    }

    onViewPaiement() {
        this.paiementVar = true;
        this.contratVar = false;
        this.notificationVar = false;
        this.informationPersoVar = false;

    }

    onViewNotification() {
        this.notificationVar = true;
        this.paiementVar = false;
        this.contratVar = false;
        this.informationPersoVar = false;
    }

    paie(id: any) {
        this.router.navigateByUrl('/paiement');
    }

    onViewInforamtionPersonnel() {
        this.notificationVar = false;
        this.paiementVar = false;
        this.contratVar = false;
        this.informationPersoVar = true;
        this.clientService.getParticulierService().getInformationPersonnel(this.particulier.id)
            .subscribe(data => {
                // @ts-ignore
                //console.log(data.sexe)
                this.particulier.sexe = data.sexe;
                // @ts-ignore
                this.particulier.dateNaiss = data.dateNaiss;
                // @ts-ignore
                this.particulier.adresse = data.address;
                // @ts-ignore
                this.particulier.cni = data.cni;
            })
    }
}
