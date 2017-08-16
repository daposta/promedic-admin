import { Component } from '@angular/core';
import { Router}  from '@angular/router';
import {UserService} from '../services/user.srv';

@Component({
  // selector: 'login',
  templateUrl: '../views/login.html',
})
export class LoginComponent  { 
	
	user : any = {};
	// email : string;
	// password: string;
	constructor(private userService: UserService){
			
	}

	login(){
		if (this.user.mobile, this.user.password){
			this.userService.login(this.user.mobile, this.user.password);
		}
		

	}
}
