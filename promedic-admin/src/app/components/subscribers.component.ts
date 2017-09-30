import { Component } from '@angular/core';
import { SubscriberService} from '../services/subscribers.srv';

@Component({
  //selector: 'disabilities',
  templateUrl: '../views/subscribers.html' ,
  providers: [SubscriberService]
})

export class SubscriberComponent  { 

	subscribers: any[];
 	error: any;
 	search: string ="" ;
 	

	constructor(private _subscriberService : SubscriberService){

	}

	getSubscribers() {
		    this._subscriberService.getSubscribers()
		        .then(allergies => this.subscribers = allergies)
		        .catch(error => this.error = error);
		  };


	searchSubscribers(){

		if(this.search.length> 3){
			this._subscriberService.searchSubscriber(this.search).then(result => this.subscribers = result)
    		.catch(error => this.error = error);
		}else{
			this.getSubscribers();
		}
		
	};

	deleteSubscriber(x){
		this._subscriberService.deleteSubscriber(x.id).then(response =>{
			
			let index: number = this.subscribers.indexOf(x);
			if (index !== -1) {
		        this.subscribers.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getSubscribers();
	}
 }
