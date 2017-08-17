import { Component } from '@angular/core';
import { TestCenterService} from '../services/test-center.srv';

@Component({
  selector: 'test-centers',
  templateUrl: '../views/test-centers.html' ,
  providers: [TestCenterService]
})

export class TestCenterComponent  { 

	test_centers: any[];
 	error: any;
 	search: string ="" ;

	constructor(private _tcService : TestCenterService){

	}

	getTCs() {
		    this._tcService
		        .getTCs()
		        .then(res => this.test_centers = res)
		        .catch(error => this.error = error);
		  };


	searchDisability(){

		if(this.search.length> 3){
			this._tcService.searchTC(this.search).then(result => this.test_centers = result)
    		.catch(error => this.error = error);
		}else{
			this.getTCs();
		}
		
	};


	deleteDisability(x){
		this._tcService.deleteTC(x.id).then(response =>{
			
			let index: number = this.test_centers.indexOf(x);
			if (index !== -1) {
		        this.test_centers.splice(index, 1);
		    }   
			
		})
		.catch(err => this.error = err)
	}

	ngOnInit(){
		this.getTCs();
	}
 }
