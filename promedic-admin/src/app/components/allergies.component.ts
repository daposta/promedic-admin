import { Component } from '@angular/core';
import {AllergyService} from '../services/allergies.srv';

@Component({
  //selector: 'disabilities',
  templateUrl: '../views/allergies.html' ,
  providers: [AllergyService]
})

export class AllergyComponent  { 

	allergies: any[];
 	error: any;
 	search: string ="" ;
 	

	constructor(private _allergyService : AllergyService){

	}

	getAllergies() {
		    this._allergyService
		        .getAllergies()
		        .then(allergies => this.allergies = allergies)
		        .catch(error => this.error = error);
		  };


	searchAllergy(){

		if(this.search.length> 3){
			this._allergyService.searchAllergy(this.search).then(result => this.allergies = result)
    		.catch(error => this.error = error);
		}else{
			this.getAllergies();
		}
		
	};

	deleteAllergy(x){
		this._allergyService.deleteAllergy(x.id).then(response =>{
			
			let index: number = this.allergies.indexOf(x);
			if (index !== -1) {
		        this.allergies.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getAllergies();
	}
 }
