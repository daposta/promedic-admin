import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DiseaseService {
  private diseasesURL =  this.globals.DISEASE_URL; 
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http,  private router:Router, private globals: Globals
    , private toasterService: ToasterService) { }

  getDiseases() {
      let v = this.page_header();

    return this.http.get(this.diseasesURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  findDiseaseByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.diseasesURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


 saveDisease(data: any){
    let _data = JSON.stringify(data);
    let v = this.page_header();
     this.http.post(this.diseasesURL, data, v).subscribe(
         data => {

           this.toasterService.pop('success', 'Disease saved', '');
             this.router.navigateByUrl('diseases');
         },
         error => console.log(error.json().message)
      )

  };


    searchDisease(disease:string){
      let params = new URLSearchParams();
    params.append('disease', disease);
    this.options.search = params;
     return this.http.get(this.diseasesURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


   updateDiseaseInfo(disease:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(disease);
    if (disease){
        this.http.patch(this.diseasesURL + disease.id + '/', disease, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Disease Info updated', '');
              this.router.navigateByUrl('diseases');
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };


   deleteDisease(pk: any){
    let v = this.page_header();
     return this.http.delete(this.diseasesURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'Disease deleted!', '');
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