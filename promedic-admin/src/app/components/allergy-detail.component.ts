import { Component } from '@angular/core';
import { AllergyService } from '../services/allergies.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Globals } from '../shared/api';

@Component({
  selector: 'allergy-detail',
  templateUrl: '../views/allergy-detail.html' ,
  providers: [AllergyService,]
})

export class AllergyDetailComponent { 

	allergy: Object= {};
 	error: any;	


	constructor(private _allergySrv : AllergyService, 
		private route: ActivatedRoute, private globals: Globals){

	}

	

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._allergySrv.findAllergyByID(+ params['id']))
		 .subscribe(
		 	data => this.allergy = data
		 	);

		
	}
 }
