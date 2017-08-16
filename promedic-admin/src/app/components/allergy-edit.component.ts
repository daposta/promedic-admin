import { Component } from '@angular/core';

import { AllergyService} from '../services/allergies.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/allergy-edit.html',
  providers : [AllergyService, 
    ]
})


export class AllergyEditComponent {

  allergy: any= {};
  error: any;	
  

  constructor(private allergySrv : AllergyService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getAllergyInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.allergySrv.findAllergyByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.allergy = data;
		 		
		 	});


  };

 

  ngOnInit(){
     this.getAllergyInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.allergySrv.updateAllergyInfo(this.allergy);

  }

  
}
