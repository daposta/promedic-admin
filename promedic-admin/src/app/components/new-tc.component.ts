import { Component } from '@angular/core';

import { TestCenterService} from '../services/test-center.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'hero-form',
  templateUrl: '../views/new-test-center.html',
  providers : [TestCenterService, 
    ]
})


export class NewTCComponent {

  tc: any= {};
  error: any;	
  

  constructor(private tcSrv : TestCenterService, private route: ActivatedRoute){

  }

  


  ngOnInit(){
    
    
    // this.fetchLGA();
     
  }


  onSubmit(){
    this.tcSrv.saveTC(this.tc);

  }

  
}
