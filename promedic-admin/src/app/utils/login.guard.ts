import {Injectable} from '@angular/core';
import {Router,  CanActivate} from '@angular/router';
import {UserService} from '../services/user.srv';


@Injectable()
export class LoggedInGuard implements CanActivate{

	constructor(private userService: UserService, private router : Router){

	}

	canActivate(){
		var v =  this.userService.isloggedIn();
		if(v){
			// this.router.navigate(['']);
			
			 return true;
		}
		else{
			 this.router.navigate(['/login']);
			 return false;
		}
		//return ;
	}




}