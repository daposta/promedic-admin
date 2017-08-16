import { Component } from '@angular/core';

import { StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/state-edit.html',
  providers : [StateService, 
    ]
})


export class StateEditComponent {

  state: any= {};
  error: any;	
  

  constructor(private stateSrv : StateService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getAllergyInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.stateSrv.findStateByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.state = data;
		 		
		 	});


  };

 

  ngOnInit(){
     this.getAllergyInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.stateSrv.updateStateInfo(this.state);

  }

  
}
