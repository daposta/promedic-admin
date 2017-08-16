import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {BodyOutputType} from 'angular2-toaster';

import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class ClientService {
  private clientsURL =  this.globals.CLIENTS_URL; // 'http://139.162.213.237:8002/api/core/responders/';
  private toasterService: ToasterService;
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http, private router:Router, _toasterService: ToasterService,
   private globals: Globals) { 
      this.toasterService = _toasterService;
  }

  getClients() {
    let v = this.page_header();
   return this.http.get(this.clientsURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };



  // saveClient(data: any){
  //    let v = this.page_header();
  //   let _data = JSON.stringify(data);
  //    this.http.post(this.responderURL, data, v).subscribe(
  //        data => {

  //          this.toasterService.pop('success', 'Responder saved', '');
  //            this.router.navigateByUrl('/responders');
  //        },
  //        error => console.log(error.json().message)
  //     )

  // };

  //  updateClientInfo(responder:any= {}){
  //    let v = this.page_header();
  //   let _data = JSON.stringify(responder);
  //   if (responder){
  //       this.http.patch(this.responderURL + responder.id + '/', responder, v).subscribe(
  //          data => {

  //            this.toasterService.pop('success', 'Responder Info updated', '');
  //             this.router.navigateByUrl('responder/' + responder.id);
            
  //          },
  //          error => console.log(error.json().message)
  //       )
  //   }
     

  // };


  findClientByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.clientsURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


  searchClient(client:string){
      let params = new URLSearchParams();
    params.append('client', client);
    this.options.search = params;
    console.log()
     return this.http.get(this.clientsURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


   deleteClient(pk: any){
    let v = this.page_header();
     return this.http.delete(this.clientsURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Client deleted!', '');
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