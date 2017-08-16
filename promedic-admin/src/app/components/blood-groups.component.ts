import { Component } from '@angular/core';
import {BloodGroupService} from '../services/blood-group.srv';

@Component({
  selector: 'bloodgroup',
  templateUrl: '../views/blood-groups.html' ,
  providers: [BloodGroupService]
})

export class BloodGroupComponent  { 

	bloodGroups: any[];
 	error: any;

	constructor(private _bgService : BloodGroupService){

	}

	getBloodGroup() {
		    this._bgService
		        .getBloodGroup()
		        .then(bloodGroups => this.bloodGroups = bloodGroups)
		        .catch(error => this.error = error);
		  }

	ngOnInit(){
		this.getBloodGroup();
	}
 }
