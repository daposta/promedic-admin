import { Component } from '@angular/core';
import { ClientService} from '../services/clients.srv';
import {DocumentTypeService} from '../services/doc-type.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Globals } from '../shared/api';

@Component({
  selector: 'client-detail',
  templateUrl: '../views/client-detail.html' ,
  providers: [ClientService, DocumentTypeService]
})

export class ClientDetailComponent { 

	client: Object= {};
	doc: Object= {};
 	error: any;	
 	upload : boolean = false;
 	profile_pic:any;
 	busyUploading : boolean = false;
 	host_address: string =  this.globals.HOST_URL; 
 	doc_types : any[];


	constructor(private _clientSrv : ClientService, private _docTypeService:DocumentTypeService,
		private route: ActivatedRoute, private globals: Globals){

	}

	

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._clientSrv.findClientByID(+ params['id']))
		 .subscribe(
		 	data => this.client = data
		 	);

		
	}
 }
