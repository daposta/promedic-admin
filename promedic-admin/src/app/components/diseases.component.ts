import { Component } from '@angular/core';
import {DiseaseService} from '../services/disease.srv';

@Component({
  selector: 'disabilities',
  templateUrl: '../views/diseases.html' ,
  providers: [DiseaseService]
})

export class DiseasesComponent  { 

	diseases: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _diseaseService : DiseaseService){

	}

	fetchDiseases() {
		    this._diseaseService
		        .getDiseases()
		        .then(diseases => this.diseases = diseases)
		        .catch(error => this.error = error);
		  }


	searchDisease(){
		
		if(this.search.length> 3){
			this._diseaseService.searchDisease(this.search).then(result => this.diseases = result)
    		.catch(error => this.error = error);
		}else{
			this.fetchDiseases();
		}
		
	}


	deleteDisease(x){
		this._diseaseService.deleteDisease(x.id).then(response =>{
			
			let index: number = this.diseases.indexOf(x);
			if (index !== -1) {
		        this.diseases.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.fetchDiseases();
	}
 }
