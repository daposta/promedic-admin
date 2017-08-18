import { Component } from '@angular/core';

import { HMOService} from '../services/hmo.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/hmo-form.html',
  providers : [HMOService, StateService
    ]
})


export class HMOFormComponent {

  hmo: any= {};
  states: any[];
  error: any;	
  

  constructor(private hmoSrv : HMOService, private _stateService : StateService, private route: ActivatedRoute){

  }

  
 getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }


  

 

  ngOnInit(){
      this.getStates();
     
  }


  onSubmit(){
    this.hmoSrv.saveHMO(this.hmo);

  }

  
}
