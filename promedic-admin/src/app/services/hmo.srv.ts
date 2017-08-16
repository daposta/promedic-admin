import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions , URLSearchParams} from '@angular/http';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HMOService {
  private hmoURL =   this.globals.HMOS_URL;
  v = localStorage.getItem('auth_token');
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
  'Authorization': 'JWT ' +this.v
  })});

  constructor(private http: Http, private globals: Globals,  private router:Router, 
    private toasterService: ToasterService) { }

  getHMOs() {
    let v = this.page_header();
    return this.http.get(this.hmoURL, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  findHMOByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.hmoURL + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  updateHMOInfo(hmo:any= {}){
     let v = this.page_header();
    //let _data = JSON.stringify(hmo);
    if (hmo){
        this.http.patch(this.hmoURL + hmo.id + '/', hmo, v).subscribe(
           data => {

             this.toasterService.pop('success', 'HMO Info updated', '');
              this.router.navigateByUrl('hmos');
            
           },
           error => console.log(error.json().message)
        )
    }
     

  };

  searchHMO(hmo:string){
      let params = new URLSearchParams();
    params.append('hmo', hmo);
    this.options.search = params;
     return this.http.get(this.hmoURL ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  saveHMO(data: any){
    let _data = JSON.stringify(data);
    let v = this.page_header();
     this.http.post(this.hmoURL, data, v).subscribe(
         data => {

           this.toasterService.pop('success', 'HMO saved', '');
             this.router.navigateByUrl('hmos');
         },
         error => console.log(error.json().message)
      )

  };



  deleteHMO(pk: any){
    let v = this.page_header();
     return this.http.delete(this.hmoURL + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this.toasterService.pop('success', 'HMO deleted!', '');
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
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}