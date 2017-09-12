import { Component } from '@angular/core';


import {Router, ActivatedRoute, Params} from '@angular/router';


import { NewsletterService } from '../services/newsletter.srv';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/new-newsletter.html',
  providers : [NewsletterService
    ]
})


export class NewNewsletterComponent {

  newsletter: any= {};
  error: any;	
  

  constructor(private _newsletterService : NewsletterService, private route: ActivatedRoute){

  }

  
  


  ngOnInit(){
    
         // this.getStates();

     
  }


  onSubmit(){
    this._newsletterService.saveNewsletter(this.newsletter);

  }

  
}
