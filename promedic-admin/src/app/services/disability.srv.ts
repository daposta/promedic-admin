import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class DisabilityService {
  private disabilityURL = this.globals.DISABILITY_URL;
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http, private router: Router,  private globals: Globals, 
    private toasterService: ToasterService) { }

  getDisability() {
     let v = this.page_header();
    return this.http.get(this.disabilityURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }


  findDisabilityByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.disabilityURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

   updateDisabilityInfo(disability:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(disability);
    if (disability){
        this.http.patch(this.disabilityURL + disability.id + '/', disability, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Disability Info updated', '');
              this.router.navigateByUrl('disabilities');
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


   searchDisability(disability:string){
      let params = new URLSearchParams();
    params.append('disability', disability);
    this.options.search = params;
     return this.http.get(this.disabilityURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  saveDisability(data: any){
    let _data = JSON.stringify(data);
    let v = this.page_header();
     this.http.post(this.disabilityURL, data, v).subscribe(
         data => {

           this.toasterService.pop('success', 'Disability saved', '');
             this.router.navigateByUrl('disabilities');
         },
         error => console.log(error.json().message)
      )

  };



   deleteDisability(pk: any){
    let v = this.page_header();
     return this.http.delete(this.disabilityURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Disability deleted!', '');
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