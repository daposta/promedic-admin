import { Component } from '@angular/core';
import { PartnerService} from '../services/partner.srv';

@Component({
  selector: 'disabilities',
  templateUrl: '../views/partners.html' ,
  providers: [PartnerService]
})

export class PartnerComponent  { 

	partners: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _partnerService : PartnerService){

	}

	getDisablity() {
		    this._partnerService
		        .getPartners()
		        .then(res => this.partners = res)
		        .catch(error => this.error = error);
		  };


	searchDisability(){

		if(this.search.length> 3){
			this._partnerService.searchPartner(this.search).then(result => this.partners = result)
    		.catch(error => this.error = error);
		}else{
			this.getDisablity();
		}
		
	};


	deletePartner(x){
		this._partnerService.deletePartner(x.id).then(response =>{
			
			let index: number = this.partners.indexOf(x);
			if (index !== -1) {
		        this.partners.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getDisablity();
	}
 }
