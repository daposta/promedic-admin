import { Component } from '@angular/core';

import { TestCenterService} from '../services/test-center.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/test-center-edit.html',
  providers : [TestCenterService, StateService
    ]
})


export class TCEditComponent {

  tc: any= {};
  states: any[];
  error: any;  
  

  constructor(private tcSrv : TestCenterService,private _stateService : StateService,  private route: ActivatedRoute){

  }

  

  getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }



  getTCInfo(){
     this.route.params.switchMap((params: Params) => 
       this.tcSrv.findTCByID(+ params['id']))
     .subscribe(
       data => {
         this.tc = data;
         this.tc.myState = data.state.id;
         
       });


  };



 

  ngOnInit(){
     this.getTCInfo();
     this.getStates()
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.tcSrv.updateTCInfo(this.tc);

  }

  
}
