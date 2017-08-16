import { Component } from '@angular/core';
import {DrugService} from '../services/drugs.srv';



@Component({
  selector: 'drugs',
  templateUrl: '../views/drugs.html' ,
  providers: [DrugService]
})

export class DrugsComponent  { 

	drugs: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _drugsService : DrugService){

	}

	getDrugs() {
		    this._drugsService
		        .getDrugs()
		        .then(drugs => this.drugs = drugs)
		        .catch(error => this.error = error);
		  };


	searchDrug(){

		if(this.search.length> 3){
			this._drugsService.searchDrug(this.search).then(result => this.drugs = result)
    		.catch(error => this.error = error);
		}else{
			this.getDrugs();
		}
		
	};

	ngOnInit(){
		this.getDrugs();
	}
 }
