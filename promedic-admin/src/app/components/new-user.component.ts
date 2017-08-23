import { Component } from '@angular/core';

import { UserService} from '../services/user.srv';
import {StateService} from '../services/states.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'user-form',
  templateUrl: '../views/new-user.html',
  providers : [UserService, StateService
    ]
})


export class NewUserComponent {

  user: any= {};
  error: any;	
  states: any[];
  

  constructor(private userSrv : UserService,private _stateService : StateService, private route: ActivatedRoute){

  }

  // getStates(){
  //     this._stateService.getStates().then(states => this.states = states)
  //           .catch(error => this.error = error);
  // }

  


  ngOnInit(){
    // this.getStates();
     
  }


  onSubmit(){
    this.userSrv.saveUser(this.user);

  }

  
}
