import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {BodyOutputType} from 'angular2-toaster';

import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class ResponderService {
  private responderURL =  this.globals.RESPONDERS_URL; // 'http://139.162.213.237:8002/api/core/responders/';
  private toasterService: ToasterService;
  private responderPhotoURL =  this.globals.RESPONDER_PHOTO_URL; //'http://139.162.213.237:8002/api/core/responder_profile_pic/';
     
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http, private router:Router, _toasterService: ToasterService,
   private globals: Globals) { 
      this.toasterService = _toasterService;
  }

  getResponders() {
    let v = this.page_header();
   return this.http.get(this.responderURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };



  saveResponder(data: any){
     let v = this.page_header();
    let _data = JSON.stringify(data);
     this.http.post(this.responderURL, data, v).subscribe(
         data => {

           this.toasterService.pop('success', 'Responder saved', '');
             this.router.navigateByUrl('/responders');
         },
         error => console.log(error.json().message)
      )

  };

   updateResponderInfo(responder:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(responder);
    if (responder){
        this.http.patch(this.responderURL + responder.id + '/', responder, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Responder Info updated', '');
              this.router.navigateByUrl('responder/' + responder.id);
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


   deleteResponder(pk: any){
    let v = this.page_header();
     return this.http.delete(this.responderURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Responder deleted!', '');
              })
              .catch(this.handleError);

  };



  findResponderByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.responderURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


  uploadResponderPhoto(responder:any= {}, data:any){
     let v = this.page_header();
    let _data = JSON.stringify(data);
    if (responder){
        this.http.patch(this.responderPhotoURL + responder.id + '/', data, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Responder photo saved', '');
             let res =  data.json();
           
            if (responder){
             responder.image_url =res;
            }
             
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


  searchResponder(q:string){
      let params = new URLSearchParams();
    params.append('responder', q);
    this.options.search = params;
     return this.http.get(this.responderURL ,this.options)
              .toPromise()
              .then(response => response.json())
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