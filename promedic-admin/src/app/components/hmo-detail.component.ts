import { Component } from '@angular/core';
import { HMOService } from '../services/hmo.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hmo-detail',
  templateUrl: '../views/hmo-detail.html' ,
  providers: [HMOService]
})

export class HMODetailComponent { 

	hmo: Object= {};
 	error: any;	

	constructor(private _hmoSrv : HMOService, private route: ActivatedRoute){

	}

	

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._hmoSrv.findHMOByID(+ params['id']))
		 .subscribe(
		 	res => this.hmo = res
		 	);
		 
	}
 }
