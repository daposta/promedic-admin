import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {BodyOutputType} from 'angular2-toaster';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestCenterService {
  private testCenterURL =  this.globals.TEST_CENTERS_URL; 

  private toasterService: ToasterService;
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});
  

  constructor(private http: Http, private router:Router, _toasterService: ToasterService, private globals: Globals) { 
      this.toasterService = _toasterService;
  }

  getTCs() {
     let v = this.page_header();
   return this.http.get(this.testCenterURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };



  saveTC(data: any){
    let _data = JSON.stringify(data);
     this.http.post(this.testCenterURL, data).subscribe(
         data => {

           this.toasterService.pop('success', 'Drug saved', '');
             this.router.navigateByUrl('/drugs');
         },
         error => console.log(error.json().message)
      )

  };

  findTCByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.testCenterURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  searchTC(tc:string){
      let params = new URLSearchParams();
    params.append('tc', tc);
    this.options.search = params;
     return this.http.get(this.testCenterURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


   deleteTC(pk: any){
    let v = this.page_header();
     return this.http.delete(this.testCenterURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Test Center deleted!', '');
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