import { Component } from '@angular/core';
import {ResponderService} from '../services/responders.srv';
import {DocumentTypeService} from '../services/doc-type.srv';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
 	filesToUpload: Array<File> = [];


	constructor(private _responderService : ResponderService, private _docTypeService:DocumentTypeService,
		private route: ActivatedRoute, private globals: Globals, public sanitizer: DomSanitizer){

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


	fileChangeEvent(fileInput: any) {
    	this.filesToUpload = <Array<File>>fileInput.target.files;
     
	}


	uploadResponderDocs(){
			const formData: any = new FormData();
			const files: Array<File> = this.filesToUpload;
			for(let i =0; i < files.length; i++){
      			  formData.append("uploads[]", files[i], files[i]['name']);
    		}
    		
    		this._responderService.uploadResponderDocs(this.responder, formData)

	}

	getDocumentTypes(){
		this._docTypeService.getDocumentTypes()
		.then(
			response =>this.doc_types = response
			)
		 .catch(error => this.error = error);
	};


	deletePhoto(x){
		this._responderService.deleteResponderPhoto(this.responder, x);
	};

	deleteDoc(x){
		this._responderService.deleteResponderDoc(this.responder, x);

	}

	

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
