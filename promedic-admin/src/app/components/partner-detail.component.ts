import { Component } from '@angular/core';
import { PartnerService } from '../services/partner.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'partner-detail',
  templateUrl: '../views/partner-detail.html' ,
  providers: [PartnerService]
})

export class PartnerDetailComponent { 

	partner: Object= {};
 	error: any;	

	constructor(private _partnerSrv : PartnerService, private route: ActivatedRoute){

	}

	// getDrugs() {
	// 	    this._drugsService
	// 	        .getDrugs()
	// 	        .then(drugs => this.drugs = drugs)
	// 	        .catch(error => this.error = error);
	// 	  }

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._partnerSrv.findPartnerByID(+ params['id']))
		 .subscribe(
		 	res => this.partner = res
		 	);
		 
	}
 }
