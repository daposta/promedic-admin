import { Component } from '@angular/core';
import { ClientService} from '../services/clients.srv';


@Component({
  selector: 'responders',
  templateUrl: '../views/clients.html' ,
  providers: [ClientService]
})

export class ClientComponent  { 

	clients: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _clientService : ClientService){

	}

	getClients() {
		    this._clientService
		        .getClients()
		        .then(clients => this.clients = clients)
		        .catch(error => this.error = error);
		  };


	searchClient(){

		if(this.search.length> 3){
			this._clientService.searchClient(this.search).then(result => this.clients = result)
    		.catch(error => this.error = error);
		}else{
			this.getClients();
		}
		
	};


	deleteClient(x){
		this._clientService.deleteClient(x.id).then(response =>{
			
			let index: number = this.clients.indexOf(x);
			if (index !== -1) {
		        this.clients.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getClients();
	}
 }
