import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class StateService {
  private statesURL = this.globals.STATES_URL;  //'http://139.162.213.237:8002/api/core/states/';
   v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});
  

  constructor(private http: Http,  private router:Router,  private globals: Globals,
    private toasterService: ToasterService) {
     
   }

  getStates() {
     let v = this.page_header();
    
    return this.http.get(this.statesURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  findStateByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.statesURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


  updateStateInfo(state:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(state);
    if (state){
        this.http.patch(this.statesURL + state.id + '/', state, v).subscribe(
           data => {

             this.toasterService.pop('success', 'State Info updated', '');
              this.router.navigateByUrl('states');
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


   searchState(state:string){
      let params = new URLSearchParams();
    params.append('state', state);
    this.options.search = params;
    console.log()
     return this.http.get(this.statesURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  deleteState(pk: any){
    let v = this.page_header();
     return this.http.delete(this.statesURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'State deleted!', '');
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