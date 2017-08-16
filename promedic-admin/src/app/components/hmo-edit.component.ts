import { Component } from '@angular/core';

import { HMOService} from '../services/hmo.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/hmo-edit.html',
  providers : [HMOService, 
    ]
})


export class HMOEditComponent {

  hmo: any= {};
  error: any;  
  

  constructor(private hmoSrv : HMOService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getHMOInfo(){
     this.route.params.switchMap((params: Params) => 
       this.hmoSrv.findHMOByID(+ params['id']))
     .subscribe(
       data => {
         this.hmo = data;
         
       });


  };

 

  ngOnInit(){
     this.getHMOInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.hmoSrv.updateHMOInfo(this.hmo);

  }

  
}
