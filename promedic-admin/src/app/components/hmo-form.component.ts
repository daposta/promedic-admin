import { Component } from '@angular/core';

import { HMOService} from '../services/hmo.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/hmo-form.html',
  providers : [HMOService, 
    ]
})


export class HMOFormComponent {

  hmo: any= {};
  error: any;	
  

  constructor(private hmoSrv : HMOService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  

 

  ngOnInit(){
     
     
  }


  onSubmit(){
    this.hmoSrv.saveHMO(this.hmo);

  }

  
}
