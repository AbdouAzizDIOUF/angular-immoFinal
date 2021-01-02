import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {BienService} from '../../services/bien.service';
import {AppartementService} from '../../services/appartement.service';
import {BureauService} from '../../services/bureau.service';
import {VillaService} from '../../services/villa.service';
import {TerrainService} from '../../services/terrain.service';
import {Bien} from '../../model/bien';
import {Appartement} from '../../model/appartement';
import {Bureau} from '../../model/bureau';
import {Villa} from '../../model/villa';
import {Terrain} from '../../model/terrain';
import {Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'admin-dadhboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminDashboardlComponent implements OnInit{

    public bien: Bien = new Bien();
    public appartement: Appartement = new Appartement();
    public bureau: Bureau = new Bureau();
    public villa: Villa = new Villa();
    public terrain: Terrain = new Terrain();


    public suggession: any;


    public biens: any;
    public appartements: any;
    public burreaux: any;
    public villas: any;
    public terrains: any;


    public create_appartement: boolean;
    public create_bureau: boolean;
    public create_villa: boolean;
    public create_terrain: boolean;


    public update_appartement: any;
    public update_bureau: any;
    public update_villa: any;
    public update_terrain: any;

    public appartementOne: any;
    public bureauOne: any;
    public villaOne: any;
    public terrainOne: any



    private selectedFiles1A: any;
    private selectedFiles2A: any;
    private selectedFiles3A: any;B
    private selectedFiles4A: any;
    private progressA: number;
    private currentTimeA: number;

    private selectedFiles1B: any;
    private selectedFiles2B: any;
    private selectedFiles3B: any;
    private selectedFiles4B: any;VT
    private progressB: number;
    private currentTimeB: number;

    private selectedFiles1V: any;
    private selectedFiles2V: any;
    private selectedFiles3V: any;
    private selectedFiles4V: any;
    private progressV: number;
    private currentTimeV: number;

    private selectedFiles1T: any;
    private selectedFiles2T: any;
    private selectedFiles3T: any;
    private selectedFiles4T: any;
    private progressT: number;
    private currentTimeT: number;


   constructor(
       private router: Router,
       private bienservice: BienService,
       public appartementService: AppartementService,
       public bureauService: BureauService,
       public villaService: VillaService,
       public terrainService: TerrainService
       ){}

   ngOnInit(){
        this.getAppartements();
   }


    onSuggestionA($event) {
        this.suggession = $event['suggestion'];
        console.log("L'even change ")
        console.log($event['suggestion']);
        this.appartement.adresse = this.suggession.name +", "+ this.suggession.administrative;
        this.appartement.codePostal = this.suggession.postcode;
        this.appartement.ville = this.suggession.city;
        this.appartement.latitude = this.suggession.latlng.lat;
        this.appartement.longitude = this.suggession.latlng.lng;
    }

    onSuggestionB($event) {
        this.suggession = $event['suggestion'];
        console.log("L'even change ")
        console.log($event['suggestion']);
        this.bureau.adresse = this.suggession.name +", "+ this.suggession.administrative;
        this.bureau.codePostal = this.suggession.postcode;
        this.bureau.ville = this.suggession.city;
        this.bureau.latitude = this.suggession.latlng.lat;
        this.bureau.longitude = this.suggession.latlng.lng;
    }

    onSuggestionV($event) {
        this.suggession = $event['suggestion'];
        console.log("L'even change ")
        console.log($event['suggestion']);
        this.villa.adresse = this.suggession.name +", "+ this.suggession.administrative;
        this.villa.codePostal = this.suggession.postcode;
        this.villa.ville = this.suggession.city;
        this.villa.latitude = this.suggession.latlng.lat;
        this.villa.longitude = this.suggession.latlng.lng;
    }

    onSuggestionT($event) {
        this.suggession = $event['suggestion'];
        console.log("L'even change ")
        console.log($event['suggestion']);
        this.terrain.adresse = this.suggession.name +", "+ this.suggession.administrative;
        this.terrain.codePostal = this.suggession.postcode;
        this.terrain.ville = this.suggession.city;
        this.terrain.latitude = this.suggession.latlng.lat;
        this.terrain.longitude = this.suggession.latlng.lng;
    }

    onClear($event) {
        console.log($event);
    }

    public getAppartements(){
        this.appartementService.getAppartements()
            .subscribe(data => {
                this.getInitialModel();
                this.resetBienViewMap();
                this.resetBienUpdVar();

                this.appartement = new Appartement();
                this.create_appartement = false;

                this.appartements = data;

                this.burreaux = undefined;
                this.biens = undefined;
                this.villas = undefined;
                this.terrains = undefined;
            }, error => {
                console.log(error.message);
            })
    }

    public getBurreaux(){
       this.bureauService.getBurreaus()
           .subscribe(data =>{
               this.getInitialModel();
               this.resetBienViewMap();
               this.resetBienUpdVar();

               this.bureau = new Bureau();
               this.burreaux = data;
               this.create_bureau = false;
               this.biens = undefined;
               this.appartements = undefined;
               this.villas = undefined;
               this.terrains = undefined;
           }, error => {
               console.log(error);
           });
    }

    public getTerrains(){
       this.terrainService.getTerrain()
           .subscribe(data => {
               this.getInitialModel();
               this.resetBienViewMap();
               this.resetBienUpdVar();

               this.terrain = new Terrain();
               this.terrains = data;
               this.create_terrain = false;
               this.burreaux = undefined;
               this.biens = undefined;
               this.appartements = undefined;
               this.villas = undefined;
           }, error =>{
               console.log(error.message);
           })
    }

    public getVillas(){
       this.villaService.getVillas()
           .subscribe(data =>{
               this.getInitialModel();
               this.resetBienViewMap();
               this.resetBienUpdVar();

               this.villa = new Villa();
               this.villas = data;
               this.create_villa = false;
               this.burreaux = undefined;
               this.biens = undefined;
               this.appartements = undefined;
               this.terrains = undefined;
           },error =>{
               console.log(error.message);
           })
    }


    OnCreateAppartement() {
       this.create_appartement = true;
       this.create_bureau = false;
       this.create_villa = false;
       this.create_terrain = false;
    }

    OnCreateBureau() {
        this.create_bureau = true;
        this.create_appartement = false;
        this.create_villa = false;
        this.create_terrain = false;
    }

    OnCreateVillas() {
        this.create_villa = true;
        this.create_bureau = false;
        this.create_appartement = false;
        this.create_terrain = false;
    }

    OnCreateTerrain() {
        this.create_terrain = true;
        this.create_villa = false;
        this.create_bureau = false;
        this.create_appartement = false;
    }

    OnDeleteA(id) {
        this.appartementService.deleteAppartement(id)
            .subscribe(data => {
                console.log(data);
                this.getAppartements();
            }, error => {
                console.log(error);
            })

    }

    OnDeleteB(id) {
        this.bureauService.deleteBureau(id)
            .subscribe(data => {
                console.log(data);
                this.getBurreaux();
            }, error => {
                console.log(error);
            })

    }

    OnDeleteV(id) {
        this.villaService.deleteVilla(id)
            .subscribe(data => {
                console.log(data);
                this.getVillas();
            }, error => {
                console.log(error);
            })

    }

    OnDeleteT(id) {
        this.terrainService.deleteTerrain(id)
            .subscribe(data => {
                console.log(data);
                this.getTerrains();
            }, error => {
                console.log(error);
            })
    }

     OnUpdateA(id: any) {
       this.appartementService.getAppartementById(id).subscribe(data => {
            this.getInitialModel();

            // @ts-ignore
            this.appartement = data;
            this.update_appartement = true;

            this.update_bureau = undefined;
            this.update_terrain = undefined;
            this.update_villa = undefined;
           }, error =>{
               console.log(error);
           })
    }
    OnUpdateB(id: any) {
       this.bureauService.getBureauById(id).subscribe(data =>{
           this.getInitialModel();
           // @ts-ignore
           this.bureau = data;
           this.update_bureau = true;

        this.update_appartement = undefined;
        this.update_terrain = undefined;
        this.update_villa = undefined;

       }, error => {
           console.log(error);
       })
    }
    OnUpdateV(id: any) {
        this.villaService.getVillaById(id).subscribe(data =>{
            this.getInitialModel();
            this.update_villa = true;
            // @ts-ignore
            this.villa = data;

            this.update_appartement = undefined;
            this.update_bureau = undefined;
            this.update_terrain = undefined;


        }, error => {
            console.log(error);
        })
    }
    OnUpdateT(id: any) {
        this.terrainService.getTerrainById(id).subscribe(data =>{

            this.getInitialModel();
            this.update_terrain = true;
            // @ts-ignore
            this.terrain = data;

            this.update_appartement = undefined;
            this.update_bureau = undefined;
            this.update_villa = undefined;

        }, error => {
            console.log(error);
        })
    }

    OnDetailA(id: any) {
       this.appartementService.getAppartementById(id)
           .subscribe(data => {
               this.appartements = undefined;
               this.getInitialModel();
               this.resetBienViewMap();
               this.resetBienUpdVar();

               this.appartementOne = data;
           }, error => {
               console.log(error);
           })
    }

    OnDetailB(id: any) {
        this.bureauService.getBureauById(id)
            .subscribe(data => {
                this.burreaux = undefined
                this.getInitialModel();
                this.resetBienViewMap();
                this.resetBienUpdVar();

                this.bureauOne = data;
            },error => {
                console.log(error)
            })
    }

    OnDetailV(id: any) {
        this.villaService.getVillaById(id)
            .subscribe(data => {
                this.villas=undefined;
                this.getInitialModel();
                this.resetBienViewMap();
                this.resetBienUpdVar();

                this.villaOne = data;
            }, error => {
                console.log(error);
            })
    }

    OnDetailT(id: any) {
        this.terrainService.getTerrainById(id)
            .subscribe(data => {
                this.terrains = undefined;
                this.getInitialModel();
                this.resetBienViewMap();
                this.resetBienUpdVar();

                this.terrainOne = data;
            }, error => {
                console.log(error);
            })
    }

    onSubmiteCreateAppartement() {
        this.appartementService.createAppartement(this.appartement)
            .subscribe(data => {
                this.create_appartement = false;
                this.appartement = new Appartement();
                this.getAppartements();
                this.router.navigate(['/admin'])
            });
    }

    onSubmiteCreateBurreau() {
        this.bureauService.createBureau(this.bureau)
            .subscribe(data => {
                this.create_bureau = false;
                this.bureau = new Bureau();
                this.getBurreaux();
                this.router.navigate(['/admin'])
            });
    }

    onSubmiteCreateVilla() {
        this.villaService.createVilla(this.villa)
            .subscribe(data => {
                this.create_villa = false;
                this.villa = new Villa();
                this.getVillas();
                this.router.navigate(['/admin'])
            });
    }

    onSubmiteCreateTerrain() {
        this.terrainService.createTerrain(this.terrain)
            .subscribe(data => {
                this.create_terrain = false;
                this.terrain = new Terrain();
                this.getTerrains();
                this.router.navigate(['/admin'])
            });
    }


    uploadPhoto1App() {
        this.progressA = 0;
        this.appartementService.uploadPhotoAppartement1(this.selectedFiles1A.item(0), this.appartement.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressA = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeA=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateA(this.appartement.id);
            }
        },err =>{
            alert("Problème de chargement");
        });

        this.selectedFiles1A = undefined

    }

    uploadPhoto2App() {
        this.progressA = 0;
        this.appartementService.uploadPhotoAppartement2(this.selectedFiles2A.item(0), this.appartement.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressA = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeA=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateA(this.appartement.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles2A = undefined
    }

    uploadPhoto3App() {
        this.progressA = 0;
        this.appartementService.uploadPhotoAppartement3(this.selectedFiles3A.item(0), this.appartement.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressA = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeA=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateA(this.appartement.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles3A = undefined
    }

    uploadPhoto4App() {
        this.progressA = 0;
        this.appartementService.uploadPhotoAppartement4(this.selectedFiles4A.item(0), this.appartement.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressA = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeA=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateA(this.appartement.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles4A = undefined
    }


    uploadPhoto1Bur() {
        this.progressB = 0;
        this.bureauService.uploadPhotoBureau1(this.selectedFiles1B.item(0), this.bureau.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressB = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeB=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateB(this.bureau.id);
            }
        });
        this.selectedFiles1B = undefined

    }

    uploadPhoto2Bur() {
        this.progressB = 0;
        this.bureauService.uploadPhotoBureau2(this.selectedFiles2B.item(0), this.bureau.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressB = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeB=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateB(this.bureau.id);
            }
        },err =>{
            alert("Problème de chargement");
        });

        this.selectedFiles2B = undefined
    }

    uploadPhoto3Bur() {
        this.progressB = 0;
        this.bureauService.uploadPhotoBureau3(this.selectedFiles3B.item(0), this.bureau.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressB = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeB=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateB(this.bureau.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles3B = undefined;
    }

    uploadPhoto4Bur() {
        this.progressB = 0;
        this.bureauService.uploadPhotoBureau4(this.selectedFiles4B.item(0), this.bureau.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressB = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeB=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateB(this.bureau.id)
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles4B = undefined
    }



    uploadPhoto1Vil() {
        this.progressV = 0;
        this.villaService.uploadPhotoVilla1(this.selectedFiles1V.item(0), this.villa.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressV = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeV=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateV(this.villa.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles1V = undefined
    }

    uploadPhoto2Vil() {
        this.progressV = 0;
        this.villaService.uploadPhotoVilla2(this.selectedFiles2V.item(0), this.villa.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressV = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeV=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateV(this.villa.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles2V = undefined
    }

    uploadPhoto3Vil() {
        this.progressV = 0;
        this.villaService.uploadPhotoVilla3(this.selectedFiles3V.item(0), this.villa.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressV = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeV=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateV(this.villa.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles3V = undefined
    }

    uploadPhoto4Vil() {
        this.progressV = 0;
        this.villaService.uploadPhotoVilla4(this.selectedFiles4V.item(0), this.villa.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressV = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeV=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateV(this.villa.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles4V = undefined
    }




    uploadPhoto1Ter() {
        this.progressT = 0;
        this.terrainService.uploadPhotoTerrain1(this.selectedFiles1T.item(0), this.terrain.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressT = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeT=Date.now();
                alert("FIN DU TELECHARGEMENT !!!!!!!!!!!!!!!!");
                this.OnUpdateT(this.terrain.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles1T = undefined
    }

    uploadPhoto2Ter() {
        this.progressT = 0;
        this.terrainService.uploadPhotoTerrain2(this.selectedFiles2T.item(0), this.terrain.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressT = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeT=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateT(this.terrain.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles2T = undefined
    }

    uploadPhoto3Ter() {
        this.progressT = 0;
        this.terrainService.uploadPhotoTerrain3(this.selectedFiles3T.item(0), this.terrain.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressT = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeT=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateT(this.terrain.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles3T = undefined
    }

    uploadPhoto4Ter() {
        this.progressT = 0;
        this.terrainService.uploadPhotoTerrain4(this.selectedFiles4T.item(0), this.terrain.id).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progressT = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.currentTimeT=Date.now();
                alert("FIN DU TELECHARGEMENT #1!!!!!!!!!!!!!!!!");
                this.OnUpdateT(this.terrain.id);
            }
        },err=>{
            alert("Problème de chargement");
        });

        this.selectedFiles4T = undefined
    }


    onSelectedFile1A(event) {
        this.selectedFiles1A=event.target.files;
    }
    onSelectedFile2A(event) {
        this.selectedFiles2A=event.target.files;
    }

    onSelectedFile3A(event) {
        this.selectedFiles3A=event.target.files;
    }

    onSelectedFile4A(event) {
        this.selectedFiles4A=event.target.files;
    }


    onSelectedFile1B(event) {
        this.selectedFiles1B=event.target.files;
    }
    onSelectedFile2B(event) {
        this.selectedFiles2B=event.target.files;
    }

    onSelectedFile3B(event) {
        this.selectedFiles3B=event.target.files;
    }

    onSelectedFile4B(event) {
        this.selectedFiles4B=event.target.files;
    }


    onSelectedFile1V(event) {
        this.selectedFiles1V=event.target.files;
    }
    onSelectedFile2V(event) {
        this.selectedFiles2V=event.target.files;
    }

    onSelectedFile3V(event) {
        this.selectedFiles3V=event.target.files;
    }

    onSelectedFile4V(event) {
        this.selectedFiles4V=event.target.files;
    }


    onSelectedFile1T(event) {
        this.selectedFiles1T=event.target.files;
    }
    onSelectedFile2T(event) {
        this.selectedFiles2T=event.target.files;
    }

    onSelectedFile3T(event) {
        this.selectedFiles3T=event.target.files;
    }

    onSelectedFile4T(event) {
        this.selectedFiles4T=event.target.files;
    }



    private getInitialModel(){
        this.create_appartement = false;
        this.create_bureau = false;
        this.create_villa = false;
        this.create_terrain = false;
    }

    private resetBienViewMap(){
        this.appartementOne= undefined;
        this.bureauOne= undefined;
        this.villaOne= undefined;
        this.terrainOne= undefined;

        //this.resetBienUpdVar();
    }

    private resetBienUpdVar(){
        this.update_appartement = undefined;
        this.update_bureau = undefined;
        this.update_terrain = undefined;
        this.update_villa = undefined;
    }

    private resetAllBiensVar(){
       this.appartements = undefined;
       this.burreaux = undefined;
       this.villas = undefined;
       this.terrains = undefined;
    }

    onSubmiteUpdateAppartement(id: number, appartement: Appartement) {
        this.appartementService.updateAppartement(id,appartement).subscribe(data => {
            console.log(data);
            this.getAppartements();
        }, error=>{
            console.log(error);
        })
    }

    onSubmiteUpdateBureau(id: number, bureau: Bureau) {
        this.bureauService.updateBureau(id, bureau).subscribe(data => {
            console.log(data);
            this.getBurreaux();
        }, error => {
            console.log(error);
        })
    }

    onSubmiteUpdateVilla(id: number, villa: Villa) {
        this.villaService.updateVilla(id, villa).subscribe(data => {
            console.log(data);
            this.getVillas();
        }, error => {
            console.log(error);
        })
    }

    onSubmiteUpdateTerrain(id: number, terrain: Terrain) {
        this.terrainService.updateTerrain(id, terrain).subscribe(data => {
            console.log(data);
            this.getTerrains();
        }, error => {
            console.log(error);
        })
    }

}
