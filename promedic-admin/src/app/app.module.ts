import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {HttpModule,  Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ChartModule } from 'angular2-highcharts';

import {ConfirmationPopoverModule} from 'angular-confirmation-popover';



import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { DiseasesComponent } from './components/diseases.component';
import { DiseaseEditComponent } from './components/disease-edit.component';
import { DiseaseFormComponent } from './components/disease-form.component';
import { DrugsComponent } from './components/drugs.component';
import { AllergyComponent } from './components/allergies.component';
import {  AllergyDetailComponent } from './components/allergy-detail.component';
import { AllergyEditComponent } from './components/allergy-edit.component';
import { AllergyFormComponent } from './components/allergy-form.component';

import { DashboardComponent } from './components/dashboard.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import {DisabilityComponent} from  './components/disabilities.component';
import { DisabilityFormComponent} from  './components/disability-form.component';
import {DisabilityEditComponent} from  './components/disability-edit.component';

import {BloodGroupComponent} from './components/blood-groups.component';

import {SidebarComponent} from  './components/sidebar.component';
import {StateComponent} from './components/states.component';
import {StateEditComponent} from './components/state-edit.component';

import {LocalGovtComponent} from './components/local_govts.component';
import { LocalGovtEditComponent} from './components/local-govt-edit.component';

import {ResponderComponent} from './components/responders.component';
import {ResponderDetailComponent} from './components/responder-detail.component';
import {ResponderFormComponent} from './components/responder-form.component';
import {ResponderEditComponent} from './components/responder-edit.component';


import {ClientComponent} from './components/clients.component';
import {ClientDetailComponent} from './components/client-detail.component';
import {ClientEditComponent} from './components/client-edit.component';


import {DrugDetailComponent} from './components/drug-detail.component';
import {DrugFormComponent} from './components/drug-form.component';
import {DrugEditComponent} from './components/drug-edit.component';


import { HMOComponent} from './components/hmo.component';
import {HMODetailComponent } from './components/hmo-detail.component';
import { HMOFormComponent} from './components/hmo-form.component';
import { HMOEditComponent} from './components/hmo-edit.component';


import { TestCenterComponent} from './components/test-centers.component';
import { NewTCComponent} from './components/new-tc.component';
import { TCDetailComponent} from './components/tc-detail.component';

import { TCEditComponent} from './components/tc-edit.component';

import { PartnerComponent } from './components/partners.component';
import { NewPartnerComponent } from './components/new-partner.component';
import { PartnerDetailComponent} from './components/partner-detail.component';
import { PartnerEditComponent } from './components/partner-edit.component';


import { UserComponent } from './components/users.component';
import { UserDetailComponent } from './components/user-detail.component';
import { NewUserComponent } from './components/new-user.component';
import { UserEditComponent } from './components/user-edit.component';

import {ResponderLocationChartComponent} from './components/charts/res-locs-chart.component';
import {ResponderKitChartComponent} from './components/charts/res-kits-chart.component';
import {ResponderConcentrationChartComponent} from './components/charts/res-concentration-chart.component';
import {ClientDiseaseChartComponent} from './components/charts/clients-diseases-chart.component';
import {ClientAllergytChartComponent} from './components/charts/clients-allergies-chart.component';
import {ClientDisabilityChartComponent} from './components/charts/clients-disabilities-chart.component';

import {UserService} from './services/user.srv';
import {LoggedInGuard } from './utils/login.guard';
import {RequestOptions} from '@angular/http';
import {CustomRequestOptions} from './utils/headers';
import { Globals } from './shared/api';

import { EqualValidator } from  './directives/equal-validator.directive';
import { OnlyNumber } from  './directives/only-number.directive';

const appRoutes: Routes = [
	
	  { path: '', component: DashboardComponent ,  canActivate: [LoggedInGuard]},
	  { path: 'login', component: LoginComponent },
	  { path: 'register', component: RegisterComponent },
	  { path: 'drugs', component: DrugsComponent , canActivate: [LoggedInGuard]},
	  
	  { path: 'diseases', component: DiseasesComponent, canActivate: [LoggedInGuard] },
	   { path: 'disease/edit/:id', component: DiseaseEditComponent, canActivate: [LoggedInGuard] },
	    { path: 'new-disease', component: DiseaseFormComponent, canActivate: [LoggedInGuard] },

	  { path: 'allergies', component: AllergyComponent, canActivate: [LoggedInGuard] },
	  { path: 'allergy/:id', component: AllergyDetailComponent, canActivate: [LoggedInGuard]},
	  { path: 'new-allergy', component: AllergyFormComponent , canActivate: [LoggedInGuard]},

	  { path: 'allergy/edit/:id', component: AllergyEditComponent, canActivate: [LoggedInGuard]},
	  { path: 'disabilities', component: DisabilityComponent,canActivate: [LoggedInGuard] },
	  { path: 'new-disability', component: DisabilityFormComponent , canActivate: [LoggedInGuard]},
	   { path: 'disability/edit/:id', component: DisabilityEditComponent, canActivate: [LoggedInGuard]},
	  { path: 'blood-groups', component: BloodGroupComponent, canActivate: [LoggedInGuard] },
	  { path: 'state/edit/:id', component: StateEditComponent, canActivate: [LoggedInGuard]},
	  { path: 'states', component: StateComponent, canActivate: [LoggedInGuard] },
	  { path: 'local_govts', component: LocalGovtComponent, canActivate: [LoggedInGuard] },
	   { path: 'local_govt/edit/:id', component: LocalGovtEditComponent, canActivate: [LoggedInGuard]},
	  { path: 'new-drug', component: DrugFormComponent , canActivate: [LoggedInGuard]},
	   { path: 'drug/:id', component: DrugDetailComponent, canActivate: [LoggedInGuard]},
	  { path: 'drug/edit/:id', component: DrugEditComponent, canActivate: [LoggedInGuard]},
	  { path: 'responders', component: ResponderComponent, canActivate: [LoggedInGuard] },
	  { path: 'new-responder', component: ResponderFormComponent , canActivate: [LoggedInGuard]},
	  { path: 'responder/:id', component: ResponderDetailComponent, canActivate: [LoggedInGuard]},
	  { path: 'responder/edit/:id', component: ResponderEditComponent, canActivate: [LoggedInGuard]},

	  { path: 'clients', component: ClientComponent, canActivate: [LoggedInGuard] },
	  { path: 'client/:id', component: ClientDetailComponent, canActivate: [LoggedInGuard]},
	   { path: 'client/edit/:id', component: ClientEditComponent, canActivate: [LoggedInGuard]},

	  { path: 'hmos', component: HMOComponent, canActivate: [LoggedInGuard] },
	  { path: 'new-hmo', component: HMOFormComponent , canActivate: [LoggedInGuard]},
	  { path: 'hmo/:id', component: HMODetailComponent, canActivate: [LoggedInGuard]},
	  { path: 'hmo/edit/:id', component: HMOEditComponent, canActivate: [LoggedInGuard]},

	   { path: 'test-centers', component: TestCenterComponent, canActivate: [LoggedInGuard] },
	    { path: 'test-center/:id', component: TCDetailComponent, canActivate: [LoggedInGuard]},
	   { path: 'new-tc', component: NewTCComponent , canActivate: [LoggedInGuard]},
	    { path: 'test-center/edit/:id', component: TCEditComponent, canActivate: [LoggedInGuard]},


	   { path: 'partners', component: PartnerComponent, canActivate: [LoggedInGuard] },
	    { path: 'partner/:id', component: PartnerDetailComponent, canActivate: [LoggedInGuard]},
	   { path: 'new-partner', component: NewPartnerComponent , canActivate: [LoggedInGuard]},
	   { path: 'partner/edit/:id', component: PartnerEditComponent, canActivate: [LoggedInGuard]},
	  

	    { path: 'users', component:UserComponent , canActivate: [LoggedInGuard] },
	   { path: 'user/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
	   { path: 'new-user', component: NewUserComponent , canActivate: [LoggedInGuard]},
	   { path: 'user/edit/:id', component: UserEditComponent, canActivate: [LoggedInGuard]},
	  
]


@NgModule({
  declarations: [
    AppComponent,RegisterComponent, LoginComponent, EqualValidator, OnlyNumber,
  DiseasesComponent, DiseaseEditComponent, DiseaseFormComponent,
  DisabilityComponent, DisabilityEditComponent, DisabilityFormComponent,
  AllergyComponent, AllergyEditComponent, AllergyFormComponent, AllergyDetailComponent,
   BloodGroupComponent, StateComponent, StateEditComponent, DrugFormComponent, 
  ResponderComponent, ResponderEditComponent, ResponderFormComponent, 
  LocalGovtComponent, LocalGovtEditComponent,
  ClientComponent, ClientDetailComponent, ClientEditComponent,
  DrugsComponent, DrugEditComponent, DrugDetailComponent, ResponderDetailComponent,
   DashboardComponent, HeaderComponent, 
  FooterComponent,SidebarComponent,
   TestCenterComponent, NewTCComponent, TCDetailComponent,TCEditComponent,
  PartnerComponent, NewPartnerComponent, PartnerDetailComponent, PartnerEditComponent,
  HMOComponent, HMOEditComponent, HMOFormComponent, HMODetailComponent,
  ResponderLocationChartComponent, ResponderKitChartComponent, ResponderConcentrationChartComponent ,
  ClientDiseaseChartComponent, ClientDisabilityChartComponent, ClientAllergytChartComponent,
  UserComponent, UserDetailComponent, NewUserComponent, UserEditComponent,
  ],
  imports: [
    BrowserModule,  HttpModule ,FormsModule, ToasterModule,BrowserAnimationsModule, Ng2PaginationModule, 
    ChartModule,
  RouterModule.forRoot(appRoutes, { useHash: true }) ,
  ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [UserService, Globals, LoggedInGuard, {provide: RequestOptions, useClass: CustomRequestOptions}],
  bootstrap: [AppComponent]
})
export class AppModule { }
