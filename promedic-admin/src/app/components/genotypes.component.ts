import { Component } from '@angular/core';
import {DisabilityService} from '../services/disability.srv';

@Component({
  selector: 'gen',
  templateUrl: '../views/disabilities.html' ,
  providers: [DisabilityService]
})

export class GenotypeComponent  { 

	disabilities: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _disabilityService : DisabilityService){

	}

	getDisablity() {
		    this._disabilityService
		        .getDisability()
		        .then(disabilities => this.disabilities = disabilities)
		        .catch(error => this.error = error);
		  }

	ngOnInit(){
		this.getDisablity();
	}
 }
