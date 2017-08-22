import { Component } from '@angular/core';

import { HMOService} from '../services/hmo.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/hmo-edit.html',
  providers : [HMOService, StateService
    ]
})


export class HMOEditComponent {

  hmo: any= {};
  states: any[];
  error: any;  
  

  constructor(private hmoSrv : HMOService,private _stateService : StateService,  private route: ActivatedRoute){

  }

  

  getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }



  getHMOInfo(){
     this.route.params.switchMap((params: Params) => 
       this.hmoSrv.findHMOByID(+ params['id']))
     .subscribe(
       data => {
         this.hmo = data;
         console.log(data.state.id);
         this.hmo.myState = data.state.id;
         
       });


  };



 

  ngOnInit(){
     this.getHMOInfo();
     this.getStates()
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.hmoSrv.updateHMOInfo(this.hmo);

  }

  
}
