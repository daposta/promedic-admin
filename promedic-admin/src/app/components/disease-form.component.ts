import { Component } from '@angular/core';

import { DiseaseService} from '../services/disease.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/disease-form.html',
  providers : [DiseaseService, 
    ]
})


export class DiseaseFormComponent {

  disease: any= {};
  error: any;	
  

  constructor(private diseaseSrv : DiseaseService, private route: ActivatedRoute){

  }

  


  ngOnInit(){
    
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.diseaseSrv.saveDisease(this.disease);

  }

  
}
