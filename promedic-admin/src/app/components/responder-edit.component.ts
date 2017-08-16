import { Component } from '@angular/core';
import {ResponderService} from '../services/responders.srv';
import {StateService} from '../services/states.srv';
import {LocalGovtService} from '../services/local_govts.srv';
import {KitService} from '../services/kit.srv';
import {ConcentrationService} from '../services/concentration.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/responder-edit.html',
  providers : [ResponderService, StateService, LocalGovtService, ConcentrationService,
  KitService
    ]
})


export class ResponderEditComponent {

  responder: any= {};
  error: any;	
  brands: any[];
  states: any[];
  local_govts: any[];
  concentrations: any[];
  kits: any[];

  constructor(private _stateService : StateService, private _localGovtService : LocalGovtService,
     private _responderService: ResponderService, private _concentrationService:ConcentrationService,
      private _kitSrv: KitService , private route: ActivatedRoute){

  }

  getStates(){
      this._stateService.getStates().then(states => this.states = states)
            .catch(error => this.error = error);
  }

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }

  fetchLGA(state:any){
   this._localGovtService.findLocalGovtByStateID(state).then(local_govts => this.local_govts = local_govts)
            .catch(error => this.error = error);
  }


  fetchConcentrations(){
    this._concentrationService.getConcentrations().then(concentrations => this.concentrations = concentrations)
    .catch(error => this.error = error);
  }

  fetchKits(){
    this._kitSrv.getKits().then(kits => this.kits = kits)
    .catch(error => this.error = error);
  };

  getResponderInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this._responderService.findResponderByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.responder = data;
		 		this.responder.state = data.state.id ;
		 		if(this.responder.state){
		 			this.fetchLGA(this.responder.state);
		 		}
		 		this.responder.lga = data.local_govt.id ;
		 		let aocs : any[];
		 		data.areas_of_concentration.forEach(function(item:any){
		 			aocs.push(item.id);
		 		});
		 		this.responder.aocs = aocs;
		 		let res_kits :any[];
		 		data.kits.forEach(function(item:any){
		 			res_kits.push(item.id);
		 		});
		 		this.responder.res_kits = res_kits;
		 	});


  };

 



  ngOnInit(){
     this.getResponderInfo();
     this.getStates();
     this.fetchConcentrations();
     this.fetchKits();
    // this.fetchLGA();
     
  }


  onSubmit(){
    this._responderService.updateResponderInfo(this.responder);

  }

  
}
