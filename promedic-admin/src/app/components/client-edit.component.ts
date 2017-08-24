import { Component } from '@angular/core';
import { ClientService} from '../services/clients.srv';

import {BloodGroupService} from '../services/blood-group.srv';
import {DisabilityService} from '../services/disability.srv';
import {GenotypeService} from '../services/genotypes.srv';
import {AllergyService} from '../services/allergies.srv';
import {DiseaseService} from '../services/disease.srv';
import {GenderService} from '../services/gender.srv';
import { HMOService} from '../services/hmo.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'client-edit',
  templateUrl: '../views/client-edit.html',
  providers : [ClientService, BloodGroupService, DisabilityService, GenotypeService, AllergyService,
  DiseaseService, GenderService, HMOService
    ]
})


export class ClientEditComponent {

  client: any= {};
  error : any;
   blood_group_list: any[];
    disability_list: any[];
    genotype_list: any[];
    allergy_list: any[];
    diseases_list: any[];
    gender_list : any[];
    side_effects : any[];
     hmo_list : any[];

  constructor(private bloodGrpSrv: BloodGroupService, private disabilitySrv:DisabilityService,
    private hmoSrv: HMOService, private _clientSrv :ClientService,
   private genotypeSrv : GenotypeService, private allergySrv: AllergyService, private diseaseSrv:DiseaseService,
   private genderSrv : GenderService, private route: ActivatedRoute){

  }

  getBloodGroups(){
      this.bloodGrpSrv.getBloodGroup().then(response =>this.blood_group_list = response)
        .catch(error => this.error = error);
      
  };

  getDisablities(){
    this.disabilitySrv.getDisability().then( response => this.disability_list = response)
    .catch(error => this.error = error);
  };


  getGenotypes(){
      this.genotypeSrv.getGenotypes().then(response => this.genotype_list = response)
        .catch(error => this.error = error);
  };

  getAllergies(){
      this.allergySrv.getAllergies().then(response => this.allergy_list = response)
        .catch(error => this.error = error);
  };

  getDiseases(){
      this.diseaseSrv.getDiseases().then(response => this.diseases_list = response)
        .catch(error => this.error = error);
  };


  getGenders(){
      this.genderSrv.getGenders().then(response => this.gender_list = response)
          .catch(error => this.error = error);
  };

  getHMOs(){
      this.hmoSrv.getHMOs().then(response =>this.hmo_list = response).
      catch(error => this.error = error);
  }

  getResponderInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this._clientSrv.findClientByID(+ params['id']))
		 .subscribe(
		 	response => {
		 		this.client = response;
        this.client.gender = response.gender.id ;
        this.client.blood_group = response.blood_group.id;
        this.client.genotype =  response.genotype ? response.genotype.id : null;
        this.client.hmo = response.hmo? response.hmo.id : null;
        let allergies_temp : any = [];
         response.allergies.forEach(function(item:any){
           allergies_temp.push(item.id);
           
         });
         this.client.allergies_list = allergies_temp;
         let disabilities_temp : any = [];
         response.disabilities.forEach(function(item:any){
           disabilities_temp.push(item.id);
           
         });
         this.client.disabilities_list = disabilities_temp;

         let diseases_temp : any = [];
         response.diseases.forEach(function(item:any){
           diseases_temp.push(item.id);
           
         });
         this.client.diseases_list = diseases_temp;
		 	});


  };

 



  ngOnInit(){
     this.getResponderInfo();
    this.getBloodGroups();
       this.getDisablities();
       this.getAllergies();
       this.getGenotypes();
      this.getDiseases();
      this.getGenders();
       this.getHMOs()
     
  }


  onSubmit(){
    this._clientSrv.updateClientInfo(this.client);

  }

  
}
