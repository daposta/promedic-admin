import { Component } from '@angular/core';
import { UserService} from '../services/user.srv';

@Component({
  selector: 'users',
  templateUrl: '../views/users.html' ,
  providers: [UserService]
})

export class UserComponent { 

	users: any[];
 	error: any;
 	search: string ="" ;

	constructor(private userSrv : UserService){

	}

	getUsers() {
		    this.userSrv.fetchUsers()
		        .then(res => this.users = res)
		        .catch(error => this.error = error);
		  };


	searchUser(){

		if(this.search.length == 11){
			this.userSrv.searchUser(this.search).then(result => this.users = result)
    		.catch(error => this.error = error);
		}else{
			this.getUsers();
		}
		
	};


	deleteUser(x){
		this.userSrv.deleteUser(x.id).then(response =>{
			
			let index: number = this.users.indexOf(x);
			if (index !== -1) {
		        this.users.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getUsers();
	}
 }
