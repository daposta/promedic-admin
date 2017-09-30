import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class SubscriberService {
  private subscribersURL =this.globals.SUBSCRIBERS_URL;
  
   v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http,  private globals: Globals, 
    private router:Router, private toasterService: ToasterService) { }

  getSubscribers() {
     let v = this.page_header();
    return this.http.get(this.subscribersURL, v)
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


  findAllergyByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.subscribersURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  updateAllergyInfo(allergy:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(allergy);
    if (allergy){
        this.http.patch(this.subscribersURL + allergy.id + '/', allergy, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Subscriber Info updated', '');
              this.router.navigateByUrl('allergies');
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


  searchSubscriber(allergy:string){
      let params = new URLSearchParams();
    params.append('email', allergy);
    this.options.search = params;
    return this.http.get(this.subscribersURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  saveSubscriber(data: any){
    let _data = JSON.stringify(data);
    let v = this.page_header();
     this.http.post(this.subscribersURL, data, v).subscribe(
         data => {

           this.toasterService.pop('success', 'Subscriber saved', '');
             this.router.navigateByUrl('subscribers');
         },
         error => console.log(error.json().message)
      )

  };


  deleteSubscriber(pk: any){
    let v = this.page_header();
     return this.http.delete(this.subscribersURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Subscriber deleted!', '');
              })
              .catch(this.handleError);

  };




  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}