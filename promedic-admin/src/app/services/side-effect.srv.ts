import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class SideEffectService {

  private sideEffectsURL = this.globals.SIDEFFECTS_URL;

  constructor(private http: Http, private router: Router,  private globals: Globals) { }

  getSideEffect() {
     let v = this.page_header();
    return this.http.get(this.sideEffectsURL, v)
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
    var err = error.json();
    if(error.detail = "Signature has expired."){
      localStorage.removeItem('auth_token');
      this.router.navigateByUrl('/login');
    }
    return Promise.reject(error.message || error);
  }
}