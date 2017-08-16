import { Component } from '@angular/core';


import { DiseaseService} from '../services/disease.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/disease-edit.html',
  providers : [DiseaseService, 
    ]
})


export class DiseaseEditComponent {

  disease: any= {};
  error: any;  
  

  constructor(private diseaseSrv : DiseaseService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getDiseaseInfo(){
     this.route.params.switchMap((params: Params) => 
       this.diseaseSrv.findDiseaseByID(+ params['id']))
     .subscribe(
       data => {
         this.disease = data;
         
       });


  };

 

  ngOnInit(){
     this.getDiseaseInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.diseaseSrv.updateDiseaseInfo(this.disease);

  }

  
}
