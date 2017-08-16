import { Component } from '@angular/core';

import { DisabilityService} from '../services/disability.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/disability-form.html',
  providers : [DisabilityService, 
    ]
})


export class DisabilityFormComponent {

  disability: any= {};
  error: any;	
  

  constructor(private disabilitySrv : DisabilityService, private route: ActivatedRoute){

  }

  


  ngOnInit(){
    
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.disabilitySrv.saveDisability(this.disability);

  }

  
}
