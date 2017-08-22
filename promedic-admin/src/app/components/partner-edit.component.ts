import { Component } from '@angular/core';

import { PartnerService} from '../services/partner.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/partner-edit.html',
  providers : [PartnerService, StateService
    ]
})


export class PartnerEditComponent {

  partner: any= {};
  states: any[];
  error: any;  
  

  constructor(private partnerSrv : PartnerService,private _stateService : StateService,  private route: ActivatedRoute){

  }

  

  getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }



  getPartnerInfo(){
     this.route.params.switchMap((params: Params) => 
       this.partnerSrv.findPartnerByID(+ params['id']))
     .subscribe(
       data => {
          this.partner = data;
         this.partner.myState = data.state.id;
         
       });


  };



 

  ngOnInit(){
     this.getPartnerInfo();
     this.getStates()
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.partnerSrv.updatePartnerInfo(this.partner);

  }

  
}
