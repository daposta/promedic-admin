import { Component } from '@angular/core';

import { TestCenterService} from '../services/test-center.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/new-test-center.html',
  providers : [TestCenterService, StateService
    ]
})


export class NewTCComponent {

  tc: any= {};
  error: any;	
  states: any[];
  

  constructor(private tcSrv : TestCenterService,private _stateService : StateService, private route: ActivatedRoute){

  }

  getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }

  


  ngOnInit(){
     this.getStates();
     
  }


  onSubmit(){
    this.tcSrv.saveTC(this.tc);

  }

  
}
