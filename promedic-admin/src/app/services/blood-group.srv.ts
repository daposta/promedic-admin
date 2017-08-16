import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions , URLSearchParams} from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Globals } from '../shared/api';

@Injectable()
export class BloodGroupService {
  private bloodGrpURL = this.globals.BLOOD_GRPS_URL;//'http://139.162.213.237:8002/api/core/blood_groups/';

  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http,  private globals: Globals, 
    private router:Router, private toasterService: ToasterService) { }

  getBloodGroup() {
     let v = this.page_header();
    return this.http.get(this.bloodGrpURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  findBloodGrpByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.bloodGrpURL + pk +'/', v)
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
  };


  
  updateBloodGrpInfo(bloodGrp:any= {}){
     let v = this.page_header();
    let _data = JSON.stringify(bloodGrp);
    if (bloodGrp){
        this.http.patch(this.bloodGrpURL + bloodGrp.id + '/', bloodGrp, v).subscribe(
           data => {

             this.toasterService.pop('success', 'Responder Info updated', '');
              this.router.navigateByUrl('blood_group/' + bloodGrp.id);
            
           },
           error => console.log(error.json().message)
        )
    }

   };

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  };
}