import { Component } from '@angular/core';
import {DrugService} from '../services/drugs.srv';
import {DrugBrandService} from '../services/drug-brand.srv';
import {DrugDispenseTypeService} from '../services/dispense-type.srv';
import {DrugFormService} from '../services/drug-form.srv';
import {DrugContraIndicationService} from '../services/drug-contraindication.srv';
import {DrugClassificationService} from '../services/drug-classification.srv';
import {DrugIndicationService} from '../services/drug-indication.srv';
import {SideEffectService} from '../services/side-effect.srv';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/drug-form.html',
  providers : [DrugService, DrugBrandService, DrugDispenseTypeService, DrugFormService,DrugClassificationService,
    DrugIndicationService, DrugContraIndicationService, SideEffectService

    ]
})


export class DrugFormComponent {

  error: any;
  brands: any[];
  dispense_types: any[];
  drug_classifications: any[];
  drug_indications: any[];
  drug_contraindications: any[];
  drug_forms : any[];
  side_effects : any[];
  drug : Object = {};

  constructor(private _brandService : DrugBrandService, private _dispenseType : DrugDispenseTypeService,
     private _drugService: DrugService,  private _drugFormService : DrugFormService, private _drugIndicationSrv: DrugIndicationService,
     private _drugClassificationSrv: DrugClassificationService, private _drugContraIndicationSrv: DrugContraIndicationService,
     private _sideEffectSrv: SideEffectService
     ){

  }

  getBrands(){
      this._brandService.getDrugBrands().then(brands => this.brands = brands)
            .catch(error => this.error = error);
  }

  getDispenseTypes(){
    this._dispenseType.getDispenseType().then(dispense_types => this.dispense_types = dispense_types)
            .catch(error => this.error = error);
  }

  getDrugForms(){
    this._drugFormService.getDrugForms().then(drug_forms => this.drug_forms = drug_forms)
            .catch(error => this.error = error);
  };

  getDrugClassifications(){
    this._drugClassificationSrv.getDrugClassifications().then(response => this.drug_classifications = response)
            .catch(error => this.error = error);
  }


  getDrugIndications(){
      this._drugIndicationSrv.getDrugIndications().then(response => this.drug_indications = response)
            .catch(error => this.error = error);
  };


  getContraIndications(){
      this._drugContraIndicationSrv.getDrugContraIndications().then(response => this.drug_contraindications = response)
            .catch(error => this.error = error);
  };

  getSideEffects(){
      this._sideEffectSrv.getSideEffect().then(response => this.side_effects = response)
            .catch(error => this.error = error);
  };





  ngOnInit(){
     
     this.getBrands();
     this.getDispenseTypes();
     this.getDrugForms();
     this.getDrugClassifications();
     this.getDrugIndications();
     this.getContraIndications();
     this.getSideEffects();
    
  }


  onSubmit(){

    
   
    this._drugService.saveDrug(this.drug);

  }

  
}
