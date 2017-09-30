import { Component } from '@angular/core';

import { SubscriberService} from '../services/subscribers.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/new-subscriber.html',
  providers : [SubscriberService, 
    ]
})


export class NewSubscriberComponent {

  subscriber: any= {};
  error: any;	
  states: any[];
  

  constructor(private subscriberSrv : SubscriberService, private route: ActivatedRoute){

  }

  

  


  ngOnInit(){
    
  }


  onSubmit(){
    this.subscriberSrv.saveSubscriber(this.subscriber);

  }

  
}
