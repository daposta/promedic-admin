import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class LocalGovtService  {
  private localGovtURL =  this.globals.LOCAL_GOVTS_URL; 
  private localGovtFilterURL = this.globals.LOCAL_GOVTS_FILTER_URL;


  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

 
   
 
  constructor(private http: Http,  private router:Router, private globals: Globals, 
    private toasterService: ToasterService) { }

  getLocalGovts() {
     let v = this.page_header();
    return this.http.get(this.localGovtURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  findLocalGovtByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.localGovtURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  findLocalGovtByStateID(pk: any){
    let params = new URLSearchParams();
    params.append('state', pk);
    this.options.search = params;
     return this.http.get(this.localGovtFilterURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  searchLocalGovts(lg:string){
      let params = new URLSearchParams();
    params.append('lg', lg);
    this.options.search = params;
    console.log()
     return this.http.get(this.localGovtURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


   updateLocalGovtInfo(localGovt:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(localGovt);
    if (localGovt){
        this.http.patch(this.localGovtURL + localGovt.id + '/', localGovt, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Local Government Info updated', '');
              this.router.navigateByUrl('local_govts' );
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


  deleteLocalGovt(pk: any){
    let v = this.page_header();
     return this.http.delete(this.localGovtURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Local Government deleted!', '');
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