import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{


	private  loggedIn = false;
	private loginUrl = this.globals.LOGIN_URL; 
	private logoutUrl = this.globals.LOGOUT_URL;
	private usersUrl =  this.globals.USERS_URL;

	  v = localStorage.getItem('auth_token');
	  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json',
	  'Authorization': 'JWT ' +this.v
	  })});

	evil : any;

	constructor(private http: Http, private router:Router,  private _toasterService: ToasterService, 
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

	fetchUsers(){

		   let v = this.page_header();
		   return this.http.get(this.usersUrl, v)
		              .toPromise()
		              .then(response => response.json())
		              .catch(this.handleError);

	}



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

	findUserByID(pk: any){
    let v = this.page_header();
     return this.http.get(this.usersUrl + pk +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  searchUser(user:string){
      let params = new URLSearchParams();
    params.append('user', user);
    this.options.search = params;
     return this.http.get(this.usersUrl ,this.options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


   deleteUser(pk: any){
    let v = this.page_header();
     return this.http.delete(this.usersUrl + pk +'/', v)
              .toPromise()
              .then(response => {
                //response.json()
                this._toasterService.pop('success', 'User deleted!', '');
              })
              .catch(this.handleError);

  };

  saveUser(data: any){
    let _data = JSON.stringify(data);
     this.http.post(this.usersUrl, data).subscribe(
         data => {

           this._toasterService.pop('success', 'User saved', '');
             this.router.navigateByUrl('/users');
         },
         error => {
         	
         	 this._toasterService.pop('error', error.json().message, '');
         }
         )
      

  };

  updateUserInfo(user:any= {}){
     let v = this.page_header();
    //let _data = JSON.stringify(hmo);
    if (user){
        this.http.patch(this.usersUrl + user.id + '/', user, v).subscribe(
           data => {

             this._toasterService.pop('success', 'User Info updated', '');
              this.router.navigateByUrl('user/' + user.id);
            
           },
           error => console.log(error.json().message)
        )
    }
     

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