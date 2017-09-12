import { Component } from '@angular/core';

import { PartnerService} from '../services/partner.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/new-partner.html',
  providers : [PartnerService, StateService
    ]
})


export class NewPartnerComponent {

  partner: any= {};
  error: any;	
  states: any[];
  

  constructor(private partnerSrv : PartnerService,private _stateService : StateService, private route: ActivatedRoute){

  }

   getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }

  
  

  ngOnInit(){
    
         this.getStates();

     
  }


  onSubmit(){
    this.partnerSrv.savePartner(this.partner);

  }

  
}
