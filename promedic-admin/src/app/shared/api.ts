// const PRODUCTION_URL='';
// const DEV_URL = 'http://127.0.0.1:8000/api';
// const CREATE_DRUG_ENDPOINT = DEV_URL + '/core/drugs/';



import { Injectable } from '@angular/core';

Injectable()
export class Globals{
	HOST_URL = 'http://139.162.213.237:8002';  //'http://0.0.0.0:8002'; //  
	LOGIN_URL =  this.HOST_URL + '/api/core/api-token-auth/';
    LOGOUT_URL = this.HOST_URL + '/client/api/logout/';
    DASHBOARD_URL = this.HOST_URL + '/api/medic/dashboard_data/';//'http://139.162.213.237:8002/api/medic/dashboard_data/';
    STATES_URL = this.HOST_URL + '/api/core/states/';
    RESPONDERS_URL =  this.HOST_URL + '/api/core/responders/';
    CLIENTS_URL =  this.HOST_URL + '/api/core/clients/';
    RESPONDER_PHOTO_URL =  this.HOST_URL + '/api/core/responder_profile_pic/';
    RESPONDER_SUPPORT_DOCS_URL = this.HOST_URL + '/api/core/responder_docs/';
    BLOOD_GRPS_URL =  this.HOST_URL + '/api/core/blood_groups/';
    CONCENTRATIONS_URL =  this.HOST_URL + '/api/core/concentrations/';
    ALLERGIES_URL =  this.HOST_URL + '/api/core/allergies/';
    DISEASE_URL =  this.HOST_URL + '/api/core/diseases/';
    GENOTYPES_URL =  this.HOST_URL + '/api/core/genotypes/';
    DRUGS_URL =  this.HOST_URL + '/api/core/drugs/';
    DRUG_FORM_URL =  this.HOST_URL + '/api/core/drug_forms/';
    DRUGS_CONTRAINDICATIONS_URL =  this.HOST_URL + '/api/core/drug_contraindications/';
    DRUG_INDICATIONS_URL =  this.HOST_URL + '/api/core/drug_indications/';
    DRUG_CLASSIFICATIONS_URL =  this.HOST_URL + '/api/core/drug_classifications/';
    KITS_URL =  this.HOST_URL + '/api/core/kits/';
    LOCAL_GOVTS_URL =  this.HOST_URL + '/api/core/local_govts/';
    LOCAL_GOVTS_FILTER_URL =  this.HOST_URL + '/api/core/local_govt_state/';
    DISPENSE_TYPE_URL =  this.HOST_URL + '/api/core/drug_dispense_types/';
    DRUG_BRANDS_URL =  this.HOST_URL + '/api/core/drug_brands/';
    DISABILITY_URL =  this.HOST_URL + '/api/core/disabilities/';
    DOC_TYPES_URL =  this.HOST_URL + '/api/core/doc_types/';
    SIDEFFECTS_URL =  this.HOST_URL + '/api/core/side_effects/';
    HMOS_URL =  this.HOST_URL + '/api/core/hmos/';
    PARTNERS_URL =  this.HOST_URL + '/api/core/partners/';
    TEST_CENTERS_URL =  this.HOST_URL + '/api/core/test_centers/';
    GENDER_URL =  this.HOST_URL + '/api/core/genders/';
    USERS_URL =  this.HOST_URL + '/api/core/users/';

}
