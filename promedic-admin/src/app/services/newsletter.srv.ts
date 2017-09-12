import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {BodyOutputType} from 'angular2-toaster';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsletterService {
  private newslettersURL =  this.globals.NEWSLETTERS_URL; 
  private newsletterStateURL = this.globals.NEWSLETTER_STATE_URL;

  private toasterService: ToasterService;
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});
  

  constructor(private http: Http, private router:Router, _toasterService: ToasterService, private globals: Globals) { 
      this.toasterService = _toasterService;
  }

  getNewsletters() {
     let v = this.page_header();
   return this.http.get(this.newslettersURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };



  saveNewsletter(data: any){
    let _data = JSON.stringify(data);
     this.http.post(this.newslettersURL, data).subscribe(
         data => {

           this.toasterService.pop('success', 'Newsletter saved', '');
             this.router.navigateByUrl('/newsletters');
         },
         error => console.log(error.json().message)
      )

  };

  findNewsletterByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.newslettersURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  searchNewsletter(newsletter:string){
      let params = new URLSearchParams();
    params.append('newsletter', newsletter);
    this.options.search = params;
     return this.http.get(this.newslettersURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  updateNewsletterInfo(newsletter:any= {}){
     let v = this.page_header();
    //let _data = JSON.stringify(hmo);
    if (newsletter){
        this.http.patch(this.newslettersURL + newsletter.id + '/', newsletter, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Newsletter Info updated', '');
             // this.router.navigateByUrl('Drug');
             this.router.navigateByUrl('/newsletter/' +newsletter.id);
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };

  changeNewsletterState(newsletter:any= {}){
     let v = this.page_header();
    //let _data = JSON.stringify(hmo);
    if (newsletter){
        this.http.patch(this.newsletterStateURL + newsletter.id + '/', newsletter, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Newsletter Status Changed', '');
             newsletter.state = newsletter.status;
            // this.router.navigateByUrl('/newsletter/' +newsletter.id);
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


  deleteNewsletter(pk: any){
    let v = this.page_header();
     return this.http.delete(this.newslettersURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Newsletter deleted!', '');
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