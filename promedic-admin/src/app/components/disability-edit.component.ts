import { Component } from '@angular/core';


import { DisabilityService} from '../services/disability.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/disability-edit.html',
  providers : [DisabilityService, 
    ]
})


export class DisabilityEditComponent {

  disability: any= {};
  error: any;	
  

  constructor(private disabilitySrv : DisabilityService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getDisabilityInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.disabilitySrv.findDisabilityByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.disability = data;
		 		
		 	});


  };

 

  ngOnInit(){
     this.getDisabilityInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.disabilitySrv.updateDisabilityInfo(this.disability);

  }

  
}
