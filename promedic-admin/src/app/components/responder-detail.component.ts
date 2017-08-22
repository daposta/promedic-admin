import { Component } from '@angular/core';
import {ResponderService} from '../services/responders.srv';
import {DocumentTypeService} from '../services/doc-type.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Globals } from '../shared/api';

@Component({
  selector: 'responder-detail',
  templateUrl: '../views/responder-detail.html' ,
  providers: [ResponderService, DocumentTypeService]
})

export class ResponderDetailComponent { 

	responder: Object= {};
	doc: Object= {};
 	error: any;	
 	upload : boolean = false;
 	profile_pic:any;
 	busyUploading : boolean = false;
 	host_address: string =  this.globals.HOST_URL; 
 	doc_types : any[];


	constructor(private _responderService : ResponderService, private _docTypeService:DocumentTypeService,
		private route: ActivatedRoute, private globals: Globals){

	}

	uploadPhoto(){
		
		if(this.profile_pic){
			 	this.busyUploading = true;
			 		 var fd = new FormData();
		             fd.append('photo', this.profile_pic);
		             this._responderService.uploadResponderPhoto(this.responder, fd);
   
		         
		          };
	}

	attachFile(evt:any){
		let files: FileList =  evt.target.files[0]; //event?.target?.files[0];
	    this.profile_pic = files ? files : undefined;

	}

	allowUpload(){
			this.upload = !this.upload;
			 	
	};

	getDocumentTypes(){
		this._docTypeService.getDocumentTypes()
		.then(
			response =>this.doc_types = response
			)
		 .catch(error => this.error = error);
	};

	

	ngOnInit() {
		 this.route.params.switchMap((params: Params) => 
		 	this._responderService.findResponderByID(+ params['id']))
		 .subscribe(
		 	data => {

		 		this.responder = data;
		 	}
		 	
		 	);

		 this.getDocumentTypes();
	}
 }
