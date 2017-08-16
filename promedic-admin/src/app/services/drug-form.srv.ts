import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class DrugFormService {
  private dfURL =  this.globals.DRUG_FORM_URL;

  constructor(private http: Http, private router:Router, private globals: Globals,
     private toasterService: ToasterService) { }

  getDrugForms() {
     let v = this.page_header();
    return this.http.get(this.dfURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


findDrugByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.dfURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  updateDrugInfo(drug:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(drug);
    if (drug){
        this.http.patch(this.dfURL + drug.id + '/', drug, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Drug Info updated', '');
              this.router.navigateByUrl('responder/' + drug.id);
            
           },
           error => console.log(error.json().message)
        )
    }

  };

   private page_header(){
     let data =  localStorage.getItem('auth_token');
      let headers = new Headers();
      let opt: RequestOptions;
      headers.append('Authorization', 'JWT ' + data );
      opt = new RequestOptions({headers: headers})  ;
      return opt;
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}