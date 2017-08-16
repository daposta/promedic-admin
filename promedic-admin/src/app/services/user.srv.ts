import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import {BodyOutputType} from 'angular2-toaster';
import { Globals } from '../shared/api';

@Injectable()
export class UserService{


	private  loggedIn = false;
	private loginUrl = this.globals.LOGIN_URL; 
	private logoutUrl = this.globals.LOGOUT_URL

	evil : any;

	constructor(private http: Http, private router:Router, private _toasterService: ToasterService, 
	 private globals: Globals){
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	login(mobile: string, password : string){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		return this.http.post(this.loginUrl,  JSON.stringify({mobile, password}), {headers})
		.subscribe(res =>{
				let data = res.json();
				if (data.token){
				localStorage.setItem('auth_token', data.token);
				this.loggedIn = true;
				this.router.navigate(['']);
				
			}
			else{
				this.router.navigate(['/login']);
			}

		}, error =>{
			//console.log(error);
			if(error['status']){
				this.evil = JSON.parse(error['_body']).non_field_errors[0];
				this._toasterService.pop('error', this.evil, '');
			}else{
				this._toasterService.pop('error', 'You are not connected to the server', '');
			}
			
		})

		
	};

	newUser(){

	};


	// deleteUser(pk: any){
 //    let v = this.page_header();
 //     return this.http.delete(this.user + pk +'/', v)
 //              .toPromise()
 //              .then(response => {
 //                //response.json()
 //                this.toasterService.pop('success', 'Local Government deleted!', '');
 //              })
 //              .catch(this.handleError);

 //  };


	logout(){
		  // localStorage.removeItem('auth_token');
		  // this.loggedIn = false;

		
			let v = this.page_header();
		
			this.http.post(this.logoutUrl, {}, v).subscribe(res => {
				localStorage.clear();
				this.loggedIn = false;
				this.router.navigate(['/login']);
			}, (err) => {
				this.evil = JSON.parse(err['_body']).non_field_errors[0];
				this._toasterService.pop('error', this.evil, '');
			})
	}

	isloggedIn(){
		return this.loggedIn;
	}


	private page_header(){
     let data =  localStorage.getItem('auth_token');
      let headers = new Headers();
      let opt: RequestOptions;
      headers.append('Authorization', 'JWT ' + data );
      opt = new RequestOptions({headers: headers})  ;
      return opt;
  }
}