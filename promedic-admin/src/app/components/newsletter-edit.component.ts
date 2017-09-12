import { Component } from '@angular/core';


import { NewsletterService } from '../services/newsletter.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'newsletter-form',
  templateUrl: '../views/newsletter-edit.html',
  providers : [NewsletterService, 
    ]
})


export class NewsletterEditComponent {

  newsletter: any= {};
  error: any;	
  

  constructor(private _newsletterService : NewsletterService,  private route: ActivatedRoute){

  }

  

  // getLocalGovts(){
  //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
  //           .catch(error => this.error = error);
  // }


  getNewsletterInfo(){
  	 this.route.params.switchMap((params: Params) => 
		 	this._newsletterService.findNewsletterByID(+ params['id']))
		 .subscribe(
		 	data => {
		 		this.newsletter = data;
		 		
		 	});


  };

 

  ngOnInit(){
     this.getNewsletterInfo();
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this._newsletterService.updateNewsletterInfo(this.newsletter);

  }

  
}
