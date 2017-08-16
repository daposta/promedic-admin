import { Component } from '@angular/core';
import {DisabilityService} from '../services/disability.srv';

@Component({
  selector: 'disabilities',
  templateUrl: '../views/disabilities.html' ,
  providers: [DisabilityService]
})

export class DisabilityComponent  { 

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
		  };


	searchDisability(){

		if(this.search.length> 3){
			this._disabilityService.searchDisability(this.search).then(result => this.disabilities = result)
    		.catch(error => this.error = error);
		}else{
			this.getDisablity();
		}
		
	};


	deleteDisability(x){
		this._disabilityService.deleteDisability(x.id).then(response =>{
			
			let index: number = this.disabilities.indexOf(x);
			if (index !== -1) {
		        this.disabilities.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getDisablity();
	}
 }
