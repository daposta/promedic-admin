import { Component } from '@angular/core';

import { LocalGovtService} from '../services/local_govts.srv';
import { StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/lga-edit.html',
  providers : [LocalGovtService,  StateService
    ]
})


export class LocalGovtEditComponent {

  localGovt: any= {};
  error: any;	
  states: any[];
  

  constructor(private localGovtSrv : LocalGovtService, private stateSrv: StateService, private route: ActivatedRoute){

  }

  fetchStates(){
      this.stateSrv.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }
  

  
  getLocalGovtInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.localGovtSrv.findLocalGovtByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.localGovt = data;
        this.localGovt.myState = data.state.id;

		 		
		 	});


  };



 

  ngOnInit(){
     this.getLocalGovtInfo();
     this.fetchStates();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.localGovtSrv.updateLocalGovtInfo(this.localGovt);

  }

  
}
