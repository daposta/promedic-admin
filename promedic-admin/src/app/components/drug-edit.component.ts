import { Component } from '@angular/core';
import {DrugService} from '../services/drugs.srv';
import {DrugBrandService} from '../services/drug-brand.srv';
import {DrugDispenseTypeService} from '../services/dispense-type.srv';
import {DrugFormService} from '../services/drug-form.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DrugContraIndicationService} from '../services/drug-contraindication.srv';
import {DrugClassificationService} from '../services/drug-classification.srv';
import {DrugIndicationService} from '../services/drug-indication.srv';
import {SideEffectService} from '../services/side-effect.srv';


@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/drug-edit.html',
  providers : [DrugService, DrugBrandService, DrugDispenseTypeService, DrugFormService ,DrugClassificationService,
    DrugIndicationService, DrugContraIndicationService, SideEffectService ]
})


export class DrugEditComponent {

  error: any;
  brands: any[];
  dispense_types: any[];
  drug_classifications: any[];
  drug_indications: any[];
  drug_contraindications: any[];
  side_effects : any[];
  drug_forms : any[];
  drug: any= {};

  constructor(private _brandService : DrugBrandService, private _dispenseType : DrugDispenseTypeService,
     private _drugService: DrugService,  private _drugFormService : DrugFormService,
      private route: ActivatedRoute,  private _drugIndicationSrv: DrugIndicationService,
     private _drugClassificationSrv: DrugClassificationService, private _drugContraIndicationSrv: DrugContraIndicationService,
     private _sideEffectSrv: SideEffectService){

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


  getDrugInfo(){
     this.route.params.switchMap((params: Params) => 
       this._drugService.findDrugByID(+ params['id']))
     .subscribe(
       data =>{ 
         this.drug = data;
          this.drug.temp_dispense_type = data.dispense_type.id;
          this.drug.temp_form = data.form.id;

           let temp_brands = [];
         data.brand.forEach(function(item:any){
           temp_brands.push(item.id);
         });
         this.drug.temp_brands = temp_brands;

         let temp_indications = [];
         data.indications.forEach(function(item:any){
           temp_indications.push(item.id);
         });
         this.drug.temp_indications = temp_indications;
         let contra_indications = [];
         data.contra_indications.forEach(function(item:any){
           contra_indications.push(item.id);
         });
         this.drug.temp_contra_indications = contra_indications;

         let side_effects_list = [];
         data.side_effects.forEach(function(item:any){
           side_effects_list.push(item.id);
         });
         this.drug.temp_side_effects = side_effects_list;

          let temp_classifications = [];
         data.classifications.forEach(function(item:any){
            temp_classifications.push(item.id);
         });
         this.drug.temp_classifications = temp_classifications;

       });
  }
 


  ngOnInit(){
     this.getDrugInfo()
     this.getBrands();
     this.getDispenseTypes();
     this.getDrugForms();
     this.getDrugClassifications();
     this.getDrugIndications();
     this.getContraIndications();
     this.getSideEffects();
    
  }


  onSubmit(){
    this._drugService.updateDrugInfo(this.drug);

  }

  
}
