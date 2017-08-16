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


export class AllergyFormComponent {

  allergy: any= {};
  error: any;	
  

  constructor(private allergySrv : AllergyService, private route: ActivatedRoute){

  }

  


  ngOnInit(){
    
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.allergySrv.saveAllergy(this.allergy);

  }

  
}
