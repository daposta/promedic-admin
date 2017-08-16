import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';


export class CustomRequestOptions extends BaseRequestOptions{

	constructor(){
		super();
		var v = localStorage.getItem('auth_token');
		
		this.headers.append('Authorization', 'JWT ' +v );

	}





}