import { Component } from '@angular/core';
import { HMOService} from '../services/hmo.srv';

@Component({
  //selector: 'disabilities',
  templateUrl: '../views/hmos.html' ,
  providers: [HMOService]
})

export class HMOComponent  { 

	hmos: any[];
 	error: any;

	constructor(private _hmoService : HMOService){

	}

	fetchHMOs() {
		    this._hmoService
		        .getHMOs()
		        .then(hmos => this.hmos = hmos)
		        .catch(error => this.error = error);
		  }


	deleteHMO(x){
		this._hmoService.deleteHMO(x.id).then(response =>{
			
			let index: number = this.hmos.indexOf(x);
			if (index !== -1) {
		        this.hmos.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}


	ngOnInit(){
		this.fetchHMOs();
	}
 }
