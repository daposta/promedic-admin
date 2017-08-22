import { Component } from '@angular/core';
import { UserService } from '../services/user.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'drug-detail',
  templateUrl: '../views/drug-detail.html' ,
  providers: [UserService ]
})

export class UserDetailComponent { 

	user: Object= {};
 	error: any;	

	constructor(private userService : UserService , private route: ActivatedRoute){

	}

	
	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this.userService.findUserByID(+ params['id']))
		 .subscribe(
		 	resp => this.user = resp
		 	);
		 
	}
 }
