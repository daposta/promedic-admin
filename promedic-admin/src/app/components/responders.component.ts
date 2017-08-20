import { Component } from '@angular/core';
import {ResponderService} from '../services/responders.srv';


@Component({
  selector: 'responders',
  templateUrl: '../views/responders.html' ,
  providers: [ResponderService]
})

export class ResponderComponent  { 

	responders: any[];
 	error: any;
 	search: string ="" ;
 	

	constructor(private _responderService : ResponderService){

	}

	getResponders() {
		    this._responderService
		        .getResponders()
		        .then(responders => this.responders = responders)
		        .catch(error => this.error = error);
		  };





  searchResponder(){

		if(this.search.length> 3){
			this._responderService.searchResponder(this.search).then(result => this.responders = result)
    		.catch(error => this.error = error);
		}else{
			this.getResponders();
		}
		
	};


	deleteResponder(x){
		this._responderService.deleteResponder(x.id).then(response =>{
			
			let index: number = this.responders.indexOf(x);
			if (index !== -1) {
		        this.responders.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getResponders();
	}
 }
