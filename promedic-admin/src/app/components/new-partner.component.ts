import { Component } from '@angular/core';

import { PartnerService} from '../services/partner.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/new-partner.html',
  providers : [PartnerService, 
    ]
})


export class NewPartnerComponent {

  partner: any= {};
  error: any;	
  

  constructor(private partnerSrv : PartnerService, private route: ActivatedRoute){

  }

  


  ngOnInit(){
    
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.partnerSrv.savePartner(this.partner);

  }

  
}
