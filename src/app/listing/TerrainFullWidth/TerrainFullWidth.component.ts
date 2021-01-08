import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {BureauService} from '../../services/bureau.service';
import { TerrainService } from 'src/app/services/terrain.service';

// @ts-ignore
@Component({
  selector: 'grid-full-width',
  templateUrl: './TerrainFullWidth.component.html',
  styleUrls: ['./TerrainFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerrainFullWidthComponent implements OnInit{

    public terrains: any;


    constructor(public router: Router, public terrainService: TerrainService ){}

    ngOnInit(){
        this.getTerrains();
    }

    public getTerrains(){
        this.terrainService.getTerrain()
            .subscribe(data=>{
                //console.log(data._embedded.appartements);
                // @ts-ignore
                console.log(data._embedded);
                this.terrains = data;
            }, err=>{
                console.log(err);
            })
    }

    onTerrainDetail(bur:any) {
        console.log(bur);
        let url=btoa(bur._links.terrain.href);
        console.log(url);
        this.router.navigateByUrl("biens/detail/parcelle/"+url);
    }
}
