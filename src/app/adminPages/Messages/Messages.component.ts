import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import {BienService} from '../../services/bien.service';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { ContratFormClientBien } from 'src/app/model/contrat-form-client-bien';
import {Bureau} from '../../model/bureau';
import {AfficheContrat} from '../../model/affiche-contrat';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {PopupMessageComponent} from '../../alets/popup-message/popup-message.component';

@Component({
  selector: 'admin-messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit{

    public contratFormClientBien: ContratFormClientBien = new ContratFormClientBien();

    public contratLocationVar: boolean;
    public contratVenteVar: boolean;

    public tabVar: boolean = true;

    public contratLocations: any;
    public contratVentes: any;

    public consulteContratLocationVar: boolean = false;
    public consulteContratVenteVar: boolean = false;

    public contratOne: Object;
    public clientOne: Object;
    public bienOne: Object;

    public contratOneVente: Object;
    public clientVente: Object;
    public bienVente: Object;

    public approuveContrat : boolean;

   constructor(
       private contratService: ContratService,
       private bienService: BienService,
       public keycloakSecurityService: KeycloakSecurityService,
       private router: Router,
       private modalService: NgbModal
   ){}

   ngOnInit(){
       this.getContratLocations();
   }

    getContratLocations() {
        this.contratOne = null;
        this.clientOne = null;
        this.bienOne = null;

        this.contratLocationVar = true;
        this.contratVenteVar = false;

        this.approuveContrat = false;

        this.consulteContratLocationVar = false;
        this.consulteContratVenteVar= false;

        this.contratService.getContratByType("location")
            .subscribe(aa => {
                // @ts-ignore
                this.contratLocations = aa._embedded.contratClientBiens;
                console.log(this.contratLocations);
            }, error =>{
                console.log(error);
            })
    }

    getContratVentes() {
        this.contratOne = null;
        this.clientOne = null;
        this.bienOne = null;

        this.contratLocationVar = false;
        this.contratVenteVar = true;
        this.approuveContrat = false;


        this.consulteContratLocationVar = false;
        this.consulteContratVenteVar = false;

        this.contratService.getContratByType("ventes")
            .subscribe(bb => {
                // @ts-ignore
                this.contratVentes = bb._embedded.contratClientBiens;
                console.log(this.contratVentes);
            }, error=>{
                console.log(error);
            })
    }


    consulteContratLocation(id) {

        this.contratOne = null;
        this.clientOne = null;
        this.bienOne = null;

        this.approuveContrat = false;
        this.consulteContratVenteVar= false;
        this.consulteContratLocationVar = true;

        this.contratLocationVar = false;
        this.contratVenteVar = false;


        this.contratService.getClientByContratId(id)
            .subscribe(cc => {
                this.clientOne = cc;
                console.log(cc)
            }, error => {
                console.log(error);
            });

        this.contratService.getBienByContratId(id)
            .subscribe(gg => {
                this.bienOne = gg;
                console.log(gg);
            }, error => {
                console.log(error);
            });


        this.contratService.getContratById(id)
            .subscribe(gg => {
                this.contratOne=gg;
            }, error => {
                console.log(error);
            })

    }




    consulteContratLocationVente(id: number) {
        this.contratOne = null;
        this.clientOne = null;
        this.bienOne = null;


        this.contratOneVente = null;
        this.clientVente = null;
        this.bienVente = null;


        this.approuveContrat = false;

        this.contratLocationVar = false;
        this.contratVenteVar = false;


        this.consulteContratLocationVar = false;
        this.consulteContratVenteVar= true;


        //this.consulteContratVenteVar=true;

        this.contratService.getClientByContratId(id)
            .subscribe(d => {
                this.clientVente = d;
            }, error => {
                console.log(error);
            });

        this.contratService.getBienByContratId(id)
            .subscribe(bvente => {
                this.bienVente = bvente;
            }, error => {
                console.log(error);
            });


        this.contratService.getContratById(id)
            .subscribe(ven => {
                this.contratOneVente=ven;
            }, error => {
                console.log(error);
            })
    }



    onApprouve(idContrat: number, idBient: number, idClient: string) {
       this.contratFormClientBien.idContrat = idContrat;
       this.contratFormClientBien.idBien = idBient;
       this.contratFormClientBien.idClient = idClient;
       this.contratService.onApprouveContrat(this.contratFormClientBien).subscribe(data => {
           this.getContratLocations();
           this.open();
           this.approuveContrat = true;
        })
    }

    onRejetteContrat(id: number) {
       this.contratService.onRejetteContrat2(id).subscribe(data => {
           this.getContratLocations();
           this.open2();
           console.log(data);
       })
    }


    open() {
        const modalRef = this.modalService.open(PopupMessageComponent);
        modalRef.componentInstance.name = 'Hooopppp vous venez d\'approuver une demannde de contrat';
    }

    open2() {
        const modalRef = this.modalService.open(PopupMessageComponent);
        modalRef.componentInstance.name = 'Vous venez de desaprouver une demande de contrat';
    }


    consulterPaiement(obj: Object) {

    }
}
