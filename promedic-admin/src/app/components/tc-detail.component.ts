import { Component } from '@angular/core';
import { TestCenterService} from '../services/test-center.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'drug-detail',
  templateUrl: '../views/tc-detail.html' ,
  providers: [TestCenterService]
})

export class TCDetailComponent { 

	tc: Object= {};
 	error: any;	

	constructor(private _tcSrv : TestCenterService, private route: ActivatedRoute){

	}

	// getDrugs() {
	// 	    this._drugsService
	// 	        .getDrugs()
	// 	        .then(drugs => this.drugs = drugs)
	// 	        .catch(error => this.error = error);
	// 	  }

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._tcSrv.findTCByID(+ params['id']))
		 .subscribe(
		 	res => this.tc = res
		 	);
		 
	}
 }
