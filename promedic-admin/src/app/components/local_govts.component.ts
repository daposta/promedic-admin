import { Component } from '@angular/core';
import {LocalGovtService} from '../services/local_govts.srv';

@Component({
  //selector: 'disabilities',
  templateUrl: '../views/local_govts.html' ,
  providers: [LocalGovtService]
})

export class LocalGovtComponent  { 

	local_govts: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _localGovtService : LocalGovtService){

	}

	getLocalGovts() {
		    this._localGovtService
		        .getLocalGovts()
		        .then(local_govts => this.local_govts = local_govts)
		        .catch(error => this.error = error);
		  };


	searchLG(){

		if(this.search.length> 3){
			this._localGovtService.searchLocalGovts(this.search).then(result => this.local_govts = result)
    		.catch(error => this.error = error);
		}else{
			this.getLocalGovts();
		}
		
	};

	ngOnInit(){
		this.getLocalGovts();
	}
 }
