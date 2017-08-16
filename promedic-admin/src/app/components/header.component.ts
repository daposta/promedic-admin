import { Component } from '@angular/core';
import {UserService} from '../services/user.srv';
import {Router} from '@angular/router';

@Component({
   selector: 'header-component',
  templateUrl: '../views/header.html',
})
export class HeaderComponent  { 
	
	constructor(private _userService: UserService, private router: Router){
		
	}


	logout(){
		this._userService.logout();
		this.router.navigateByUrl('/login');

	}
}
