import { Component } from '@angular/core';
import {DrugService} from '../services/drugs.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'drug-detail',
  templateUrl: '../views/drug-detail.html' ,
  providers: [DrugService]
})

export class DrugDetailComponent { 

	drug: Object= {};
 	error: any;	

	constructor(private _drugsService : DrugService, private route: ActivatedRoute){

	}

	// getDrugs() {
	// 	    this._drugsService
	// 	        .getDrugs()
	// 	        .then(drugs => this.drugs = drugs)
	// 	        .catch(error => this.error = error);
	// 	  }

	ngOnInit() {
		console.log('poofff');
		 this.route.params.switchMap((params: Params) => 
		 	this._drugsService.findDrugByID(+ params['id']))
		 .subscribe(
		 	drug => this.drug = drug
		 	);
		 
	}
 }
