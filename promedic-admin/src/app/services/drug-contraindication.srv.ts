import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class DrugContraIndicationService {
  private contraIndicationsURL =  this.globals.DRUGS_CONTRAINDICATIONS_URL;

  constructor(private http: Http, private router:Router, private globals: Globals) { }

  getDrugContraIndications() {
      let v = this.page_header();
    return this.http.get(this.contraIndicationsURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


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