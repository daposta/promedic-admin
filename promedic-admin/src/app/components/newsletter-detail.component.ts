import { Component } from '@angular/core';
import { NewsletterService } from '../services/newsletter.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'newsletter-detail',
  templateUrl: '../views/newsletter-detail.html' ,
  providers: [NewsletterService]
})

export class NewsletterDetailComponent { 

	newsletter: Object= {};
 	error: any;	

	constructor(private _newsletterService : NewsletterService, private route: ActivatedRoute){

	}

	newsletterReady(){
		this.newsletter['status'] = 'Ready';
		this._newsletterService.changeNewsletterState(this.newsletter);
	};


	sendNewsletter(){
		this.newsletter['status'] = 'Send';
		this._newsletterService.changeNewsletterState(this.newsletter);
	};

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._newsletterService.findNewsletterByID(+ params['id']))
		 .subscribe(
		 	res => this.newsletter = res
		 	);
		 
	};
 }
