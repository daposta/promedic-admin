import { Component } from '@angular/core';
import {ResponderService} from '../services/responders.srv';
import {StateService} from '../services/states.srv';
import {LocalGovtService} from '../services/local_govts.srv';
import {KitService} from '../services/kit.srv';
import {ConcentrationService} from '../services/concentration.srv';
import { GenderService } from '../services/gender.srv';


@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/responder-form.html',
  providers : [ResponderService, StateService, LocalGovtService, ConcentrationService, GenderService,
  KitService
    ]
})


export class ResponderFormComponent {

  error: any;
  brands: any[];
  states: any[];
  local_govts: any[];
  genders: any[];
  concentrations: any[];
  kits: any[];
  responder : any = {};

  constructor(private _stateService : StateService, private _localGovtService : LocalGovtService,
     private _responderService: ResponderService, private _concentrationService:ConcentrationService,
      private _kitSrv: KitService, private _genderSrv :GenderService  ){

  }

  getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }


  getGenders(){
      this._genderSrv.getGenders().then(genders => this.genders = genders)
            .catch(error => this.error = error);
  }

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }

  fetchLGA(state:any){
   
    this.local_govts = [];
   this._localGovtService.findLocalGovtByStateID(state)
   .then(local_govts => 
     this.local_govts = local_govts

     )
            .catch(error => this.error = error);
  }


  fetchConcentrations(){
    this._concentrationService.getConcentrations().then(concentrations => this.concentrations = concentrations)
    .catch(error => this.error = error);
  }

  fetchKits(){
    this._kitSrv.getKits().then(kits => this.kits = kits)
    .catch(error => this.error = error);
  }
 

  ngOnInit(){
     
     this.getStates();
     this.fetchConcentrations();
     this.fetchKits();
    this.getGenders();
     
  }


  onSubmit(){
    this._responderService.saveResponder(this.responder);

  }

  
}
