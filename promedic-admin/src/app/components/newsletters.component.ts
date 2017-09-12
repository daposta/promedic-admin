import { Component } from '@angular/core';
import { NewsletterService } from '../services/newsletter.srv';

@Component({
  //selector: 'disabilities',
  templateUrl: '../views/newsletters.html' ,
  providers: [NewsletterService]
})

export class NewsletterComponent  { 

	newsletters: any[];
 	error: any;
 	search: string ="" ;
 	

	constructor(private _newsletterService : NewsletterService){

	}

	getNewsletters() {
		    this._newsletterService.getNewsletters()
		        .then(newsletters => this.newsletters = newsletters)
		        .catch(error => this.error = error);
		  };


	searchNewsletter(){

		if(this.search.length> 3){
			this._newsletterService.searchNewsletter(this.search).then(result => this.newsletters = result)
    		.catch(error => this.error = error);
		}else{
			this.getNewsletters();
		}
		
	};

	deleteNewsletter(x){
		this._newsletterService.deleteNewsletter(x.id).then(response =>{
			
			let index: number = this.newsletters.indexOf(x);
			if (index !== -1) {
		        this.newsletters.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getNewsletters();
	}
 }
