import { Component } from '@angular/core';
import {StateService} from '../services/states.srv';

@Component({
  //selector: 'disabilities',
  templateUrl: '../views/states.html' ,
  providers: [StateService]
})

export class StateComponent  { 

	states: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _stateService : StateService){

	}

	getStates() {
		    this._stateService
		        .getStates()
		        .then(states => this.states = states)
		        .catch(error => this.error = error);
	};


	searchStates(){

		if(this.search.length> 3){
			this._stateService.searchState(this.search).then(result => this.states = result)
    		.catch(error => this.error = error);
		}else{
			this.getStates();
		}
		
	}

	ngOnInit(){
		this.getStates();
	}
 }
