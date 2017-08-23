import { Component } from '@angular/core';

import { UserService} from '../services/user.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/user-edit.html',
  providers : [UserService, 
    ]
})


export class UserEditComponent {

  user: any= {};
  error: any;	
  

  constructor(private userSrv : UserService, private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getUserInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.userSrv.findUserByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.user = data;
		 		
		 	});


  };

 

  ngOnInit(){
     this.getUserInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.userSrv.updateUserInfo(this.user);

  }

  
}
