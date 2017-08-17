import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {BodyOutputType} from 'angular2-toaster';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PartnerService {
  private partnerURL =  this.globals.PARTNERS_URL; 

  private toasterService: ToasterService;
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});
  

  constructor(private http: Http, private router:Router, _toasterService: ToasterService, private globals: Globals) { 
      this.toasterService = _toasterService;
  }

  getPartners() {
     let v = this.page_header();
   return this.http.get(this.partnerURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };



  savePartner(data: any){
    let _data = JSON.stringify(data);
     this.http.post(this.partnerURL, data).subscribe(
         data => {

           this.toasterService.pop('success', 'Partner saved', '');
             this.router.navigateByUrl('/partners');
         },
         error => console.log(error.json().message)
      )

  };

  findPartnerByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.partnerURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  searchPartner(partner:string){
      let params = new URLSearchParams();
    params.append('partner', partner);
    this.options.search = params;
     return this.http.get(this.partnerURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  deletePartner(pk: any){
    let v = this.page_header();
     return this.http.delete(this.partnerURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Partner deleted!', '');
              })
              .catch(this.handleError);

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
    var err = error.json();
    if(error.detail = "Signature has expired."){
      localStorage.removeItem('auth_token');
      this.router.navigateByUrl('/login');
    }
    return Promise.reject(error.message || error);
  }
}