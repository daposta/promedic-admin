webpackJsonp([0],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"http://angularjs.blogspot.ca/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n<toaster-container></toaster-container>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_pagination__ = __webpack_require__("./node_modules/ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts__ = __webpack_require__("./node_modules/angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_component__ = __webpack_require__("./src/app/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_component__ = __webpack_require__("./src/app/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_diseases_component__ = __webpack_require__("./src/app/components/diseases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_disease_edit_component__ = __webpack_require__("./src/app/components/disease-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_disease_form_component__ = __webpack_require__("./src/app/components/disease-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_drugs_component__ = __webpack_require__("./src/app/components/drugs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_allergies_component__ = __webpack_require__("./src/app/components/allergies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_allergy_detail_component__ = __webpack_require__("./src/app/components/allergy-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_allergy_edit_component__ = __webpack_require__("./src/app/components/allergy-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_allergy_form_component__ = __webpack_require__("./src/app/components/allergy-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_component__ = __webpack_require__("./src/app/components/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_header_component__ = __webpack_require__("./src/app/components/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_component__ = __webpack_require__("./src/app/components/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_disabilities_component__ = __webpack_require__("./src/app/components/disabilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_disability_form_component__ = __webpack_require__("./src/app/components/disability-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_disability_edit_component__ = __webpack_require__("./src/app/components/disability-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_blood_groups_component__ = __webpack_require__("./src/app/components/blood-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_sidebar_component__ = __webpack_require__("./src/app/components/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_states_component__ = __webpack_require__("./src/app/components/states.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_state_edit_component__ = __webpack_require__("./src/app/components/state-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_local_govts_component__ = __webpack_require__("./src/app/components/local_govts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_local_govt_edit_component__ = __webpack_require__("./src/app/components/local-govt-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_responders_component__ = __webpack_require__("./src/app/components/responders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_responder_detail_component__ = __webpack_require__("./src/app/components/responder-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_responder_form_component__ = __webpack_require__("./src/app/components/responder-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_responder_edit_component__ = __webpack_require__("./src/app/components/responder-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_clients_component__ = __webpack_require__("./src/app/components/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_client_detail_component__ = __webpack_require__("./src/app/components/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_client_edit_component__ = __webpack_require__("./src/app/components/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_drug_detail_component__ = __webpack_require__("./src/app/components/drug-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_drug_form_component__ = __webpack_require__("./src/app/components/drug-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_drug_edit_component__ = __webpack_require__("./src/app/components/drug-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_hmo_component__ = __webpack_require__("./src/app/components/hmo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_hmo_detail_component__ = __webpack_require__("./src/app/components/hmo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_hmo_form_component__ = __webpack_require__("./src/app/components/hmo-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_hmo_edit_component__ = __webpack_require__("./src/app/components/hmo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_test_centers_component__ = __webpack_require__("./src/app/components/test-centers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_new_tc_component__ = __webpack_require__("./src/app/components/new-tc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_tc_detail_component__ = __webpack_require__("./src/app/components/tc-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_tc_edit_component__ = __webpack_require__("./src/app/components/tc-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_partners_component__ = __webpack_require__("./src/app/components/partners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_new_partner_component__ = __webpack_require__("./src/app/components/new-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_partner_detail_component__ = __webpack_require__("./src/app/components/partner-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_partner_edit_component__ = __webpack_require__("./src/app/components/partner-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_users_component__ = __webpack_require__("./src/app/components/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_user_detail_component__ = __webpack_require__("./src/app/components/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_new_user_component__ = __webpack_require__("./src/app/components/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_user_edit_component__ = __webpack_require__("./src/app/components/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_charts_res_locs_chart_component__ = __webpack_require__("./src/app/components/charts/res-locs-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_charts_res_kits_chart_component__ = __webpack_require__("./src/app/components/charts/res-kits-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_charts_res_concentration_chart_component__ = __webpack_require__("./src/app/components/charts/res-concentration-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_charts_clients_diseases_chart_component__ = __webpack_require__("./src/app/components/charts/clients-diseases-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_charts_clients_allergies_chart_component__ = __webpack_require__("./src/app/components/charts/clients-allergies-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_charts_clients_disabilities_chart_component__ = __webpack_require__("./src/app/components/charts/clients-disabilities-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__utils_login_guard__ = __webpack_require__("./src/app/utils/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__utils_headers__ = __webpack_require__("./src/app/utils/headers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__directives_equal_validator_directive__ = __webpack_require__("./src/app/directives/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__directives_only_number_directive__ = __webpack_require__("./src/app/directives/only-number.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_21__components_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_component__["a" /* RegisterComponent */] },
    { path: 'drugs', component: __WEBPACK_IMPORTED_MODULE_16__components_drugs_component__["a" /* DrugsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'diseases', component: __WEBPACK_IMPORTED_MODULE_13__components_diseases_component__["a" /* DiseasesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'disease/edit/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_disease_edit_component__["a" /* DiseaseEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-disease', component: __WEBPACK_IMPORTED_MODULE_15__components_disease_form_component__["a" /* DiseaseFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'allergies', component: __WEBPACK_IMPORTED_MODULE_17__components_allergies_component__["a" /* AllergyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'allergy/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_allergy_detail_component__["a" /* AllergyDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-allergy', component: __WEBPACK_IMPORTED_MODULE_20__components_allergy_form_component__["a" /* AllergyFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'allergy/edit/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_allergy_edit_component__["a" /* AllergyEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'disabilities', component: __WEBPACK_IMPORTED_MODULE_24__components_disabilities_component__["a" /* DisabilityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-disability', component: __WEBPACK_IMPORTED_MODULE_25__components_disability_form_component__["a" /* DisabilityFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'disability/edit/:id', component: __WEBPACK_IMPORTED_MODULE_26__components_disability_edit_component__["a" /* DisabilityEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'blood-groups', component: __WEBPACK_IMPORTED_MODULE_27__components_blood_groups_component__["a" /* BloodGroupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'state/edit/:id', component: __WEBPACK_IMPORTED_MODULE_30__components_state_edit_component__["a" /* StateEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'states', component: __WEBPACK_IMPORTED_MODULE_29__components_states_component__["a" /* StateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'local_govts', component: __WEBPACK_IMPORTED_MODULE_31__components_local_govts_component__["a" /* LocalGovtComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'local_govt/edit/:id', component: __WEBPACK_IMPORTED_MODULE_32__components_local_govt_edit_component__["a" /* LocalGovtEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-drug', component: __WEBPACK_IMPORTED_MODULE_41__components_drug_form_component__["a" /* DrugFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'drug/:id', component: __WEBPACK_IMPORTED_MODULE_40__components_drug_detail_component__["a" /* DrugDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'drug/edit/:id', component: __WEBPACK_IMPORTED_MODULE_42__components_drug_edit_component__["a" /* DrugEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'responders', component: __WEBPACK_IMPORTED_MODULE_33__components_responders_component__["a" /* ResponderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-responder', component: __WEBPACK_IMPORTED_MODULE_35__components_responder_form_component__["a" /* ResponderFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'responder/:id', component: __WEBPACK_IMPORTED_MODULE_34__components_responder_detail_component__["a" /* ResponderDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'responder/edit/:id', component: __WEBPACK_IMPORTED_MODULE_36__components_responder_edit_component__["a" /* ResponderEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_37__components_clients_component__["a" /* ClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'client/:id', component: __WEBPACK_IMPORTED_MODULE_38__components_client_detail_component__["a" /* ClientDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'client/edit/:id', component: __WEBPACK_IMPORTED_MODULE_39__components_client_edit_component__["a" /* ClientEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'hmos', component: __WEBPACK_IMPORTED_MODULE_43__components_hmo_component__["a" /* HMOComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-hmo', component: __WEBPACK_IMPORTED_MODULE_45__components_hmo_form_component__["a" /* HMOFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'hmo/:id', component: __WEBPACK_IMPORTED_MODULE_44__components_hmo_detail_component__["a" /* HMODetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'hmo/edit/:id', component: __WEBPACK_IMPORTED_MODULE_46__components_hmo_edit_component__["a" /* HMOEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'test-centers', component: __WEBPACK_IMPORTED_MODULE_47__components_test_centers_component__["a" /* TestCenterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'test-center/:id', component: __WEBPACK_IMPORTED_MODULE_49__components_tc_detail_component__["a" /* TCDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-tc', component: __WEBPACK_IMPORTED_MODULE_48__components_new_tc_component__["a" /* NewTCComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'test-center/edit/:id', component: __WEBPACK_IMPORTED_MODULE_50__components_tc_edit_component__["a" /* TCEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'partners', component: __WEBPACK_IMPORTED_MODULE_51__components_partners_component__["a" /* PartnerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'partner/:id', component: __WEBPACK_IMPORTED_MODULE_53__components_partner_detail_component__["a" /* PartnerDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-partner', component: __WEBPACK_IMPORTED_MODULE_52__components_new_partner_component__["a" /* NewPartnerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'partner/edit/:id', component: __WEBPACK_IMPORTED_MODULE_54__components_partner_edit_component__["a" /* PartnerEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_55__components_users_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_56__components_user_detail_component__["a" /* UserDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'new-user', component: __WEBPACK_IMPORTED_MODULE_57__components_new_user_component__["a" /* NewUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
    { path: 'user/edit/:id', component: __WEBPACK_IMPORTED_MODULE_58__components_user_edit_component__["a" /* UserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__components_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_11__components_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_69__directives_equal_validator_directive__["a" /* EqualValidator */], __WEBPACK_IMPORTED_MODULE_70__directives_only_number_directive__["a" /* OnlyNumber */],
            __WEBPACK_IMPORTED_MODULE_13__components_diseases_component__["a" /* DiseasesComponent */], __WEBPACK_IMPORTED_MODULE_14__components_disease_edit_component__["a" /* DiseaseEditComponent */], __WEBPACK_IMPORTED_MODULE_15__components_disease_form_component__["a" /* DiseaseFormComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_disabilities_component__["a" /* DisabilityComponent */], __WEBPACK_IMPORTED_MODULE_26__components_disability_edit_component__["a" /* DisabilityEditComponent */], __WEBPACK_IMPORTED_MODULE_25__components_disability_form_component__["a" /* DisabilityFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_allergies_component__["a" /* AllergyComponent */], __WEBPACK_IMPORTED_MODULE_19__components_allergy_edit_component__["a" /* AllergyEditComponent */], __WEBPACK_IMPORTED_MODULE_20__components_allergy_form_component__["a" /* AllergyFormComponent */], __WEBPACK_IMPORTED_MODULE_18__components_allergy_detail_component__["a" /* AllergyDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_blood_groups_component__["a" /* BloodGroupComponent */], __WEBPACK_IMPORTED_MODULE_29__components_states_component__["a" /* StateComponent */], __WEBPACK_IMPORTED_MODULE_30__components_state_edit_component__["a" /* StateEditComponent */], __WEBPACK_IMPORTED_MODULE_41__components_drug_form_component__["a" /* DrugFormComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_responders_component__["a" /* ResponderComponent */], __WEBPACK_IMPORTED_MODULE_36__components_responder_edit_component__["a" /* ResponderEditComponent */], __WEBPACK_IMPORTED_MODULE_35__components_responder_form_component__["a" /* ResponderFormComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_local_govts_component__["a" /* LocalGovtComponent */], __WEBPACK_IMPORTED_MODULE_32__components_local_govt_edit_component__["a" /* LocalGovtEditComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_clients_component__["a" /* ClientComponent */], __WEBPACK_IMPORTED_MODULE_38__components_client_detail_component__["a" /* ClientDetailComponent */], __WEBPACK_IMPORTED_MODULE_39__components_client_edit_component__["a" /* ClientEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_drugs_component__["a" /* DrugsComponent */], __WEBPACK_IMPORTED_MODULE_42__components_drug_edit_component__["a" /* DrugEditComponent */], __WEBPACK_IMPORTED_MODULE_40__components_drug_detail_component__["a" /* DrugDetailComponent */], __WEBPACK_IMPORTED_MODULE_34__components_responder_detail_component__["a" /* ResponderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_22__components_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_28__components_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_test_centers_component__["a" /* TestCenterComponent */], __WEBPACK_IMPORTED_MODULE_48__components_new_tc_component__["a" /* NewTCComponent */], __WEBPACK_IMPORTED_MODULE_49__components_tc_detail_component__["a" /* TCDetailComponent */], __WEBPACK_IMPORTED_MODULE_50__components_tc_edit_component__["a" /* TCEditComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_partners_component__["a" /* PartnerComponent */], __WEBPACK_IMPORTED_MODULE_52__components_new_partner_component__["a" /* NewPartnerComponent */], __WEBPACK_IMPORTED_MODULE_53__components_partner_detail_component__["a" /* PartnerDetailComponent */], __WEBPACK_IMPORTED_MODULE_54__components_partner_edit_component__["a" /* PartnerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_hmo_component__["a" /* HMOComponent */], __WEBPACK_IMPORTED_MODULE_46__components_hmo_edit_component__["a" /* HMOEditComponent */], __WEBPACK_IMPORTED_MODULE_45__components_hmo_form_component__["a" /* HMOFormComponent */], __WEBPACK_IMPORTED_MODULE_44__components_hmo_detail_component__["a" /* HMODetailComponent */],
            __WEBPACK_IMPORTED_MODULE_59__components_charts_res_locs_chart_component__["a" /* ResponderLocationChartComponent */], __WEBPACK_IMPORTED_MODULE_60__components_charts_res_kits_chart_component__["a" /* ResponderKitChartComponent */], __WEBPACK_IMPORTED_MODULE_61__components_charts_res_concentration_chart_component__["a" /* ResponderConcentrationChartComponent */],
            __WEBPACK_IMPORTED_MODULE_62__components_charts_clients_diseases_chart_component__["a" /* ClientDiseaseChartComponent */], __WEBPACK_IMPORTED_MODULE_64__components_charts_clients_disabilities_chart_component__["a" /* ClientDisabilityChartComponent */], __WEBPACK_IMPORTED_MODULE_63__components_charts_clients_allergies_chart_component__["a" /* ClientAllergytChartComponent */],
            __WEBPACK_IMPORTED_MODULE_55__components_users_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_56__components_user_detail_component__["a" /* UserDetailComponent */], __WEBPACK_IMPORTED_MODULE_57__components_new_user_component__["a" /* NewUserComponent */], __WEBPACK_IMPORTED_MODULE_58__components_user_edit_component__["a" /* UserEditComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["a" /* ToasterModule */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_8_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_10_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                confirmButtonType: 'danger' // set defaults here
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_65__services_user_srv__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_68__shared_api__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_66__utils_login_guard__["a" /* LoggedInGuard */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_67__utils_headers__["a" /* CustomRequestOptions */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/allergies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__ = __webpack_require__("./src/app/services/allergies.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllergyComponent = (function () {
    function AllergyComponent(_allergyService) {
        this._allergyService = _allergyService;
        this.search = "";
    }
    AllergyComponent.prototype.getAllergies = function () {
        var _this = this;
        this._allergyService
            .getAllergies()
            .then(function (allergies) { return _this.allergies = allergies; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    AllergyComponent.prototype.searchAllergy = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._allergyService.searchAllergy(this.search).then(function (result) { return _this.allergies = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getAllergies();
        }
    };
    ;
    AllergyComponent.prototype.deleteAllergy = function (x) {
        var _this = this;
        this._allergyService.deleteAllergy(x.id).then(function (response) {
            var index = _this.allergies.indexOf(x);
            if (index !== -1) {
                _this.allergies.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    AllergyComponent.prototype.ngOnInit = function () {
        this.getAllergies();
    };
    return AllergyComponent;
}());
AllergyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'disabilities',
        template: __webpack_require__("./src/app/views/allergies.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */]) === "function" && _a || Object])
], AllergyComponent);

var _a;
//# sourceMappingURL=allergies.component.js.map

/***/ }),

/***/ "./src/app/components/allergy-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__ = __webpack_require__("./src/app/services/allergies.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllergyDetailComponent = (function () {
    function AllergyDetailComponent(_allergySrv, route, globals) {
        this._allergySrv = _allergySrv;
        this.route = route;
        this.globals = globals;
        this.allergy = {};
    }
    AllergyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._allergySrv.findAllergyByID(+params['id']);
        })
            .subscribe(function (data) { return _this.allergy = data; });
    };
    return AllergyDetailComponent;
}());
AllergyDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'allergy-detail',
        template: __webpack_require__("./src/app/views/allergy-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */],]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], AllergyDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=allergy-detail.component.js.map

/***/ }),

/***/ "./src/app/components/allergy-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__ = __webpack_require__("./src/app/services/allergies.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllergyEditComponent = (function () {
    function AllergyEditComponent(allergySrv, route) {
        this.allergySrv = allergySrv;
        this.route = route;
        this.allergy = {};
    }
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    AllergyEditComponent.prototype.getAllergyInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.allergySrv.findAllergyByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.allergy = data;
        });
    };
    ;
    AllergyEditComponent.prototype.ngOnInit = function () {
        this.getAllergyInfo();
        // this.fetchLGA();
    };
    AllergyEditComponent.prototype.onSubmit = function () {
        this.allergySrv.updateAllergyInfo(this.allergy);
    };
    return AllergyEditComponent;
}());
AllergyEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/allergy-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], AllergyEditComponent);

var _a, _b;
//# sourceMappingURL=allergy-edit.component.js.map

/***/ }),

/***/ "./src/app/components/allergy-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__ = __webpack_require__("./src/app/services/allergies.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllergyFormComponent = (function () {
    function AllergyFormComponent(allergySrv, route) {
        this.allergySrv = allergySrv;
        this.route = route;
        this.allergy = {};
    }
    AllergyFormComponent.prototype.ngOnInit = function () {
        // this.fetchLGA();
    };
    AllergyFormComponent.prototype.onSubmit = function () {
        this.allergySrv.saveAllergy(this.allergy);
    };
    return AllergyFormComponent;
}());
AllergyFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/allergy-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_allergies_srv__["a" /* AllergyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], AllergyFormComponent);

var _a, _b;
//# sourceMappingURL=allergy-form.component.js.map

/***/ }),

/***/ "./src/app/components/blood-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blood_group_srv__ = __webpack_require__("./src/app/services/blood-group.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BloodGroupComponent = (function () {
    function BloodGroupComponent(_bgService) {
        this._bgService = _bgService;
    }
    BloodGroupComponent.prototype.getBloodGroup = function () {
        var _this = this;
        this._bgService
            .getBloodGroup()
            .then(function (bloodGroups) { return _this.bloodGroups = bloodGroups; })
            .catch(function (error) { return _this.error = error; });
    };
    BloodGroupComponent.prototype.ngOnInit = function () {
        this.getBloodGroup();
    };
    return BloodGroupComponent;
}());
BloodGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bloodgroup',
        template: __webpack_require__("./src/app/views/blood-groups.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_blood_group_srv__["a" /* BloodGroupService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blood_group_srv__["a" /* BloodGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blood_group_srv__["a" /* BloodGroupService */]) === "function" && _a || Object])
], BloodGroupComponent);

var _a;
//# sourceMappingURL=blood-groups.component.js.map

/***/ }),

/***/ "./src/app/components/charts/clients-allergies-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__ = __webpack_require__("./src/app/services/dashboard.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientAllergytChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientAllergytChartComponent = (function () {
    function ClientAllergytChartComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    ClientAllergytChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getDashboardData()
            .then(function (response) {
            var g = response[4]['clients_with_allergies'];
            var iArray = [];
            g.forEach(function (item) {
                var inner = [item['allergies__name'], item['total']];
                iArray.push(inner);
            });
            _this.displayChart(iArray);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ClientAllergytChartComponent.prototype.displayChart = function (_data) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Clients vs Allergies'
            },
            // subtitle: {
            //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            // },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Allergies'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Clients'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}' + ' client(s)' //_data[0][1] +' client(s) have  ' +_data[0][0]//'Population in 2008: <b>{point.y} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: _data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    };
    ;
    return ClientAllergytChartComponent;
}());
ClientAllergytChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-allergies-component',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "\n           <chart [options]=\"options\"></chart>     \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]) === "function" && _a || Object])
], ClientAllergytChartComponent);

var _a;
//# sourceMappingURL=clients-allergies-chart.component.js.map

/***/ }),

/***/ "./src/app/components/charts/clients-disabilities-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__ = __webpack_require__("./src/app/services/dashboard.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDisabilityChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientDisabilityChartComponent = (function () {
    function ClientDisabilityChartComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    ClientDisabilityChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getDashboardData()
            .then(function (response) {
            var g = response[5]['clients_with_disabilities'];
            var iArray = [];
            g.forEach(function (item) {
                var inner = [item['disabilities__name'], item['total']];
                iArray.push(inner);
            });
            _this.displayChart(iArray);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ClientDisabilityChartComponent.prototype.displayChart = function (_data) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Clients vs Disabilities'
            },
            // subtitle: {
            //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            // },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Disabilities'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Clients'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}' + ' clients(s)' //'Population in 2008: <b>{point.y} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: _data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    };
    ;
    return ClientDisabilityChartComponent;
}());
ClientDisabilityChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-disabilities-component',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "\n           <chart [options]=\"options\"></chart>     \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]) === "function" && _a || Object])
], ClientDisabilityChartComponent);

var _a;
//# sourceMappingURL=clients-disabilities-chart.component.js.map

/***/ }),

/***/ "./src/app/components/charts/clients-diseases-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__ = __webpack_require__("./src/app/services/dashboard.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDiseaseChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientDiseaseChartComponent = (function () {
    function ClientDiseaseChartComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    ClientDiseaseChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getDashboardData()
            .then(function (response) {
            var g = response[3]['clients_with_diseases'];
            var iArray = [];
            g.forEach(function (item) {
                var inner = [item['diseases__name'], item['total']];
                iArray.push(inner);
            });
            _this.displayChart(iArray);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ClientDiseaseChartComponent.prototype.displayChart = function (_data) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Clients vs Diseases'
            },
            // subtitle: {
            //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            // },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Diseases'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Client'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}' + ' client(s)' //_data[0][1] +' client(s) have  ' +_data[0][0]//'Population in 2008: <b>{point.y} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: _data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    };
    ;
    return ClientDiseaseChartComponent;
}());
ClientDiseaseChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-diseases-component',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "\n           <chart [options]=\"options\"></chart>     \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]) === "function" && _a || Object])
], ClientDiseaseChartComponent);

var _a;
//# sourceMappingURL=clients-diseases-chart.component.js.map

/***/ }),

/***/ "./src/app/components/charts/res-concentration-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__ = __webpack_require__("./src/app/services/dashboard.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderConcentrationChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponderConcentrationChartComponent = (function () {
    function ResponderConcentrationChartComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    ResponderConcentrationChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getDashboardData()
            .then(function (response) {
            var g = response[2]['responders_concentration'];
            var iArray = [];
            g.forEach(function (item) {
                var inner = [item['areas_of_concentration__name'], item['total']];
                iArray.push(inner);
            });
            _this.displayChart(iArray);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderConcentrationChartComponent.prototype.displayChart = function (_data) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Responders vs Concentrations'
            },
            // subtitle: {
            //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            // },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Concentrations'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Responders'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}' + ' responder(s)' //_data[0][1] +' responder(s) in ' +_data[0][0]//'Population in 2008: <b>{point.y} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: _data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    };
    ;
    return ResponderConcentrationChartComponent;
}());
ResponderConcentrationChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'responder-concentration-component',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "\n           <chart [options]=\"options\"></chart>     \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]) === "function" && _a || Object])
], ResponderConcentrationChartComponent);

var _a;
//# sourceMappingURL=res-concentration-chart.component.js.map

/***/ }),

/***/ "./src/app/components/charts/res-kits-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__ = __webpack_require__("./src/app/services/dashboard.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderKitChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponderKitChartComponent = (function () {
    function ResponderKitChartComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    ResponderKitChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getDashboardData()
            .then(function (response) {
            var g = response[1]['responders_kits'];
            var iArray = [];
            g.forEach(function (item) {
                var inner = [item['kits__name'], item['total']];
                iArray.push(inner);
            });
            _this.displayChart(iArray);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderKitChartComponent.prototype.displayChart = function (_data) {
        // console.log(_data[i][0], _data[][1]);
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Responders vs Kits'
            },
            // subtitle: {
            //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            // },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Kits'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Responders'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}' + ' responder(s)'
                // _data[0][1] +' responder(s) has  ' + _data[0][0] //'Population in 2008: <b>{point.y} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: _data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    };
    ;
    return ResponderKitChartComponent;
}());
ResponderKitChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'responder-kits-component',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "\n           <chart [options]=\"options\"></chart>     \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]) === "function" && _a || Object])
], ResponderKitChartComponent);

var _a;
//# sourceMappingURL=res-kits-chart.component.js.map

/***/ }),

/***/ "./src/app/components/charts/res-locs-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__ = __webpack_require__("./src/app/services/dashboard.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderLocationChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponderLocationChartComponent = (function () {
    function ResponderLocationChartComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    ;
    ResponderLocationChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getDashboardData()
            .then(function (response) {
            var g = response[0]['reponders_locations'];
            var iArray = [];
            g.forEach(function (item) {
                var inner = [item['state__name'], item['total']];
                iArray.push(inner);
            });
            _this.displayChart(iArray);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ResponderLocationChartComponent.prototype.displayChart = function (_data) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Responders vs Locations'
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Locations'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Responders'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}' + ' responder(s)' //_data[0][1] +' responder(s) in  ' +_data[0][0] //'Population in 2008: <b>{point.y} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: _data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    };
    ;
    return ResponderLocationChartComponent;
}());
ResponderLocationChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'responder-locations-component',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "\n           <chart [options]=\"options\"></chart>     \n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_srv__["a" /* DashboardService */]) === "function" && _a || Object])
], ResponderLocationChartComponent);

var _a;
//# sourceMappingURL=res-locs-chart.component.js.map

/***/ }),

/***/ "./src/app/components/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__ = __webpack_require__("./src/app/services/clients.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__ = __webpack_require__("./src/app/services/doc-type.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientDetailComponent = (function () {
    function ClientDetailComponent(_clientSrv, _docTypeService, route, globals) {
        this._clientSrv = _clientSrv;
        this._docTypeService = _docTypeService;
        this.route = route;
        this.globals = globals;
        this.client = {};
        this.doc = {};
        this.upload = false;
        this.busyUploading = false;
        this.host_address = this.globals.HOST_URL;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._clientSrv.findClientByID(+params['id']);
        })
            .subscribe(function (data) { return _this.client = data; });
    };
    return ClientDetailComponent;
}());
ClientDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-detail',
        template: __webpack_require__("./src/app/views/client-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__["a" /* DocumentTypeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__["a" /* DocumentTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__["a" /* DocumentTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], ClientDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client-detail.component.js.map

/***/ }),

/***/ "./src/app/components/client-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__ = __webpack_require__("./src/app/services/clients.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blood_group_srv__ = __webpack_require__("./src/app/services/blood-group.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_disability_srv__ = __webpack_require__("./src/app/services/disability.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_genotypes_srv__ = __webpack_require__("./src/app/services/genotypes.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_allergies_srv__ = __webpack_require__("./src/app/services/allergies.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_disease_srv__ = __webpack_require__("./src/app/services/disease.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gender_srv__ = __webpack_require__("./src/app/services/gender.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_hmo_srv__ = __webpack_require__("./src/app/services/hmo.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClientEditComponent = (function () {
    function ClientEditComponent(bloodGrpSrv, disabilitySrv, hmoSrv, _clientSrv, genotypeSrv, allergySrv, diseaseSrv, genderSrv, route) {
        this.bloodGrpSrv = bloodGrpSrv;
        this.disabilitySrv = disabilitySrv;
        this.hmoSrv = hmoSrv;
        this._clientSrv = _clientSrv;
        this.genotypeSrv = genotypeSrv;
        this.allergySrv = allergySrv;
        this.diseaseSrv = diseaseSrv;
        this.genderSrv = genderSrv;
        this.route = route;
        this.client = {};
    }
    ClientEditComponent.prototype.getBloodGroups = function () {
        var _this = this;
        this.bloodGrpSrv.getBloodGroup().then(function (response) { return _this.blood_group_list = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientEditComponent.prototype.getDisablities = function () {
        var _this = this;
        this.disabilitySrv.getDisability().then(function (response) { return _this.disability_list = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientEditComponent.prototype.getGenotypes = function () {
        var _this = this;
        this.genotypeSrv.getGenotypes().then(function (response) { return _this.genotype_list = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientEditComponent.prototype.getAllergies = function () {
        var _this = this;
        this.allergySrv.getAllergies().then(function (response) { return _this.allergy_list = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientEditComponent.prototype.getDiseases = function () {
        var _this = this;
        this.diseaseSrv.getDiseases().then(function (response) { return _this.diseases_list = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientEditComponent.prototype.getGenders = function () {
        var _this = this;
        this.genderSrv.getGenders().then(function (response) { return _this.gender_list = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientEditComponent.prototype.getHMOs = function () {
        var _this = this;
        this.hmoSrv.getHMOs().then(function (response) { return _this.hmo_list = response; }).
            catch(function (error) { return _this.error = error; });
    };
    ClientEditComponent.prototype.getResponderInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._clientSrv.findClientByID(+params['id']);
        })
            .subscribe(function (response) {
            _this.client = response;
            _this.client.gender = response.gender.id;
            _this.client.blood_group = response.blood_group.id;
            _this.client.genotype = response.genotype ? response.genotype.id : null;
            _this.client.hmo = response.hmo ? response.hmo.id : null;
            var allergies_temp = [];
            response.allergies.forEach(function (item) {
                allergies_temp.push(item.id);
            });
            _this.client.allergies_list = allergies_temp;
            var disabilities_temp = [];
            response.disabilities.forEach(function (item) {
                disabilities_temp.push(item.id);
            });
            _this.client.disabilities_list = disabilities_temp;
            var diseases_temp = [];
            response.diseases.forEach(function (item) {
                diseases_temp.push(item.id);
            });
            _this.client.diseases_list = diseases_temp;
        });
    };
    ;
    ClientEditComponent.prototype.ngOnInit = function () {
        this.getResponderInfo();
        this.getBloodGroups();
        this.getDisablities();
        this.getAllergies();
        this.getGenotypes();
        this.getDiseases();
        this.getGenders();
        this.getHMOs();
    };
    ClientEditComponent.prototype.onSubmit = function () {
        this._clientSrv.updateClientInfo(this.client);
    };
    return ClientEditComponent;
}());
ClientEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'client-edit',
        template: __webpack_require__("./src/app/views/client-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_2__services_blood_group_srv__["a" /* BloodGroupService */], __WEBPACK_IMPORTED_MODULE_3__services_disability_srv__["a" /* DisabilityService */], __WEBPACK_IMPORTED_MODULE_4__services_genotypes_srv__["a" /* GenotypeService */], __WEBPACK_IMPORTED_MODULE_5__services_allergies_srv__["a" /* AllergyService */],
            __WEBPACK_IMPORTED_MODULE_6__services_disease_srv__["a" /* DiseaseService */], __WEBPACK_IMPORTED_MODULE_7__services_gender_srv__["a" /* GenderService */], __WEBPACK_IMPORTED_MODULE_8__services_hmo_srv__["a" /* HMOService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blood_group_srv__["a" /* BloodGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blood_group_srv__["a" /* BloodGroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_disability_srv__["a" /* DisabilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_disability_srv__["a" /* DisabilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__services_hmo_srv__["a" /* HMOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_hmo_srv__["a" /* HMOService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_genotypes_srv__["a" /* GenotypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_genotypes_srv__["a" /* GenotypeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_allergies_srv__["a" /* AllergyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_allergies_srv__["a" /* AllergyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_disease_srv__["a" /* DiseaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_disease_srv__["a" /* DiseaseService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_gender_srv__["a" /* GenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_gender_srv__["a" /* GenderService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* ActivatedRoute */]) === "function" && _j || Object])
], ClientEditComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=client-edit.component.js.map

/***/ }),

/***/ "./src/app/components/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__ = __webpack_require__("./src/app/services/clients.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientComponent = (function () {
    function ClientComponent(_clientService) {
        this._clientService = _clientService;
        this.search = "";
    }
    ClientComponent.prototype.getClients = function () {
        var _this = this;
        this._clientService
            .getClients()
            .then(function (clients) { return _this.clients = clients; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ClientComponent.prototype.searchClient = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._clientService.searchClient(this.search).then(function (result) { return _this.clients = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getClients();
        }
    };
    ;
    ClientComponent.prototype.deleteClient = function (x) {
        var _this = this;
        this._clientService.deleteClient(x.id).then(function (response) {
            var index = _this.clients.indexOf(x);
            if (index !== -1) {
                _this.clients.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    ClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'responders',
        template: __webpack_require__("./src/app/views/clients.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clients_srv__["a" /* ClientService */]) === "function" && _a || Object])
], ClientComponent);

var _a;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "./src/app/components/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'register',
        template: __webpack_require__("./src/app/views/dashboard.html"),
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/components/disabilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__ = __webpack_require__("./src/app/services/disability.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabilityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisabilityComponent = (function () {
    function DisabilityComponent(_disabilityService) {
        this._disabilityService = _disabilityService;
        this.search = "";
    }
    DisabilityComponent.prototype.getDisablity = function () {
        var _this = this;
        this._disabilityService
            .getDisability()
            .then(function (disabilities) { return _this.disabilities = disabilities; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DisabilityComponent.prototype.searchDisability = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._disabilityService.searchDisability(this.search).then(function (result) { return _this.disabilities = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getDisablity();
        }
    };
    ;
    DisabilityComponent.prototype.deleteDisability = function (x) {
        var _this = this;
        this._disabilityService.deleteDisability(x.id).then(function (response) {
            var index = _this.disabilities.indexOf(x);
            if (index !== -1) {
                _this.disabilities.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    DisabilityComponent.prototype.ngOnInit = function () {
        this.getDisablity();
    };
    return DisabilityComponent;
}());
DisabilityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disabilities',
        template: __webpack_require__("./src/app/views/disabilities.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */]) === "function" && _a || Object])
], DisabilityComponent);

var _a;
//# sourceMappingURL=disabilities.component.js.map

/***/ }),

/***/ "./src/app/components/disability-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__ = __webpack_require__("./src/app/services/disability.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabilityEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisabilityEditComponent = (function () {
    function DisabilityEditComponent(disabilitySrv, route) {
        this.disabilitySrv = disabilitySrv;
        this.route = route;
        this.disability = {};
    }
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    DisabilityEditComponent.prototype.getDisabilityInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.disabilitySrv.findDisabilityByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.disability = data;
        });
    };
    ;
    DisabilityEditComponent.prototype.ngOnInit = function () {
        this.getDisabilityInfo();
        // this.fetchLGA();
    };
    DisabilityEditComponent.prototype.onSubmit = function () {
        this.disabilitySrv.updateDisabilityInfo(this.disability);
    };
    return DisabilityEditComponent;
}());
DisabilityEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/disability-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DisabilityEditComponent);

var _a, _b;
//# sourceMappingURL=disability-edit.component.js.map

/***/ }),

/***/ "./src/app/components/disability-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__ = __webpack_require__("./src/app/services/disability.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabilityFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisabilityFormComponent = (function () {
    function DisabilityFormComponent(disabilitySrv, route) {
        this.disabilitySrv = disabilitySrv;
        this.route = route;
        this.disability = {};
    }
    DisabilityFormComponent.prototype.ngOnInit = function () {
        // this.fetchLGA();
    };
    DisabilityFormComponent.prototype.onSubmit = function () {
        this.disabilitySrv.saveDisability(this.disability);
    };
    return DisabilityFormComponent;
}());
DisabilityFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/disability-form.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_disability_srv__["a" /* DisabilityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DisabilityFormComponent);

var _a, _b;
//# sourceMappingURL=disability-form.component.js.map

/***/ }),

/***/ "./src/app/components/disease-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__ = __webpack_require__("./src/app/services/disease.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseaseEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiseaseEditComponent = (function () {
    function DiseaseEditComponent(diseaseSrv, route) {
        this.diseaseSrv = diseaseSrv;
        this.route = route;
        this.disease = {};
    }
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    DiseaseEditComponent.prototype.getDiseaseInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.diseaseSrv.findDiseaseByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.disease = data;
        });
    };
    ;
    DiseaseEditComponent.prototype.ngOnInit = function () {
        this.getDiseaseInfo();
        // this.fetchLGA();
    };
    DiseaseEditComponent.prototype.onSubmit = function () {
        this.diseaseSrv.updateDiseaseInfo(this.disease);
    };
    return DiseaseEditComponent;
}());
DiseaseEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/disease-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DiseaseEditComponent);

var _a, _b;
//# sourceMappingURL=disease-edit.component.js.map

/***/ }),

/***/ "./src/app/components/disease-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__ = __webpack_require__("./src/app/services/disease.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseaseFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiseaseFormComponent = (function () {
    function DiseaseFormComponent(diseaseSrv, route) {
        this.diseaseSrv = diseaseSrv;
        this.route = route;
        this.disease = {};
    }
    DiseaseFormComponent.prototype.ngOnInit = function () {
        // this.fetchLGA();
    };
    DiseaseFormComponent.prototype.onSubmit = function () {
        this.diseaseSrv.saveDisease(this.disease);
    };
    return DiseaseFormComponent;
}());
DiseaseFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/disease-form.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DiseaseFormComponent);

var _a, _b;
//# sourceMappingURL=disease-form.component.js.map

/***/ }),

/***/ "./src/app/components/diseases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__ = __webpack_require__("./src/app/services/disease.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseasesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiseasesComponent = (function () {
    function DiseasesComponent(_diseaseService) {
        this._diseaseService = _diseaseService;
        this.search = "";
    }
    DiseasesComponent.prototype.fetchDiseases = function () {
        var _this = this;
        this._diseaseService
            .getDiseases()
            .then(function (diseases) { return _this.diseases = diseases; })
            .catch(function (error) { return _this.error = error; });
    };
    DiseasesComponent.prototype.searchDisease = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._diseaseService.searchDisease(this.search).then(function (result) { return _this.diseases = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.fetchDiseases();
        }
    };
    DiseasesComponent.prototype.deleteDisease = function (x) {
        var _this = this;
        this._diseaseService.deleteDisease(x.id).then(function (response) {
            var index = _this.diseases.indexOf(x);
            if (index !== -1) {
                _this.diseases.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    DiseasesComponent.prototype.ngOnInit = function () {
        this.fetchDiseases();
    };
    return DiseasesComponent;
}());
DiseasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disabilities',
        template: __webpack_require__("./src/app/views/diseases.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_disease_srv__["a" /* DiseaseService */]) === "function" && _a || Object])
], DiseasesComponent);

var _a;
//# sourceMappingURL=diseases.component.js.map

/***/ }),

/***/ "./src/app/components/drug-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__ = __webpack_require__("./src/app/services/drugs.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugDetailComponent = (function () {
    function DrugDetailComponent(_drugsService, route) {
        this._drugsService = _drugsService;
        this.route = route;
        this.drug = {};
    }
    // getDrugs() {
    // 	    this._drugsService
    // 	        .getDrugs()
    // 	        .then(drugs => this.drugs = drugs)
    // 	        .catch(error => this.error = error);
    // 	  }
    DrugDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._drugsService.findDrugByID(+params['id']);
        })
            .subscribe(function (drug) { return _this.drug = drug; });
    };
    return DrugDetailComponent;
}());
DrugDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drug-detail',
        template: __webpack_require__("./src/app/views/drug-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DrugDetailComponent);

var _a, _b;
//# sourceMappingURL=drug-detail.component.js.map

/***/ }),

/***/ "./src/app/components/drug-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__ = __webpack_require__("./src/app/services/drugs.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__ = __webpack_require__("./src/app/services/drug-brand.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__ = __webpack_require__("./src/app/services/dispense-type.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__ = __webpack_require__("./src/app/services/drug-form.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_drug_contraindication_srv__ = __webpack_require__("./src/app/services/drug-contraindication.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_drug_classification_srv__ = __webpack_require__("./src/app/services/drug-classification.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_drug_indication_srv__ = __webpack_require__("./src/app/services/drug-indication.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_side_effect_srv__ = __webpack_require__("./src/app/services/side-effect.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DrugEditComponent = (function () {
    function DrugEditComponent(_brandService, _dispenseType, _drugService, _drugFormService, route, _drugIndicationSrv, _drugClassificationSrv, _drugContraIndicationSrv, _sideEffectSrv) {
        this._brandService = _brandService;
        this._dispenseType = _dispenseType;
        this._drugService = _drugService;
        this._drugFormService = _drugFormService;
        this.route = route;
        this._drugIndicationSrv = _drugIndicationSrv;
        this._drugClassificationSrv = _drugClassificationSrv;
        this._drugContraIndicationSrv = _drugContraIndicationSrv;
        this._sideEffectSrv = _sideEffectSrv;
        this.drug = {};
    }
    DrugEditComponent.prototype.getBrands = function () {
        var _this = this;
        this._brandService.getDrugBrands().then(function (brands) { return _this.brands = brands; })
            .catch(function (error) { return _this.error = error; });
    };
    DrugEditComponent.prototype.getDispenseTypes = function () {
        var _this = this;
        this._dispenseType.getDispenseType().then(function (dispense_types) { return _this.dispense_types = dispense_types; })
            .catch(function (error) { return _this.error = error; });
    };
    DrugEditComponent.prototype.getDrugForms = function () {
        var _this = this;
        this._drugFormService.getDrugForms().then(function (drug_forms) { return _this.drug_forms = drug_forms; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugEditComponent.prototype.getDrugClassifications = function () {
        var _this = this;
        this._drugClassificationSrv.getDrugClassifications().then(function (response) { return _this.drug_classifications = response; })
            .catch(function (error) { return _this.error = error; });
    };
    DrugEditComponent.prototype.getDrugIndications = function () {
        var _this = this;
        this._drugIndicationSrv.getDrugIndications().then(function (response) { return _this.drug_indications = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugEditComponent.prototype.getContraIndications = function () {
        var _this = this;
        this._drugContraIndicationSrv.getDrugContraIndications().then(function (response) { return _this.drug_contraindications = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugEditComponent.prototype.getSideEffects = function () {
        var _this = this;
        this._sideEffectSrv.getSideEffect().then(function (response) { return _this.side_effects = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugEditComponent.prototype.getDrugInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._drugService.findDrugByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.drug = data;
            _this.drug.temp_dispense_type = data.dispense_type.id;
            _this.drug.temp_form = data.form.id;
            var temp_brands = [];
            data.brand.forEach(function (item) {
                temp_brands.push(item.id);
            });
            _this.drug.temp_brands = temp_brands;
            var temp_indications = [];
            data.indications.forEach(function (item) {
                temp_indications.push(item.id);
            });
            _this.drug.temp_indications = temp_indications;
            var contra_indications = [];
            data.contra_indications.forEach(function (item) {
                contra_indications.push(item.id);
            });
            _this.drug.temp_contra_indications = contra_indications;
            var side_effects_list = [];
            data.side_effects.forEach(function (item) {
                side_effects_list.push(item.id);
            });
            _this.drug.temp_side_effects = side_effects_list;
            var temp_classifications = [];
            data.classifications.forEach(function (item) {
                temp_classifications.push(item.id);
            });
            _this.drug.temp_classifications = temp_classifications;
        });
    };
    DrugEditComponent.prototype.ngOnInit = function () {
        this.getDrugInfo();
        this.getBrands();
        this.getDispenseTypes();
        this.getDrugForms();
        this.getDrugClassifications();
        this.getDrugIndications();
        this.getContraIndications();
        this.getSideEffects();
    };
    DrugEditComponent.prototype.onSubmit = function () {
        this._drugService.updateDrugInfo(this.drug);
    };
    return DrugEditComponent;
}());
DrugEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/drug-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */], __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__["a" /* DrugBrandService */], __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__["a" /* DrugDispenseTypeService */], __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__["a" /* DrugFormService */], __WEBPACK_IMPORTED_MODULE_7__services_drug_classification_srv__["a" /* DrugClassificationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_drug_indication_srv__["a" /* DrugIndicationService */], __WEBPACK_IMPORTED_MODULE_6__services_drug_contraindication_srv__["a" /* DrugContraIndicationService */], __WEBPACK_IMPORTED_MODULE_9__services_side_effect_srv__["a" /* SideEffectService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__["a" /* DrugBrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__["a" /* DrugBrandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__["a" /* DrugDispenseTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__["a" /* DrugDispenseTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__["a" /* DrugFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__["a" /* DrugFormService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_drug_indication_srv__["a" /* DrugIndicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_drug_indication_srv__["a" /* DrugIndicationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_drug_classification_srv__["a" /* DrugClassificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_drug_classification_srv__["a" /* DrugClassificationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_drug_contraindication_srv__["a" /* DrugContraIndicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_drug_contraindication_srv__["a" /* DrugContraIndicationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__services_side_effect_srv__["a" /* SideEffectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_side_effect_srv__["a" /* SideEffectService */]) === "function" && _j || Object])
], DrugEditComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=drug-edit.component.js.map

/***/ }),

/***/ "./src/app/components/drug-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__ = __webpack_require__("./src/app/services/drugs.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__ = __webpack_require__("./src/app/services/drug-brand.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__ = __webpack_require__("./src/app/services/dispense-type.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__ = __webpack_require__("./src/app/services/drug-form.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_drug_contraindication_srv__ = __webpack_require__("./src/app/services/drug-contraindication.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_drug_classification_srv__ = __webpack_require__("./src/app/services/drug-classification.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_drug_indication_srv__ = __webpack_require__("./src/app/services/drug-indication.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_side_effect_srv__ = __webpack_require__("./src/app/services/side-effect.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DrugFormComponent = (function () {
    function DrugFormComponent(_brandService, _dispenseType, _drugService, _drugFormService, _drugIndicationSrv, _drugClassificationSrv, _drugContraIndicationSrv, _sideEffectSrv) {
        this._brandService = _brandService;
        this._dispenseType = _dispenseType;
        this._drugService = _drugService;
        this._drugFormService = _drugFormService;
        this._drugIndicationSrv = _drugIndicationSrv;
        this._drugClassificationSrv = _drugClassificationSrv;
        this._drugContraIndicationSrv = _drugContraIndicationSrv;
        this._sideEffectSrv = _sideEffectSrv;
        this.drug = {};
    }
    DrugFormComponent.prototype.getBrands = function () {
        var _this = this;
        this._brandService.getDrugBrands().then(function (brands) { return _this.brands = brands; })
            .catch(function (error) { return _this.error = error; });
    };
    DrugFormComponent.prototype.getDispenseTypes = function () {
        var _this = this;
        this._dispenseType.getDispenseType().then(function (dispense_types) { return _this.dispense_types = dispense_types; })
            .catch(function (error) { return _this.error = error; });
    };
    DrugFormComponent.prototype.getDrugForms = function () {
        var _this = this;
        this._drugFormService.getDrugForms().then(function (drug_forms) { return _this.drug_forms = drug_forms; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugFormComponent.prototype.getDrugClassifications = function () {
        var _this = this;
        this._drugClassificationSrv.getDrugClassifications().then(function (response) { return _this.drug_classifications = response; })
            .catch(function (error) { return _this.error = error; });
    };
    DrugFormComponent.prototype.getDrugIndications = function () {
        var _this = this;
        this._drugIndicationSrv.getDrugIndications().then(function (response) { return _this.drug_indications = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugFormComponent.prototype.getContraIndications = function () {
        var _this = this;
        this._drugContraIndicationSrv.getDrugContraIndications().then(function (response) { return _this.drug_contraindications = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugFormComponent.prototype.getSideEffects = function () {
        var _this = this;
        this._sideEffectSrv.getSideEffect().then(function (response) { return _this.side_effects = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugFormComponent.prototype.ngOnInit = function () {
        this.getBrands();
        this.getDispenseTypes();
        this.getDrugForms();
        this.getDrugClassifications();
        this.getDrugIndications();
        this.getContraIndications();
        this.getSideEffects();
    };
    DrugFormComponent.prototype.onSubmit = function () {
        this._drugService.saveDrug(this.drug);
    };
    return DrugFormComponent;
}());
DrugFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/drug-form.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */], __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__["a" /* DrugBrandService */], __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__["a" /* DrugDispenseTypeService */], __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__["a" /* DrugFormService */], __WEBPACK_IMPORTED_MODULE_6__services_drug_classification_srv__["a" /* DrugClassificationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_drug_indication_srv__["a" /* DrugIndicationService */], __WEBPACK_IMPORTED_MODULE_5__services_drug_contraindication_srv__["a" /* DrugContraIndicationService */], __WEBPACK_IMPORTED_MODULE_8__services_side_effect_srv__["a" /* SideEffectService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__["a" /* DrugBrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_drug_brand_srv__["a" /* DrugBrandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__["a" /* DrugDispenseTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dispense_type_srv__["a" /* DrugDispenseTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__["a" /* DrugFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_drug_form_srv__["a" /* DrugFormService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_drug_indication_srv__["a" /* DrugIndicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_drug_indication_srv__["a" /* DrugIndicationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_drug_classification_srv__["a" /* DrugClassificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_drug_classification_srv__["a" /* DrugClassificationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_drug_contraindication_srv__["a" /* DrugContraIndicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_drug_contraindication_srv__["a" /* DrugContraIndicationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_side_effect_srv__["a" /* SideEffectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_side_effect_srv__["a" /* SideEffectService */]) === "function" && _h || Object])
], DrugFormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=drug-form.component.js.map

/***/ }),

/***/ "./src/app/components/drugs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__ = __webpack_require__("./src/app/services/drugs.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrugsComponent = (function () {
    function DrugsComponent(_drugsService) {
        this._drugsService = _drugsService;
        this.search = "";
    }
    DrugsComponent.prototype.getDrugs = function () {
        var _this = this;
        this._drugsService
            .getDrugs()
            .then(function (drugs) { return _this.drugs = drugs; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    DrugsComponent.prototype.searchDrug = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._drugsService.searchDrug(this.search).then(function (result) { return _this.drugs = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getDrugs();
        }
    };
    ;
    DrugsComponent.prototype.ngOnInit = function () {
        this.getDrugs();
    };
    return DrugsComponent;
}());
DrugsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drugs',
        template: __webpack_require__("./src/app/views/drugs.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drugs_srv__["a" /* DrugService */]) === "function" && _a || Object])
], DrugsComponent);

var _a;
//# sourceMappingURL=drugs.component.js.map

/***/ }),

/***/ "./src/app/components/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-component',
        template: __webpack_require__("./src/app/views/footer.html"),
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/components/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        this._userService.logout();
        this.router.navigateByUrl('/login');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header-component',
        template: __webpack_require__("./src/app/views/header.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/components/hmo-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__ = __webpack_require__("./src/app/services/hmo.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HMODetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HMODetailComponent = (function () {
    function HMODetailComponent(_hmoSrv, route) {
        this._hmoSrv = _hmoSrv;
        this.route = route;
        this.hmo = {};
    }
    HMODetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._hmoSrv.findHMOByID(+params['id']);
        })
            .subscribe(function (res) { return _this.hmo = res; });
    };
    return HMODetailComponent;
}());
HMODetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmo-detail',
        template: __webpack_require__("./src/app/views/hmo-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], HMODetailComponent);

var _a, _b;
//# sourceMappingURL=hmo-detail.component.js.map

/***/ }),

/***/ "./src/app/components/hmo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__ = __webpack_require__("./src/app/services/hmo.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HMOEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HMOEditComponent = (function () {
    function HMOEditComponent(hmoSrv, _stateService, route) {
        this.hmoSrv = hmoSrv;
        this._stateService = _stateService;
        this.route = route;
        this.hmo = {};
    }
    HMOEditComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    HMOEditComponent.prototype.getHMOInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.hmoSrv.findHMOByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.hmo = data;
            console.log(data.state.id);
            _this.hmo.myState = data.state.id;
        });
    };
    ;
    HMOEditComponent.prototype.ngOnInit = function () {
        this.getHMOInfo();
        this.getStates();
        // this.fetchLGA();
    };
    HMOEditComponent.prototype.onSubmit = function () {
        this.hmoSrv.updateHMOInfo(this.hmo);
    };
    return HMOEditComponent;
}());
HMOEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/hmo-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], HMOEditComponent);

var _a, _b, _c;
//# sourceMappingURL=hmo-edit.component.js.map

/***/ }),

/***/ "./src/app/components/hmo-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__ = __webpack_require__("./src/app/services/hmo.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HMOFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HMOFormComponent = (function () {
    function HMOFormComponent(hmoSrv, _stateService, route) {
        this.hmoSrv = hmoSrv;
        this._stateService = _stateService;
        this.route = route;
        this.hmo = {};
    }
    HMOFormComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    HMOFormComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    HMOFormComponent.prototype.onSubmit = function () {
        this.hmoSrv.saveHMO(this.hmo);
    };
    return HMOFormComponent;
}());
HMOFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/hmo-form.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], HMOFormComponent);

var _a, _b, _c;
//# sourceMappingURL=hmo-form.component.js.map

/***/ }),

/***/ "./src/app/components/hmo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__ = __webpack_require__("./src/app/services/hmo.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HMOComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HMOComponent = (function () {
    function HMOComponent(_hmoService) {
        this._hmoService = _hmoService;
    }
    HMOComponent.prototype.fetchHMOs = function () {
        var _this = this;
        this._hmoService
            .getHMOs()
            .then(function (hmos) { return _this.hmos = hmos; })
            .catch(function (error) { return _this.error = error; });
    };
    HMOComponent.prototype.deleteHMO = function (x) {
        var _this = this;
        this._hmoService.deleteHMO(x.id).then(function (response) {
            var index = _this.hmos.indexOf(x);
            if (index !== -1) {
                _this.hmos.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    HMOComponent.prototype.ngOnInit = function () {
        this.fetchHMOs();
    };
    return HMOComponent;
}());
HMOComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'disabilities',
        template: __webpack_require__("./src/app/views/hmos.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hmo_srv__["a" /* HMOService */]) === "function" && _a || Object])
], HMOComponent);

var _a;
//# sourceMappingURL=hmo.component.js.map

/***/ }),

/***/ "./src/app/components/local-govt-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__ = __webpack_require__("./src/app/services/local_govts.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalGovtEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalGovtEditComponent = (function () {
    function LocalGovtEditComponent(localGovtSrv, stateSrv, route) {
        this.localGovtSrv = localGovtSrv;
        this.stateSrv = stateSrv;
        this.route = route;
        this.localGovt = {};
    }
    LocalGovtEditComponent.prototype.fetchStates = function () {
        var _this = this;
        this.stateSrv.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    LocalGovtEditComponent.prototype.getLocalGovtInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.localGovtSrv.findLocalGovtByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.localGovt = data;
            _this.localGovt.myState = data.state.id;
        });
    };
    ;
    LocalGovtEditComponent.prototype.ngOnInit = function () {
        this.getLocalGovtInfo();
        this.fetchStates();
        // this.fetchLGA();
    };
    LocalGovtEditComponent.prototype.onSubmit = function () {
        this.localGovtSrv.updateLocalGovtInfo(this.localGovt);
    };
    return LocalGovtEditComponent;
}());
LocalGovtEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/lga-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__["a" /* LocalGovtService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__["a" /* LocalGovtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__["a" /* LocalGovtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], LocalGovtEditComponent);

var _a, _b, _c;
//# sourceMappingURL=local-govt-edit.component.js.map

/***/ }),

/***/ "./src/app/components/local_govts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__ = __webpack_require__("./src/app/services/local_govts.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalGovtComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalGovtComponent = (function () {
    function LocalGovtComponent(_localGovtService) {
        this._localGovtService = _localGovtService;
        this.search = "";
    }
    LocalGovtComponent.prototype.getLocalGovts = function () {
        var _this = this;
        this._localGovtService
            .getLocalGovts()
            .then(function (local_govts) { return _this.local_govts = local_govts; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    LocalGovtComponent.prototype.searchLG = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._localGovtService.searchLocalGovts(this.search).then(function (result) { return _this.local_govts = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getLocalGovts();
        }
    };
    ;
    LocalGovtComponent.prototype.deleteLocalGovt = function (x) {
        var _this = this;
        this._localGovtService.deleteLocalGovt(x.id).then(function (response) {
            var index = _this.local_govts.indexOf(x);
            if (index !== -1) {
                _this.local_govts.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    LocalGovtComponent.prototype.ngOnInit = function () {
        this.getLocalGovts();
    };
    return LocalGovtComponent;
}());
LocalGovtComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'disabilities',
        template: __webpack_require__("./src/app/views/local_govts.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__["a" /* LocalGovtService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__["a" /* LocalGovtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_local_govts_srv__["a" /* LocalGovtService */]) === "function" && _a || Object])
], LocalGovtComponent);

var _a;
//# sourceMappingURL=local_govts.component.js.map

/***/ }),

/***/ "./src/app/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    // email : string;
    // password: string;
    function LoginComponent(userService) {
        this.userService = userService;
        this.user = {};
    }
    LoginComponent.prototype.login = function () {
        if (this.user.mobile, this.user.password) {
            this.userService.login(this.user.mobile, this.user.password);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'login',
        template: __webpack_require__("./src/app/views/login.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/new-partner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__ = __webpack_require__("./src/app/services/partner.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPartnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPartnerComponent = (function () {
    function NewPartnerComponent(partnerSrv, _stateService, route) {
        this.partnerSrv = partnerSrv;
        this._stateService = _stateService;
        this.route = route;
        this.partner = {};
    }
    NewPartnerComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    NewPartnerComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    NewPartnerComponent.prototype.onSubmit = function () {
        this.partnerSrv.savePartner(this.partner);
    };
    return NewPartnerComponent;
}());
NewPartnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/new-partner.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], NewPartnerComponent);

var _a, _b, _c;
//# sourceMappingURL=new-partner.component.js.map

/***/ }),

/***/ "./src/app/components/new-tc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__ = __webpack_require__("./src/app/services/test-center.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTCComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewTCComponent = (function () {
    function NewTCComponent(tcSrv, _stateService, route) {
        this.tcSrv = tcSrv;
        this._stateService = _stateService;
        this.route = route;
        this.tc = {};
    }
    NewTCComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    NewTCComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    NewTCComponent.prototype.onSubmit = function () {
        this.tcSrv.saveTC(this.tc);
    };
    return NewTCComponent;
}());
NewTCComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/new-test-center.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], NewTCComponent);

var _a, _b, _c;
//# sourceMappingURL=new-tc.component.js.map

/***/ }),

/***/ "./src/app/components/new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUserComponent = (function () {
    function NewUserComponent(userSrv, _stateService, route) {
        this.userSrv = userSrv;
        this._stateService = _stateService;
        this.route = route;
        this.user = {};
    }
    // getStates(){
    //     this._stateService.getStates().then(states => this.states = states)
    //           .catch(error => this.error = error);
    // }
    NewUserComponent.prototype.ngOnInit = function () {
        // this.getStates();
    };
    NewUserComponent.prototype.onSubmit = function () {
        this.userSrv.saveUser(this.user);
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'user-form',
        template: __webpack_require__("./src/app/views/new-user.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], NewUserComponent);

var _a, _b, _c;
//# sourceMappingURL=new-user.component.js.map

/***/ }),

/***/ "./src/app/components/partner-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__ = __webpack_require__("./src/app/services/partner.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartnerDetailComponent = (function () {
    function PartnerDetailComponent(_partnerSrv, route) {
        this._partnerSrv = _partnerSrv;
        this.route = route;
        this.partner = {};
    }
    // getDrugs() {
    // 	    this._drugsService
    // 	        .getDrugs()
    // 	        .then(drugs => this.drugs = drugs)
    // 	        .catch(error => this.error = error);
    // 	  }
    PartnerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._partnerSrv.findPartnerByID(+params['id']);
        })
            .subscribe(function (res) { return _this.partner = res; });
    };
    return PartnerDetailComponent;
}());
PartnerDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'partner-detail',
        template: __webpack_require__("./src/app/views/partner-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], PartnerDetailComponent);

var _a, _b;
//# sourceMappingURL=partner-detail.component.js.map

/***/ }),

/***/ "./src/app/components/partner-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__ = __webpack_require__("./src/app/services/partner.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartnerEditComponent = (function () {
    function PartnerEditComponent(partnerSrv, _stateService, route) {
        this.partnerSrv = partnerSrv;
        this._stateService = _stateService;
        this.route = route;
        this.partner = {};
    }
    PartnerEditComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    PartnerEditComponent.prototype.getPartnerInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.partnerSrv.findPartnerByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.partner = data;
            _this.partner.myState = data.state.id;
        });
    };
    ;
    PartnerEditComponent.prototype.ngOnInit = function () {
        this.getPartnerInfo();
        this.getStates();
        // this.fetchLGA();
    };
    PartnerEditComponent.prototype.onSubmit = function () {
        this.partnerSrv.updatePartnerInfo(this.partner);
    };
    return PartnerEditComponent;
}());
PartnerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/partner-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PartnerEditComponent);

var _a, _b, _c;
//# sourceMappingURL=partner-edit.component.js.map

/***/ }),

/***/ "./src/app/components/partners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__ = __webpack_require__("./src/app/services/partner.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartnerComponent = (function () {
    function PartnerComponent(_partnerService) {
        this._partnerService = _partnerService;
        this.search = "";
    }
    PartnerComponent.prototype.getPartners = function () {
        var _this = this;
        this._partnerService
            .getPartners()
            .then(function (res) { return _this.partners = res; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    PartnerComponent.prototype.searchPartner = function () {
        var _this = this;
        console.log(this.search);
        if (this.search.length > 3) {
            this._partnerService.searchPartner(this.search).then(function (result) { return _this.partners = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getPartners();
        }
    };
    ;
    PartnerComponent.prototype.deletePartner = function (x) {
        var _this = this;
        this._partnerService.deletePartner(x.id).then(function (response) {
            var index = _this.partners.indexOf(x);
            if (index !== -1) {
                _this.partners.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    PartnerComponent.prototype.ngOnInit = function () {
        this.getPartners();
    };
    return PartnerComponent;
}());
PartnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disabilities',
        template: __webpack_require__("./src/app/views/partners.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_partner_srv__["a" /* PartnerService */]) === "function" && _a || Object])
], PartnerComponent);

var _a;
//# sourceMappingURL=partners.component.js.map

/***/ }),

/***/ "./src/app/components/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'register',
        template: __webpack_require__("./src/app/views/register.html"),
    })
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/components/responder-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__ = __webpack_require__("./src/app/services/responders.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__ = __webpack_require__("./src/app/services/doc-type.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResponderDetailComponent = (function () {
    function ResponderDetailComponent(_responderService, _docTypeService, route, globals, sanitizer) {
        this._responderService = _responderService;
        this._docTypeService = _docTypeService;
        this.route = route;
        this.globals = globals;
        this.sanitizer = sanitizer;
        this.responder = {};
        this.doc = {};
        this.upload = false;
        this.busyUploading = false;
        this.host_address = this.globals.HOST_URL;
        this.filesToUpload = [];
    }
    ResponderDetailComponent.prototype.uploadPhoto = function () {
        if (this.profile_pic) {
            this.busyUploading = true;
            var fd = new FormData();
            fd.append('photo', this.profile_pic);
            this._responderService.uploadResponderPhoto(this.responder, fd);
        }
        ;
    };
    ResponderDetailComponent.prototype.attachFile = function (evt) {
        var files = evt.target.files[0]; //event?.target?.files[0];
        this.profile_pic = files ? files : undefined;
    };
    ResponderDetailComponent.prototype.allowUpload = function () {
        this.upload = !this.upload;
    };
    ;
    ResponderDetailComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    ResponderDetailComponent.prototype.uploadResponderDocs = function () {
        var formData = new FormData();
        var files = this.filesToUpload;
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        this._responderService.uploadResponderDocs(this.responder, formData);
    };
    ResponderDetailComponent.prototype.getDocumentTypes = function () {
        var _this = this;
        this._docTypeService.getDocumentTypes()
            .then(function (response) { return _this.doc_types = response; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ResponderDetailComponent.prototype.deletePhoto = function (x) {
        this._responderService.deleteResponderPhoto(this.responder, x);
    };
    ;
    ResponderDetailComponent.prototype.deleteDoc = function (x) {
        this._responderService.deleteResponderDoc(this.responder, x);
    };
    ResponderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._responderService.findResponderByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.responder = data;
        });
        this.getDocumentTypes();
    };
    return ResponderDetailComponent;
}());
ResponderDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'responder-detail',
        template: __webpack_require__("./src/app/views/responder-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */], __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__["a" /* DocumentTypeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__["a" /* DocumentTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_doc_type_srv__["a" /* DocumentTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_api__["a" /* Globals */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object])
], ResponderDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=responder-detail.component.js.map

/***/ }),

/***/ "./src/app/components/responder-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__ = __webpack_require__("./src/app/services/responders.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__ = __webpack_require__("./src/app/services/local_govts.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__ = __webpack_require__("./src/app/services/kit.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__ = __webpack_require__("./src/app/services/concentration.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResponderEditComponent = (function () {
    function ResponderEditComponent(_stateService, _localGovtService, _responderService, _concentrationService, _kitSrv, route) {
        this._stateService = _stateService;
        this._localGovtService = _localGovtService;
        this._responderService = _responderService;
        this._concentrationService = _concentrationService;
        this._kitSrv = _kitSrv;
        this.route = route;
        this.responder = {};
    }
    ResponderEditComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    ResponderEditComponent.prototype.fetchLGA = function (state) {
        var _this = this;
        this._localGovtService.findLocalGovtByStateID(state).then(function (local_govts) { return _this.local_govts = local_govts; })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderEditComponent.prototype.fetchConcentrations = function () {
        var _this = this;
        this._concentrationService.getConcentrations().then(function (concentrations) { return _this.concentrations = concentrations; })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderEditComponent.prototype.fetchKits = function () {
        var _this = this;
        this._kitSrv.getKits().then(function (kits) { return _this.kits = kits; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ResponderEditComponent.prototype.getResponderInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._responderService.findResponderByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.responder = data;
            _this.responder.mobile = data.member ? data.member.mobile : '';
            _this.responder.state = data.state.id;
            if (_this.responder.state) {
                _this.fetchLGA(_this.responder.state);
            }
            _this.responder.lga = data.local_govt.id;
            var aocs = [];
            data.areas_of_concentration.forEach(function (item) {
                aocs.push(item.id);
            });
            _this.responder.aocs = aocs;
            var res_kits = [];
            data.kits.forEach(function (item) {
                res_kits.push(item.id);
            });
            _this.responder.res_kits = res_kits;
        });
    };
    ;
    ResponderEditComponent.prototype.ngOnInit = function () {
        this.getResponderInfo();
        this.getStates();
        this.fetchConcentrations();
        this.fetchKits();
        // this.fetchLGA();
    };
    ResponderEditComponent.prototype.onSubmit = function () {
        this._responderService.updateResponderInfo(this.responder);
    };
    return ResponderEditComponent;
}());
ResponderEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/responder-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__["a" /* LocalGovtService */], __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__["a" /* ConcentrationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__["a" /* KitService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__["a" /* LocalGovtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__["a" /* LocalGovtService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__["a" /* ConcentrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__["a" /* ConcentrationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__["a" /* KitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__["a" /* KitService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], ResponderEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=responder-edit.component.js.map

/***/ }),

/***/ "./src/app/components/responder-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__ = __webpack_require__("./src/app/services/responders.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__ = __webpack_require__("./src/app/services/local_govts.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__ = __webpack_require__("./src/app/services/kit.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__ = __webpack_require__("./src/app/services/concentration.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gender_srv__ = __webpack_require__("./src/app/services/gender.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResponderFormComponent = (function () {
    function ResponderFormComponent(_stateService, _localGovtService, _responderService, _concentrationService, _kitSrv, _genderSrv) {
        this._stateService = _stateService;
        this._localGovtService = _localGovtService;
        this._responderService = _responderService;
        this._concentrationService = _concentrationService;
        this._kitSrv = _kitSrv;
        this._genderSrv = _genderSrv;
        this.responder = {};
    }
    ResponderFormComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderFormComponent.prototype.getGenders = function () {
        var _this = this;
        this._genderSrv.getGenders().then(function (genders) { return _this.genders = genders; })
            .catch(function (error) { return _this.error = error; });
    };
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    ResponderFormComponent.prototype.fetchLGA = function (state) {
        var _this = this;
        this.local_govts = [];
        this._localGovtService.findLocalGovtByStateID(state)
            .then(function (local_govts) {
            return _this.local_govts = local_govts;
        })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderFormComponent.prototype.fetchConcentrations = function () {
        var _this = this;
        this._concentrationService.getConcentrations().then(function (concentrations) { return _this.concentrations = concentrations; })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderFormComponent.prototype.fetchKits = function () {
        var _this = this;
        this._kitSrv.getKits().then(function (kits) { return _this.kits = kits; })
            .catch(function (error) { return _this.error = error; });
    };
    ResponderFormComponent.prototype.ngOnInit = function () {
        this.getStates();
        this.fetchConcentrations();
        this.fetchKits();
        this.getGenders();
    };
    ResponderFormComponent.prototype.onSubmit = function () {
        this._responderService.saveResponder(this.responder);
    };
    return ResponderFormComponent;
}());
ResponderFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/responder-form.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__["a" /* LocalGovtService */], __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__["a" /* ConcentrationService */], __WEBPACK_IMPORTED_MODULE_6__services_gender_srv__["a" /* GenderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__["a" /* KitService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__["a" /* LocalGovtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_local_govts_srv__["a" /* LocalGovtService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__["a" /* ConcentrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_concentration_srv__["a" /* ConcentrationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__["a" /* KitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_kit_srv__["a" /* KitService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_gender_srv__["a" /* GenderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_gender_srv__["a" /* GenderService */]) === "function" && _f || Object])
], ResponderFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=responder-form.component.js.map

/***/ }),

/***/ "./src/app/components/responders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__ = __webpack_require__("./src/app/services/responders.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponderComponent = (function () {
    function ResponderComponent(_responderService) {
        this._responderService = _responderService;
        this.search = "";
    }
    ResponderComponent.prototype.getResponders = function () {
        var _this = this;
        this._responderService
            .getResponders()
            .then(function (responders) { return _this.responders = responders; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    ResponderComponent.prototype.searchResponder = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._responderService.searchResponder(this.search).then(function (result) { return _this.responders = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getResponders();
        }
    };
    ;
    ResponderComponent.prototype.deleteResponder = function (x) {
        var _this = this;
        this._responderService.deleteResponder(x.id).then(function (response) {
            var index = _this.responders.indexOf(x);
            if (index !== -1) {
                _this.responders.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    ResponderComponent.prototype.ngOnInit = function () {
        this.getResponders();
    };
    return ResponderComponent;
}());
ResponderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'responders',
        template: __webpack_require__("./src/app/views/responders.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_responders_srv__["a" /* ResponderService */]) === "function" && _a || Object])
], ResponderComponent);

var _a;
//# sourceMappingURL=responders.component.js.map

/***/ }),

/***/ "./src/app/components/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-component',
        template: __webpack_require__("./src/app/views/sidebar.html"),
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/components/state-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateEditComponent = (function () {
    function StateEditComponent(stateSrv, route) {
        this.stateSrv = stateSrv;
        this.route = route;
        this.state = {};
    }
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    StateEditComponent.prototype.getAllergyInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.stateSrv.findStateByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.state = data;
        });
    };
    ;
    StateEditComponent.prototype.ngOnInit = function () {
        this.getAllergyInfo();
        // this.fetchLGA();
    };
    StateEditComponent.prototype.onSubmit = function () {
        this.stateSrv.updateStateInfo(this.state);
    };
    return StateEditComponent;
}());
StateEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/state-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_states_srv__["a" /* StateService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_states_srv__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], StateEditComponent);

var _a, _b;
//# sourceMappingURL=state-edit.component.js.map

/***/ }),

/***/ "./src/app/components/states.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateComponent = (function () {
    function StateComponent(_stateService) {
        this._stateService = _stateService;
        this.search = "";
    }
    StateComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService
            .getStates()
            .then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    StateComponent.prototype.searchStates = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._stateService.searchState(this.search).then(function (result) { return _this.states = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getStates();
        }
    };
    StateComponent.prototype.deleteState = function (x) {
        var _this = this;
        this._stateService.deleteState(x.id).then(function (response) {
            var index = _this.states.indexOf(x);
            if (index !== -1) {
                _this.states.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    StateComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    return StateComponent;
}());
StateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //selector: 'disabilities',
        template: __webpack_require__("./src/app/views/states.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_states_srv__["a" /* StateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_states_srv__["a" /* StateService */]) === "function" && _a || Object])
], StateComponent);

var _a;
//# sourceMappingURL=states.component.js.map

/***/ }),

/***/ "./src/app/components/tc-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__ = __webpack_require__("./src/app/services/test-center.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TCDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TCDetailComponent = (function () {
    function TCDetailComponent(_tcSrv, route) {
        this._tcSrv = _tcSrv;
        this.route = route;
        this.tc = {};
    }
    // getDrugs() {
    // 	    this._drugsService
    // 	        .getDrugs()
    // 	        .then(drugs => this.drugs = drugs)
    // 	        .catch(error => this.error = error);
    // 	  }
    TCDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this._tcSrv.findTCByID(+params['id']);
        })
            .subscribe(function (res) { return _this.tc = res; });
    };
    return TCDetailComponent;
}());
TCDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drug-detail',
        template: __webpack_require__("./src/app/views/tc-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], TCDetailComponent);

var _a, _b;
//# sourceMappingURL=tc-detail.component.js.map

/***/ }),

/***/ "./src/app/components/tc-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__ = __webpack_require__("./src/app/services/test-center.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_srv__ = __webpack_require__("./src/app/services/states.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TCEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TCEditComponent = (function () {
    function TCEditComponent(tcSrv, _stateService, route) {
        this.tcSrv = tcSrv;
        this._stateService = _stateService;
        this.route = route;
        this.tc = {};
    }
    TCEditComponent.prototype.getStates = function () {
        var _this = this;
        this._stateService.getStates().then(function (states) { return _this.states = states; })
            .catch(function (error) { return _this.error = error; });
    };
    TCEditComponent.prototype.getTCInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.tcSrv.findTCByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.tc = data;
            _this.tc.myState = data.state.id;
        });
    };
    ;
    TCEditComponent.prototype.ngOnInit = function () {
        this.getTCInfo();
        this.getStates();
        // this.fetchLGA();
    };
    TCEditComponent.prototype.onSubmit = function () {
        this.tcSrv.updateTCInfo(this.tc);
    };
    return TCEditComponent;
}());
TCEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/test-center-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */], __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_states_srv__["a" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], TCEditComponent);

var _a, _b, _c;
//# sourceMappingURL=tc-edit.component.js.map

/***/ }),

/***/ "./src/app/components/test-centers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__ = __webpack_require__("./src/app/services/test-center.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestCenterComponent = (function () {
    function TestCenterComponent(_tcService) {
        this._tcService = _tcService;
        this.search = "";
    }
    TestCenterComponent.prototype.getTCs = function () {
        var _this = this;
        this._tcService
            .getTCs()
            .then(function (res) { return _this.test_centers = res; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    TestCenterComponent.prototype.searchTC = function () {
        var _this = this;
        if (this.search.length > 3) {
            this._tcService.searchTC(this.search).then(function (result) { return _this.test_centers = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getTCs();
        }
    };
    ;
    TestCenterComponent.prototype.deleteTC = function (x) {
        var _this = this;
        this._tcService.deleteTC(x.id).then(function (response) {
            var index = _this.test_centers.indexOf(x);
            if (index !== -1) {
                _this.test_centers.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    TestCenterComponent.prototype.ngOnInit = function () {
        this.getTCs();
    };
    return TestCenterComponent;
}());
TestCenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'test-centers',
        template: __webpack_require__("./src/app/views/test-centers.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_center_srv__["a" /* TestCenterService */]) === "function" && _a || Object])
], TestCenterComponent);

var _a;
//# sourceMappingURL=test-centers.component.js.map

/***/ }),

/***/ "./src/app/components/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.user = {};
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.userService.findUserByID(+params['id']);
        })
            .subscribe(function (resp) { return _this.user = resp; });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-detail',
        template: __webpack_require__("./src/app/views/user-detail.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], UserDetailComponent);

var _a, _b;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "./src/app/components/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = (function () {
    function UserEditComponent(userSrv, route) {
        this.userSrv = userSrv;
        this.route = route;
        this.user = {};
    }
    // getLocalGovts(){
    //   this._localGovtService.getLocalGovts().then(local_govts => this.local_govts = local_govts)
    //           .catch(error => this.error = error);
    // }
    UserEditComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.userSrv.findUserByID(+params['id']);
        })
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    ;
    UserEditComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
        // this.fetchLGA();
    };
    UserEditComponent.prototype.onSubmit = function () {
        this.userSrv.updateUserInfo(this.user);
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'hero-form',
        template: __webpack_require__("./src/app/views/user-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], UserEditComponent);

var _a, _b;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "./src/app/components/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(userSrv) {
        this.userSrv = userSrv;
        this.search = "";
    }
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userSrv.fetchUsers()
            .then(function (res) { return _this.users = res; })
            .catch(function (error) { return _this.error = error; });
    };
    ;
    UserComponent.prototype.searchUser = function () {
        var _this = this;
        if (this.search.length == 11) {
            this.userSrv.searchUser(this.search).then(function (result) { return _this.users = result; })
                .catch(function (error) { return _this.error = error; });
        }
        else {
            this.getUsers();
        }
    };
    ;
    UserComponent.prototype.deleteUser = function (x) {
        var _this = this;
        this.userSrv.deleteUser(x.id).then(function (response) {
            var index = _this.users.indexOf(x);
            if (index !== -1) {
                _this.users.splice(index, 1);
            }
        })
            .catch(function (err) { return _this.error = err; });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'users',
        template: __webpack_require__("./src/app/views/users.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_srv__["a" /* UserService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "./src/app/directives/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ "./src/app/directives/only-number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumber; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumber = (function () {
    function OnlyNumber(el) {
        this.el = el;
    }
    OnlyNumber.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    return OnlyNumber;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], OnlyNumber.prototype, "OnlyNumber", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OnlyNumber.prototype, "onKeyDown", null);
OnlyNumber = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[OnlyNumber]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], OnlyNumber);

var _a;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=only-number.directive.js.map

/***/ }),

/***/ "./src/app/services/allergies.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllergyService = (function () {
    function AllergyService(http, globals, router, toasterService) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.toasterService = toasterService;
        this.allergiesURL = this.globals.ALLERGIES_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    AllergyService.prototype.getAllergies = function () {
        var v = this.page_header();
        return this.http.get(this.allergiesURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AllergyService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    AllergyService.prototype.findAllergyByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.allergiesURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    AllergyService.prototype.updateAllergyInfo = function (allergy) {
        var _this = this;
        if (allergy === void 0) { allergy = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(allergy);
        if (allergy) {
            this.http.patch(this.allergiesURL + allergy.id + '/', allergy, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Allergy Info updated', '');
                _this.router.navigateByUrl('allergies');
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    AllergyService.prototype.searchAllergy = function (allergy) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('allergy', allergy);
        this.options.search = params;
        return this.http.get(this.allergiesURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    AllergyService.prototype.saveAllergy = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        var v = this.page_header();
        this.http.post(this.allergiesURL, data, v).subscribe(function (data) {
            _this.toasterService.pop('success', 'Allergy saved', '');
            _this.router.navigateByUrl('allergies');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    AllergyService.prototype.deleteAllergy = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.allergiesURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Allergy deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    AllergyService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return AllergyService;
}());
AllergyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], AllergyService);

var _a, _b, _c, _d;
//# sourceMappingURL=allergies.srv.js.map

/***/ }),

/***/ "./src/app/services/blood-group.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodGroupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BloodGroupService = (function () {
    function BloodGroupService(http, globals, router, toasterService) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.toasterService = toasterService;
        this.bloodGrpURL = this.globals.BLOOD_GRPS_URL; //'http://139.162.213.237:8002/api/core/blood_groups/';
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    BloodGroupService.prototype.getBloodGroup = function () {
        var v = this.page_header();
        return this.http.get(this.bloodGrpURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    BloodGroupService.prototype.findBloodGrpByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.bloodGrpURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    BloodGroupService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    ;
    BloodGroupService.prototype.updateBloodGrpInfo = function (bloodGrp) {
        var _this = this;
        if (bloodGrp === void 0) { bloodGrp = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(bloodGrp);
        if (bloodGrp) {
            this.http.patch(this.bloodGrpURL + bloodGrp.id + '/', bloodGrp, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Responder Info updated', '');
                _this.router.navigateByUrl('blood_group/' + bloodGrp.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    BloodGroupService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ;
    return BloodGroupService;
}());
BloodGroupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], BloodGroupService);

var _a, _b, _c, _d;
//# sourceMappingURL=blood-group.srv.js.map

/***/ }),

/***/ "./src/app/services/clients.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientService = (function () {
    function ClientService(http, router, _toasterService, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.clientsURL = this.globals.CLIENTS_URL; // 'http://139.162.213.237:8002/api/core/responders/';
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
        this.toasterService = _toasterService;
    }
    ClientService.prototype.getClients = function () {
        var v = this.page_header();
        return this.http.get(this.clientsURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    // saveClient(data: any){
    //    let v = this.page_header();
    //   let _data = JSON.stringify(data);
    //    this.http.post(this.responderURL, data, v).subscribe(
    //        data => {
    //          this.toasterService.pop('success', 'Responder saved', '');
    //            this.router.navigateByUrl('/responders');
    //        },
    //        error => console.log(error.json().message)
    //     )
    // };
    ClientService.prototype.updateClientInfo = function (client) {
        var _this = this;
        if (client === void 0) { client = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(client);
        if (client) {
            this.http.patch(this.clientsURL + client.id + '/', client, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Client Info updated', '');
                _this.router.navigateByUrl('client/' + client.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    ClientService.prototype.findClientByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.clientsURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.searchClient = function (client) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('client', client);
        this.options.search = params;
        console.log();
        return this.http.get(this.clientsURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ClientService.prototype.deleteClient = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.clientsURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Client deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    ClientService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    ClientService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], ClientService);

var _a, _b, _c, _d;
//# sourceMappingURL=clients.srv.js.map

/***/ }),

/***/ "./src/app/services/concentration.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcentrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConcentrationService = (function () {
    function ConcentrationService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.concentrationURL = this.globals.CONCENTRATIONS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    ConcentrationService.prototype.getConcentrations = function () {
        var v = this.page_header();
        return this.http.get(this.concentrationURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ConcentrationService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    ConcentrationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ConcentrationService;
}());
ConcentrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */]) === "function" && _b || Object])
], ConcentrationService);

var _a, _b;
//# sourceMappingURL=concentration.srv.js.map

/***/ }),

/***/ "./src/app/services/dashboard.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    function DashboardService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.dashboardURL = this.globals.DASHBOARD_URL;
    }
    DashboardService.prototype.getDashboardData = function () {
        var v = this.page_header();
        return this.http.get(this.dashboardURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DashboardService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], DashboardService);

var _a, _b, _c;
//# sourceMappingURL=dashboard.srv.js.map

/***/ }),

/***/ "./src/app/services/disability.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DisabilityService = (function () {
    function DisabilityService(http, router, globals, toasterService) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.toasterService = toasterService;
        this.disabilityURL = this.globals.DISABILITY_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    DisabilityService.prototype.getDisability = function () {
        var v = this.page_header();
        return this.http.get(this.disabilityURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DisabilityService.prototype.findDisabilityByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.disabilityURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DisabilityService.prototype.updateDisabilityInfo = function (disability) {
        var _this = this;
        if (disability === void 0) { disability = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(disability);
        if (disability) {
            this.http.patch(this.disabilityURL + disability.id + '/', disability, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Disability Info updated', '');
                _this.router.navigateByUrl('disabilities');
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    DisabilityService.prototype.searchDisability = function (disability) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('disability', disability);
        this.options.search = params;
        return this.http.get(this.disabilityURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DisabilityService.prototype.saveDisability = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        var v = this.page_header();
        this.http.post(this.disabilityURL, data, v).subscribe(function (data) {
            _this.toasterService.pop('success', 'Disability saved', '');
            _this.router.navigateByUrl('disabilities');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    DisabilityService.prototype.deleteDisability = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.disabilityURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Disability deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    DisabilityService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DisabilityService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return DisabilityService;
}());
DisabilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], DisabilityService);

var _a, _b, _c, _d;
//# sourceMappingURL=disability.srv.js.map

/***/ }),

/***/ "./src/app/services/disease.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiseaseService = (function () {
    function DiseaseService(http, router, globals, toasterService) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.toasterService = toasterService;
        this.diseasesURL = this.globals.DISEASE_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    DiseaseService.prototype.getDiseases = function () {
        var v = this.page_header();
        return this.http.get(this.diseasesURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DiseaseService.prototype.findDiseaseByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.diseasesURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DiseaseService.prototype.saveDisease = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        var v = this.page_header();
        this.http.post(this.diseasesURL, data, v).subscribe(function (data) {
            _this.toasterService.pop('success', 'Disease saved', '');
            _this.router.navigateByUrl('diseases');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    DiseaseService.prototype.searchDisease = function (disease) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('disease', disease);
        this.options.search = params;
        return this.http.get(this.diseasesURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DiseaseService.prototype.updateDiseaseInfo = function (disease) {
        var _this = this;
        if (disease === void 0) { disease = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(disease);
        if (disease) {
            this.http.patch(this.diseasesURL + disease.id + '/', disease, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Disease Info updated', '');
                _this.router.navigateByUrl('diseases');
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    DiseaseService.prototype.deleteDisease = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.diseasesURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Disease deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    DiseaseService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DiseaseService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return DiseaseService;
}());
DiseaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], DiseaseService);

var _a, _b, _c, _d;
//# sourceMappingURL=disease.srv.js.map

/***/ }),

/***/ "./src/app/services/dispense-type.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugDispenseTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugDispenseTypeService = (function () {
    function DrugDispenseTypeService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.apiURL = this.globals.DISPENSE_TYPE_URL;
    }
    DrugDispenseTypeService.prototype.getDispenseType = function () {
        var v = this.page_header();
        return this.http.get(this.apiURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrugDispenseTypeService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugDispenseTypeService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return DrugDispenseTypeService;
}());
DrugDispenseTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], DrugDispenseTypeService);

var _a, _b, _c;
//# sourceMappingURL=dispense-type.srv.js.map

/***/ }),

/***/ "./src/app/services/doc-type.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentTypeService = (function () {
    function DocumentTypeService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.doctypesURL = this.globals.DOC_TYPES_URL;
    }
    DocumentTypeService.prototype.getDocumentTypes = function () {
        var v = this.page_header();
        return this.http.get(this.doctypesURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DocumentTypeService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DocumentTypeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DocumentTypeService;
}());
DocumentTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */]) === "function" && _b || Object])
], DocumentTypeService);

var _a, _b;
//# sourceMappingURL=doc-type.srv.js.map

/***/ }),

/***/ "./src/app/services/drug-brand.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugBrandService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugBrandService = (function () {
    function DrugBrandService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.apiURL = this.globals.DRUG_BRANDS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    DrugBrandService.prototype.getDrugBrands = function () {
        var v = this.page_header();
        return this.http.get(this.apiURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrugBrandService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugBrandService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return DrugBrandService;
}());
DrugBrandService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], DrugBrandService);

var _a, _b, _c;
//# sourceMappingURL=drug-brand.srv.js.map

/***/ }),

/***/ "./src/app/services/drug-classification.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugClassificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugClassificationService = (function () {
    function DrugClassificationService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.drugClassificationsURL = this.globals.DRUG_CLASSIFICATIONS_URL;
    }
    DrugClassificationService.prototype.getDrugClassifications = function () {
        var v = this.page_header();
        return this.http.get(this.drugClassificationsURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrugClassificationService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugClassificationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DrugClassificationService;
}());
DrugClassificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], DrugClassificationService);

var _a, _b, _c;
//# sourceMappingURL=drug-classification.srv.js.map

/***/ }),

/***/ "./src/app/services/drug-contraindication.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugContraIndicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugContraIndicationService = (function () {
    function DrugContraIndicationService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.contraIndicationsURL = this.globals.DRUGS_CONTRAINDICATIONS_URL;
    }
    DrugContraIndicationService.prototype.getDrugContraIndications = function () {
        var v = this.page_header();
        return this.http.get(this.contraIndicationsURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrugContraIndicationService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugContraIndicationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DrugContraIndicationService;
}());
DrugContraIndicationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], DrugContraIndicationService);

var _a, _b, _c;
//# sourceMappingURL=drug-contraindication.srv.js.map

/***/ }),

/***/ "./src/app/services/drug-form.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrugFormService = (function () {
    function DrugFormService(http, router, globals, toasterService) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.toasterService = toasterService;
        this.dfURL = this.globals.DRUG_FORM_URL;
    }
    DrugFormService.prototype.getDrugForms = function () {
        var v = this.page_header();
        return this.http.get(this.dfURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrugFormService.prototype.findDrugByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.dfURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DrugFormService.prototype.updateDrugInfo = function (drug) {
        var _this = this;
        if (drug === void 0) { drug = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(drug);
        if (drug) {
            this.http.patch(this.dfURL + drug.id + '/', drug, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Drug Info updated', '');
                _this.router.navigateByUrl('responder/' + drug.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    DrugFormService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugFormService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DrugFormService;
}());
DrugFormService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], DrugFormService);

var _a, _b, _c, _d;
//# sourceMappingURL=drug-form.srv.js.map

/***/ }),

/***/ "./src/app/services/drug-indication.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugIndicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrugIndicationService = (function () {
    function DrugIndicationService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.drugIndicationsURL = this.globals.DRUG_INDICATIONS_URL;
    }
    DrugIndicationService.prototype.getDrugIndications = function () {
        var v = this.page_header();
        return this.http.get(this.drugIndicationsURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrugIndicationService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugIndicationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DrugIndicationService;
}());
DrugIndicationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], DrugIndicationService);

var _a, _b, _c;
//# sourceMappingURL=drug-indication.srv.js.map

/***/ }),

/***/ "./src/app/services/drugs.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrugService = (function () {
    function DrugService(http, router, _toasterService, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.drugURL = this.globals.DRUGS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
        this.toasterService = _toasterService;
    }
    DrugService.prototype.getDrugs = function () {
        var v = this.page_header();
        return this.http.get(this.drugURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DrugService.prototype.saveDrug = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        this.http.post(this.drugURL, data).subscribe(function (data) {
            _this.toasterService.pop('success', 'Drug saved', '');
            _this.router.navigateByUrl('/drugs');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    DrugService.prototype.findDrugByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.drugURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DrugService.prototype.searchDrug = function (drug) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('drug', drug);
        this.options.search = params;
        return this.http.get(this.drugURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DrugService.prototype.updateDrugInfo = function (drug) {
        var _this = this;
        if (drug === void 0) { drug = {}; }
        var v = this.page_header();
        //let _data = JSON.stringify(hmo);
        if (drug) {
            this.http.patch(this.drugURL + drug.id + '/', drug, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Drug Info updated', '');
                // this.router.navigateByUrl('Drug');
                _this.router.navigateByUrl('/drug/' + drug.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    DrugService.prototype.deleteDrug = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.drugURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Drug deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    DrugService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    DrugService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return DrugService;
}());
DrugService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], DrugService);

var _a, _b, _c, _d;
//# sourceMappingURL=drugs.srv.js.map

/***/ }),

/***/ "./src/app/services/gender.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GenderService = (function () {
    function GenderService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.apiURL = this.globals.GENDER_URL;
    }
    GenderService.prototype.getGenders = function () {
        var v = this.page_header();
        return this.http.get(this.apiURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GenderService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    GenderService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return GenderService;
}());
GenderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], GenderService);

var _a, _b, _c;
//# sourceMappingURL=gender.srv.js.map

/***/ }),

/***/ "./src/app/services/genotypes.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenotypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenotypeService = (function () {
    function GenotypeService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.apiURL = this.globals.GENOTYPES_URL;
    }
    GenotypeService.prototype.getGenotypes = function () {
        var v = this.page_header();
        return this.http.get(this.apiURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GenotypeService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    GenotypeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return GenotypeService;
}());
GenotypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_api__["a" /* Globals */]) === "function" && _b || Object])
], GenotypeService);

var _a, _b;
//# sourceMappingURL=genotypes.srv.js.map

/***/ }),

/***/ "./src/app/services/hmo.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HMOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HMOService = (function () {
    function HMOService(http, globals, router, toasterService) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.toasterService = toasterService;
        this.hmoURL = this.globals.HMOS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    HMOService.prototype.getHMOs = function () {
        var v = this.page_header();
        return this.http.get(this.hmoURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    HMOService.prototype.findHMOByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.hmoURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    HMOService.prototype.updateHMOInfo = function (hmo) {
        var _this = this;
        if (hmo === void 0) { hmo = {}; }
        var v = this.page_header();
        //let _data = JSON.stringify(hmo);
        if (hmo) {
            this.http.patch(this.hmoURL + hmo.id + '/', hmo, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'HMO Info updated', '');
                _this.router.navigateByUrl('hmos');
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    HMOService.prototype.searchHMO = function (hmo) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('hmo', hmo);
        this.options.search = params;
        return this.http.get(this.hmoURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    HMOService.prototype.saveHMO = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        var v = this.page_header();
        this.http.post(this.hmoURL, data, v).subscribe(function (data) {
            _this.toasterService.pop('success', 'HMO saved', '');
            _this.router.navigateByUrl('hmos');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    HMOService.prototype.deleteHMO = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.hmoURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'HMO deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    HMOService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    HMOService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return HMOService;
}());
HMOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], HMOService);

var _a, _b, _c, _d;
//# sourceMappingURL=hmo.srv.js.map

/***/ }),

/***/ "./src/app/services/kit.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KitService = (function () {
    function KitService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.kitURL = this.globals.KITS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    KitService.prototype.getKits = function () {
        var v = this.page_header();
        return this.http.get(this.kitURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    KitService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    KitService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return KitService;
}());
KitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api__["a" /* Globals */]) === "function" && _b || Object])
], KitService);

var _a, _b;
//# sourceMappingURL=kit.srv.js.map

/***/ }),

/***/ "./src/app/services/local_govts.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalGovtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocalGovtService = (function () {
    function LocalGovtService(http, router, globals, toasterService) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.toasterService = toasterService;
        this.localGovtURL = this.globals.LOCAL_GOVTS_URL;
        this.localGovtFilterURL = this.globals.LOCAL_GOVTS_FILTER_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    LocalGovtService.prototype.getLocalGovts = function () {
        var v = this.page_header();
        return this.http.get(this.localGovtURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    LocalGovtService.prototype.findLocalGovtByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.localGovtURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    LocalGovtService.prototype.findLocalGovtByStateID = function (pk) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('state', pk);
        this.options.search = params;
        return this.http.get(this.localGovtFilterURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    LocalGovtService.prototype.searchLocalGovts = function (lg) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('lg', lg);
        this.options.search = params;
        console.log();
        return this.http.get(this.localGovtURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    LocalGovtService.prototype.updateLocalGovtInfo = function (localGovt) {
        var _this = this;
        if (localGovt === void 0) { localGovt = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(localGovt);
        if (localGovt) {
            this.http.patch(this.localGovtURL + localGovt.id + '/', localGovt, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Local Government Info updated', '');
                _this.router.navigateByUrl('local_govts');
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    LocalGovtService.prototype.deleteLocalGovt = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.localGovtURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Local Government deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    LocalGovtService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    LocalGovtService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return LocalGovtService;
}());
LocalGovtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], LocalGovtService);

var _a, _b, _c, _d;
//# sourceMappingURL=local_govts.srv.js.map

/***/ }),

/***/ "./src/app/services/partner.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PartnerService = (function () {
    function PartnerService(http, router, _toasterService, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.partnerURL = this.globals.PARTNERS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
        this.toasterService = _toasterService;
    }
    PartnerService.prototype.getPartners = function () {
        var v = this.page_header();
        return this.http.get(this.partnerURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    PartnerService.prototype.savePartner = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        this.http.post(this.partnerURL, data).subscribe(function (data) {
            _this.toasterService.pop('success', 'Partner saved', '');
            _this.router.navigateByUrl('/partners');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    PartnerService.prototype.updatePartnerInfo = function (partner) {
        var _this = this;
        if (partner === void 0) { partner = {}; }
        var v = this.page_header();
        //let _data = JSON.stringify(hmo);
        if (partner) {
            this.http.patch(this.partnerURL + partner.id + '/', partner, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Partner Info updated', '');
                _this.router.navigateByUrl('/partner/' + partner.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    PartnerService.prototype.findPartnerByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.partnerURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    PartnerService.prototype.searchPartner = function (partner) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('partner', partner);
        this.options.search = params;
        return this.http.get(this.partnerURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    PartnerService.prototype.deletePartner = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.partnerURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Partner deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    PartnerService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    PartnerService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return PartnerService;
}());
PartnerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], PartnerService);

var _a, _b, _c, _d;
//# sourceMappingURL=partner.srv.js.map

/***/ }),

/***/ "./src/app/services/responders.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResponderService = (function () {
    function ResponderService(http, router, _toasterService, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.responderURL = this.globals.RESPONDERS_URL; // 'http://139.162.213.237:8002/api/core/responders/';
        this.responderPhotoURL = this.globals.RESPONDER_PHOTO_URL; //'http://139.162.213.237:8002/api/core/responder_profile_pic/';
        this.responderDocsURL = this.globals.RESPONDER_SUPPORT_DOCS_URL;
        this.rDocsListingURL = this.globals.RESPONDER_DOCS_LISTING_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
        this.toasterService = _toasterService;
    }
    ResponderService.prototype.getResponders = function () {
        var v = this.page_header();
        return this.http.get(this.responderURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ResponderService.prototype.saveResponder = function (data) {
        var _this = this;
        var v = this.page_header();
        var _data = JSON.stringify(data);
        this.http.post(this.responderURL, data, v).subscribe(function (data) {
            _this.toasterService.pop('success', 'Responder saved', '');
            _this.router.navigateByUrl('/responders');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    ResponderService.prototype.updateResponderInfo = function (responder) {
        var _this = this;
        if (responder === void 0) { responder = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(responder);
        if (responder) {
            this.http.patch(this.responderURL + responder.id + '/', responder, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Responder Info updated', '');
                _this.router.navigateByUrl('responder/' + responder.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    ResponderService.prototype.deleteResponder = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.responderURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Responder deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    ResponderService.prototype.findResponderByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.responderURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResponderService.prototype.uploadResponderPhoto = function (responder, data) {
        var _this = this;
        if (responder === void 0) { responder = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(data);
        if (responder) {
            this.http.patch(this.responderPhotoURL + responder.id + '/', data, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Responder photo saved', '');
                var res = data.json();
                if (responder) {
                    responder.image_url = res;
                }
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    ResponderService.prototype.deleteResponderPhoto = function (responder, data) {
        if (responder === void 0) { responder = {}; }
    };
    ResponderService.prototype.uploadResponderDocs = function (responder, data) {
        var _this = this;
        if (responder === void 0) { responder = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(data);
        if (responder) {
            this.http.patch(this.responderDocsURL + responder.id + '/', data, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Supporting docs saved', '');
                var res = data.json();
                if (responder) {
                    responder.responder_docs = res;
                }
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    ResponderService.prototype.deleteResponderDoc = function (responder, x) {
        var _this = this;
        var v = this.page_header();
        if (x) {
            this.http.delete(this.rDocsListingURL + x.id + '/', v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Document deleted successfully', '');
                var res = data.json();
                if (x) {
                    responder.responder_docs.pop(x);
                }
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ResponderService.prototype.searchResponder = function (q) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('responder', q);
        this.options.search = params;
        return this.http.get(this.responderURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ResponderService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    ResponderService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return ResponderService;
}());
ResponderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], ResponderService);

var _a, _b, _c, _d;
//# sourceMappingURL=responders.srv.js.map

/***/ }),

/***/ "./src/app/services/side-effect.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideEffectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SideEffectService = (function () {
    function SideEffectService(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.sideEffectsURL = this.globals.SIDEFFECTS_URL;
    }
    SideEffectService.prototype.getSideEffect = function () {
        var v = this.page_header();
        return this.http.get(this.sideEffectsURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SideEffectService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    SideEffectService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return SideEffectService;
}());
SideEffectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _c || Object])
], SideEffectService);

var _a, _b, _c;
//# sourceMappingURL=side-effect.srv.js.map

/***/ }),

/***/ "./src/app/services/states.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StateService = (function () {
    function StateService(http, router, globals, toasterService) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.toasterService = toasterService;
        this.statesURL = this.globals.STATES_URL; //'http://139.162.213.237:8002/api/core/states/';
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
    }
    StateService.prototype.getStates = function () {
        var v = this.page_header();
        return this.http.get(this.statesURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StateService.prototype.findStateByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.statesURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StateService.prototype.updateStateInfo = function (state) {
        var _this = this;
        if (state === void 0) { state = {}; }
        var v = this.page_header();
        var _data = JSON.stringify(state);
        if (state) {
            this.http.patch(this.statesURL + state.id + '/', state, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'State Info updated', '');
                _this.router.navigateByUrl('states');
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    StateService.prototype.searchState = function (state) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('state', state);
        this.options.search = params;
        console.log();
        return this.http.get(this.statesURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    StateService.prototype.deleteState = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.statesURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'State deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    StateService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    StateService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return StateService;
}());
StateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_api__["a" /* Globals */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object])
], StateService);

var _a, _b, _c, _d;
//# sourceMappingURL=states.srv.js.map

/***/ }),

/***/ "./src/app/services/test-center.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestCenterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestCenterService = (function () {
    function TestCenterService(http, router, _toasterService, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.testCenterURL = this.globals.TEST_CENTERS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
        this.toasterService = _toasterService;
    }
    TestCenterService.prototype.getTCs = function () {
        var v = this.page_header();
        return this.http.get(this.testCenterURL, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    TestCenterService.prototype.saveTC = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        this.http.post(this.testCenterURL, data).subscribe(function (data) {
            _this.toasterService.pop('success', 'Test Center saved', '');
            _this.router.navigateByUrl('/test-centers');
        }, function (error) { return console.log(error.json().message); });
    };
    ;
    TestCenterService.prototype.findTCByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.testCenterURL + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    TestCenterService.prototype.searchTC = function (tc) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('tc', tc);
        this.options.search = params;
        return this.http.get(this.testCenterURL, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    TestCenterService.prototype.deleteTC = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.testCenterURL + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this.toasterService.pop('success', 'Test Center deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    TestCenterService.prototype.updateTCInfo = function (tc) {
        var _this = this;
        if (tc === void 0) { tc = {}; }
        var v = this.page_header();
        //let _data = JSON.stringify(hmo);
        if (tc) {
            this.http.patch(this.testCenterURL + tc.id + '/', tc, v).subscribe(function (data) {
                _this.toasterService.pop('success', 'Test Center Info updated', '');
                _this.router.navigateByUrl('test-center/' + tc.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    TestCenterService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    TestCenterService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return TestCenterService;
}());
TestCenterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], TestCenterService);

var _a, _b, _c, _d;
//# sourceMappingURL=test-center.srv.js.map

/***/ }),

/***/ "./src/app/services/user.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api__ = __webpack_require__("./src/app/shared/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, router, _toasterService, globals) {
        this.http = http;
        this.router = router;
        this._toasterService = _toasterService;
        this.globals = globals;
        this.loggedIn = false;
        this.loginUrl = this.globals.LOGIN_URL;
        this.logoutUrl = this.globals.LOGOUT_URL;
        this.usersUrl = this.globals.USERS_URL;
        this.v = localStorage.getItem('auth_token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.v
            }) });
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (mobile, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.loginUrl, JSON.stringify({ mobile: mobile, password: password }), { headers: headers })
            .subscribe(function (res) {
            var data = res.json();
            if (data.token) {
                localStorage.setItem('auth_token', data.token);
                _this.loggedIn = true;
                _this.router.navigate(['']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            //console.log(error);
            if (error['status']) {
                _this.evil = JSON.parse(error['_body']).non_field_errors[0];
                _this._toasterService.pop('error', _this.evil, '');
            }
            else {
                _this._toasterService.pop('error', 'You are not connected to the server', '');
            }
        });
    };
    ;
    UserService.prototype.newUser = function () {
    };
    ;
    UserService.prototype.fetchUsers = function () {
        var v = this.page_header();
        return this.http.get(this.usersUrl, v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        // localStorage.removeItem('auth_token');
        // this.loggedIn = false;
        var _this = this;
        var v = this.page_header();
        this.http.post(this.logoutUrl, {}, v).subscribe(function (res) {
            localStorage.clear();
            _this.loggedIn = false;
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.evil = JSON.parse(err['_body']).non_field_errors[0];
            _this._toasterService.pop('error', _this.evil, '');
        });
    };
    UserService.prototype.isloggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.findUserByID = function (pk) {
        var v = this.page_header();
        return this.http.get(this.usersUrl + pk + '/', v)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    UserService.prototype.searchUser = function (user) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.append('user', user);
        this.options.search = params;
        return this.http.get(this.usersUrl, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    UserService.prototype.deleteUser = function (pk) {
        var _this = this;
        var v = this.page_header();
        return this.http.delete(this.usersUrl + pk + '/', v)
            .toPromise()
            .then(function (response) {
            //response.json()
            _this._toasterService.pop('success', 'User deleted!', '');
        })
            .catch(this.handleError);
    };
    ;
    UserService.prototype.saveUser = function (data) {
        var _this = this;
        var _data = JSON.stringify(data);
        this.http.post(this.usersUrl, data).subscribe(function (data) {
            _this._toasterService.pop('success', 'User saved', '');
            _this.router.navigateByUrl('/users');
        }, function (error) {
            _this._toasterService.pop('error', error.json().message, '');
        });
    };
    ;
    UserService.prototype.updateUserInfo = function (user) {
        var _this = this;
        if (user === void 0) { user = {}; }
        var v = this.page_header();
        //let _data = JSON.stringify(hmo);
        if (user) {
            this.http.patch(this.usersUrl + user.id + '/', user, v).subscribe(function (data) {
                _this._toasterService.pop('success', 'User Info updated', '');
                _this.router.navigateByUrl('user/' + user.id);
            }, function (error) { return console.log(error.json().message); });
        }
    };
    ;
    UserService.prototype.page_header = function () {
        var data = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var opt;
        headers.append('Authorization', 'JWT ' + data);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return opt;
    };
    UserService.prototype.handleError = function (error) {
        var err = error.json();
        if (error.detail = "Signature has expired.") {
            localStorage.removeItem('auth_token');
            this.router.navigateByUrl('/login');
        }
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_api__["a" /* Globals */]) === "function" && _d || Object])
], UserService);

var _a, _b, _c, _d;
//# sourceMappingURL=user.srv.js.map

/***/ }),

/***/ "./src/app/shared/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
// const PRODUCTION_URL='';
// const DEV_URL = 'http://127.0.0.1:8000/api';
// const CREATE_DRUG_ENDPOINT = DEV_URL + '/core/drugs/';

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])();
var Globals = (function () {
    function Globals() {
        this.HOST_URL = 'http://139.162.213.237:8002'; // 'http://0.0.0.0:8002'; // 
        this.LOGIN_URL = this.HOST_URL + '/api/core/api-token-auth/';
        this.LOGOUT_URL = this.HOST_URL + '/client/api/logout/';
        this.DASHBOARD_URL = this.HOST_URL + '/api/medic/dashboard_data/'; //'http://139.162.213.237:8002/api/medic/dashboard_data/';
        this.STATES_URL = this.HOST_URL + '/api/core/states/';
        this.RESPONDERS_URL = this.HOST_URL + '/api/core/responders/';
        this.CLIENTS_URL = this.HOST_URL + '/api/core/clients/';
        this.RESPONDER_PHOTO_URL = this.HOST_URL + '/api/core/responder_profile_pic/';
        this.RESPONDER_SUPPORT_DOCS_URL = this.HOST_URL + '/api/core/responder_docs/';
        this.RESPONDER_DOCS_LISTING_URL = this.HOST_URL + '/api/core/r_docs/';
        this.BLOOD_GRPS_URL = this.HOST_URL + '/api/core/blood_groups/';
        this.CONCENTRATIONS_URL = this.HOST_URL + '/api/core/concentrations/';
        this.ALLERGIES_URL = this.HOST_URL + '/api/core/allergies/';
        this.DISEASE_URL = this.HOST_URL + '/api/core/diseases/';
        this.GENOTYPES_URL = this.HOST_URL + '/api/core/genotypes/';
        this.DRUGS_URL = this.HOST_URL + '/api/core/drugs/';
        this.DRUG_FORM_URL = this.HOST_URL + '/api/core/drug_forms/';
        this.DRUGS_CONTRAINDICATIONS_URL = this.HOST_URL + '/api/core/drug_contraindications/';
        this.DRUG_INDICATIONS_URL = this.HOST_URL + '/api/core/drug_indications/';
        this.DRUG_CLASSIFICATIONS_URL = this.HOST_URL + '/api/core/drug_classifications/';
        this.KITS_URL = this.HOST_URL + '/api/core/kits/';
        this.LOCAL_GOVTS_URL = this.HOST_URL + '/api/core/local_govts/';
        this.LOCAL_GOVTS_FILTER_URL = this.HOST_URL + '/api/core/local_govt_state/';
        this.DISPENSE_TYPE_URL = this.HOST_URL + '/api/core/drug_dispense_types/';
        this.DRUG_BRANDS_URL = this.HOST_URL + '/api/core/drug_brands/';
        this.DISABILITY_URL = this.HOST_URL + '/api/core/disabilities/';
        this.DOC_TYPES_URL = this.HOST_URL + '/api/core/doc_types/';
        this.SIDEFFECTS_URL = this.HOST_URL + '/api/core/side_effects/';
        this.HMOS_URL = this.HOST_URL + '/api/core/hmos/';
        this.PARTNERS_URL = this.HOST_URL + '/api/core/partners/';
        this.TEST_CENTERS_URL = this.HOST_URL + '/api/core/test_centers/';
        this.GENDER_URL = this.HOST_URL + '/api/core/genders/';
        this.USERS_URL = this.HOST_URL + '/api/core/users/';
    }
    return Globals;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./src/app/utils/headers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRequestOptions; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomRequestOptions = (function (_super) {
    __extends(CustomRequestOptions, _super);
    function CustomRequestOptions() {
        var _this = _super.call(this) || this;
        var v = localStorage.getItem('auth_token');
        _this.headers.append('Authorization', 'JWT ' + v);
        return _this;
    }
    return CustomRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* BaseRequestOptions */]));

//# sourceMappingURL=headers.js.map

/***/ }),

/***/ "./src/app/utils/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_srv__ = __webpack_require__("./src/app/services/user.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        var v = this.userService.isloggedIn();
        if (v) {
            // this.router.navigate(['']);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
        //return ;
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_srv__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_srv__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "./src/app/views/allergies.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let allergy of allergies\">\n   \t\t\t<div>{{allergy.name}}</div>\n </div> -->\n\n\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Allergies\n                                <a class=\"\" href=\"#/new-allergy\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchAllergy()\"/>\n                            </div>\n\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let allergy of allergies\">\n                                            <td><a href=\"#/allergy/{{allergy.id}}\">{{allergy.name}}</a></td>\n                                           \n                                            <td>\n                                                <span><a href=\"#/allergy/edit/{{allergy.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a (click)=\"deleteAllergy(allergy)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                    \n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/allergy-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Partner Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Name</div>\n                                   <div class=\"col-lg-4\">{{allergy.name}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Possible Reactions</div>\n                                   <div class=\"col-lg-4\">{{allergy.possible_reactions}}</div>\n                               </div>\n\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Allergen</div>\n                                   <div class=\"col-lg-4\">{{allergy.allergen}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Source</div>\n                                   <div class=\"col-lg-4\">{{allergy.source}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Reacts With</div>\n                                   <div class=\"col-lg-4\">{{allergy.reacts_with}}</div>\n                               </div>\n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Clinical Presentation</div>\n                                   <div class=\"col-lg-4\">{{allergy.clinical_presentation}}</div>\n                               </div>\n\n                              \n\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/allergy-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Allergy Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"allergy.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Allergy Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Possible Reactions</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"allergy.possibleReactions\" name=\"possibleReactions\" #possibleReactions=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !possibleReactions.valid\" class=\"alert alert-danger\">Allergy Possible Reactions is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Allergen</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"allergy.allergen\" name=\"allergen\" #allergen=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !allergen.valid\" class=\"alert alert-danger\">Allergen is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Source</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"allergy.source\" name=\"source\" #source=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !source.valid\" class=\"alert alert-danger\">Allergy source is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Cross Reacts With</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"allergy.reactsWith\" name=\"reactsWith\" #reactsWith=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !reactsWith.valid\" class=\"alert alert-danger\">Cross Reacts With is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Clinical Presentation</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"allergy.clinicalPresentation\" name=\"clinicalPresentation\" #clinicalPresentation=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !clinicalPresentation.valid\" class=\"alert alert-danger\">Allergy Clinical Presentation is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/blood-groups.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let bg of bloodGroups\">\n   \t\t\t<div>{{bg.name}}</div>\n </div> -->\n\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Blood Groups\n                            </div>\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Status</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let bg of bloodGroups\">\n                                            <td>{{bg.name}}</td>\n                                           \n                                            <td>\n                                                <span class=\"tag tag-success\">Active</span>\n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                    <ul class=\"pagination\">\n                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a>\n                                        </li>\n                                        <li class=\"page-item active\">\n                                            <a class=\"page-link\" href=\"#\">1</a>\n                                        </li>\n                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a>\n                                        </li>\n                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a>\n                                        </li>\n                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a>\n                                        </li>\n                                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a>\n                                        </li>\n                                    </ul>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n    \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/client-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Client Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">First Name</div>\n                                   <div class=\"col-lg-4\">{{client.first_name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Middle Name</div>\n                                   <div class=\"col-lg-4\">{{client.middle_name}}</div>\n                               </div>\n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Last Name</div>\n                                   <div class=\"col-lg-4\">{{client.last_name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Nickame</div>\n                                   <div class=\"col-lg-4\">{{client.nick_name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Gender</div>\n                                   <div class=\"col-lg-4\">{{client.gender?.name}}</div>\n                               </div>\n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile</div>\n                                   <div class=\"col-lg-4\">{{client?.client?.mobile}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Address</div>\n                                   <div class=\"col-lg-4\">{{client.contact_address}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Date of Birth</div>\n                                   <div class=\"col-lg-4\">{{client.date_of_birth | date : 'shortDate'}} ({{client.age}} years old)</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Genotype</div>\n                                   <div class=\"col-lg-4\">{{client.genotype?.name}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Disabilities</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let d of client.disabilities\">\n                                          {{ d.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Diseases</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let disease of client.diseases\">\n                                          {{ disease.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Allergies</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let allergy of client.allergies\">\n                                          {{ allergy.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n                             \n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Emergency Name</div>\n                                   <div class=\"col-lg-4\">{{client.emergency_name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Emergency No.</div>\n                                   <div class=\"col-lg-4\">{{client.emergency_number}}</div>\n                               </div>\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/client-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Edit Client Information\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"clientForm.form.valid &&  onSubmit()\"  #clientForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">First Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"client.first_name\" name=\"firstName\" #firstName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"clientForm.submitted && !firstName.valid\" class=\"alert alert-danger\">First Name is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Middle Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"client.middle_name\" name=\"middleName\" #middleName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"clientForm.submitted && !middleName.valid\" class=\"alert alert-danger\">Middle Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Last Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"client.last_name\" name=\"lastName\" #lastName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"clientForm.submitted && !lastName.valid\" class=\"alert alert-danger\">Last Name is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Nickname</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                               <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"client.nick_name\" name=\"nickName\" #nickName=\"ngModel\" >\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Date of Birth</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                              <input  id=\"\" class=\"form-control\" type=\"date\"  \n                                                [(ngModel)]=\"client.date_of_birth\" name=\"dob\" #dob=\"ngModel\" required=\"\">\n\n                                                  <div *ngIf=\"clientForm.submitted && !dob.valid\" class=\"alert alert-danger\">Date of Birth Required</div>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Gender</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                               <select id=\"select\" class=\"form-control\" [(ngModel)]=\"client.gender\" name=\"gender\"  #gender=\"ngModel\"\n                                           required>\n                                                <option *ngFor=\"let df of gender_list\" [selected]=\"client.gender == df.id \" [value]=\"df.id\">{{df.name}}</option>\n                                               \n                                            </select>\n\n                                              <div *ngIf=\"clientForm.submitted && !gender.valid\" class=\"alert alert-danger\">Select Gender</div>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Contact Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                              <input  id=\"\" class=\"form-control\"   \n                                                [(ngModel)]=\"client.contact_address\" name=\"address\" #address=\"ngModel\" >\n\n                                                  <div *ngIf=\"clientForm.submitted && !address.valid\" class=\"alert alert-danger\">Contact Adress is required</div>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Blood Group</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"   [(ngModel)]=\"client.blood_group\" name=\"bloodGrp\"  #bloodGrp=\"ngModel\"\n                                           required>\n                                                <option *ngFor=\"let bg of blood_group_list\" [selected]=\"client.client == bg.id \" [value]=\"bg.id\">{{bg.name}}</option>\n                                    </select>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Genotype</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"   [(ngModel)]=\"client.genotype\" name=\"genotype\"  #genotype=\"ngModel\"\n                                           required>\n                                                <option *ngFor=\"let df of genotype_list\" [selected]=\"client.genotype == df.id \" [value]=\"df.id\">{{df.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Allergies</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"client.allergies_list\" name=\"allergies\"  #allergies=\"ngModel\" >\n                                                  <option *ngFor=\"let allergy of allergy_list\"  [value]=\"allergy.id\">{{allergy.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Diseases</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                              <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"client.diseases_list\" name=\"diseases\"  #diseases=\"ngModel\" >\n                                                  <option *ngFor=\"let disease of diseases_list\" [value]=\"disease.id\">{{disease.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Disabilities</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                               <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"client.disabilities_list\" name=\"disabilities\"  #disabilities=\"ngModel\" >\n                                                  <option *ngFor=\"let disability of disability_list\"  [value]=\"disability.id\">{{disability.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">NHIS No.</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                               <input id=\"\" class=\"form-control\" type=\"text\"  OnlyNumber=\"true\"\n                                                [(ngModel)]=\"client.nhis_number\" name=\"name\" #name=\"ngModel\" >\n\n                                               \n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">HMO</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                              <select id=\"select\" class=\"form-control\"   [(ngModel)]=\"client.hmo\" name=\"hmo\"  #hmo=\"ngModel\"\n                                           >\n                                                <option *ngFor=\"let df of hmo_list\" [value]=\"df.id\">{{df.name}}</option>\n                                               \n                                            </select>\n\n                                                  <div *ngIf=\"clientForm.submitted && !hmo.valid\" class=\"alert alert-danger\">HMO is required</div>\n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Emergency Contact Name.</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                             <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"client.emergency_name\" name=\"contactName\" #contactName=\"ngModel\" required>\n\n                                                   <div *ngIf=\"clientForm.submitted && !contactName.valid\" class=\"alert alert-danger\">Emergency Contact Name is required</div>\n                                               \n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Emergency Contact No.</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                               <input id=\"\" class=\"form-control\" type=\"text\" OnlyNumber=\"true\"\n                                               maxlength=\"11\" minlength=\"11\" \n                                                [(ngModel)]=\"client.emergency_number\" name=\"contactNo\" #contactNo=\"ngModel\" required>\n\n                                                 <div *ngIf=\"clientForm.submitted && !contactName.valid\" class=\"alert alert-danger\">Emergency Contact No. is required</div>\n\n                                               \n                                            </div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n\n \n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/clients.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Clients \n                                 <a class=\"\" href=\"#/new-responder\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchClient()\"/>\n                            </div>\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Mobile</th>\n\n                                            <th>First Name</th>\n                                            <th>Middle Name</th>\n                                             <th>Last Name</th>\n                                              <th>Gender</th>\n                                             \n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let client of clients | paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td><a href=\"#/client/{{client.id}}\">{{client?.client?.mobile}}</a></td>\n                                             <td>{{client.first_name}}</td>\n                                             <td>{{client.middle_name}}</td>\n                                            <td>{{client.last_name}}</td>\n                                            <td>{{client?.gender?.name}}</td>\n                                          \n                                            <td>\n                                                \n                                                 \n                                                  <span>\n                                                   <span><a href=\"#/client/edit/{{client.id}}\"><i class=\"icon-pencil icons\"></i></a></span>  |\n                                                  <!-- <a href=\"\"><i class=\"icon-trash icons\"></i></a> --></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                 <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/dashboard.html":
/***/ (function(module, exports) {

module.exports = "\n<header-component></header-component>\n <sidebar-component></sidebar-component>\n\n <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n \n\n        <div class=\"container-fluid\">\n\n\n\n            <div class=\"animated fadeIn\">\n\n                <div class=\"card-columns col-2\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Responders / Locations\n                             <div class=\"card-actions\"> \n                           \n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                <responder-locations-component></responder-locations-component>\n                            </div>\n                        </div>\n                    </div>\n                     <div class=\"card\">\n                        <div class=\"card-header\">\n                            Responders / Kits\n                             <div class=\"card-actions\"> \n                           \n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                <responder-kits-component></responder-kits-component>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Clients / Status\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                <canvas id=\"canvas-2\"></canvas>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                             Responders / Areas of Concentration\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                 <responder-concentration-component></responder-concentration-component>\n                            </div>\n                        </div>\n                    </div>\n                   <!--  <div class=\"card\">\n                        <div class=\"card-header\">\n                             Responders / Reviews\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                             <div class=\"chart-wrapper\">\n                                <responder-kits-component></responder-kits-component>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Users\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                <responder-kits-component></responder-kits-component>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Clients / Allergies\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                             <div class=\"chart-wrapper\">\n                                <client-allergies-component></client-allergies-component>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Clients / Diseases\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                <client-diseases-component></client-diseases-component>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Clients / Disabilities\n                            <div class=\"card-actions\">\n                                <a href=\"http://www.chartjs.org\">\n                                    <small class=\"text-muted\">docs</small>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"chart-wrapper\">\n                                <client-disabilities-component></client-disabilities-component>\n                            </div>\n                        </div>\n                    </div>\n                     \n                </div>\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n    \n\n\n<footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/disabilities.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Disabilities\n                                 <a class=\"\" href=\"#/new-disability\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchDisability()\"/>\n                            </div>\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Status</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let disability of disabilities| paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td>{{disability.name}}</td>\n                                           \n                                             <td>\n                                                  <span><a href=\"#/disability/edit/{{disability.id}}\"><i class=\"icon-pencil icons\"></i></a></span>  |\n                                                 <span><a (click)=\"deleteDisability(disability)\"><i class=\"icon-trash icons\"></i></a></span>\n                                                 \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/disability-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Disability Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"disability.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Disability Name is required</div>\n                                        </div>\n                                    </div>\n\n\n \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/disability-form.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i> New Disability \n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"disability.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Disability Name is required</div>\n                                        </div>\n                                    </div>\n\n\n \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/disease-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Disease Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"disease.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Disease Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Description</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"disease.description\" name=\"description\" #description=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !description.valid\" class=\"alert alert-danger\">Disease description is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                        \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/disease-form.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Disease Form\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"disease.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Disease Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Description</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"disease.description\" name=\"description\" #description=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !description.valid\" class=\"alert alert-danger\">Allergy description is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                      \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/diseases.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n           \n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Medical Conditions\n                                 <a class=\"\" href=\"#/new-disease\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                            <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchDisease()\"/>\n                            </div>\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Status</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let d of diseases| paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td>{{d.name}}</td>\n                                           \n                                            \n                                            <td>\n                                                <span><a href=\"#/disease/edit/{{d.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a (click)=\"deleteDisease(d)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/drug-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Drug Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Name</div>\n                                   <div class=\"col-lg-4\">{{drug.name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Brand</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let a of drug.brand\">\n                                          {{ a.name }}\n                                        </li>\n                                      </ul>\n                                   </div>\n                               </div>\n\n                              \n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Drug Form</div>\n                                   <div class=\"col-lg-4\">{{drug.form?.name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Classifications</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let class of drug.classifications\">\n                                          {{ class.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Indications</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let indication of drug.indications\">\n                                          {{ indication.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Contra-Indications</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let contra of drug.contra_indications\">\n                                          {{ contra.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Side Effects</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let effect of drug.side_effects\">\n                                          {{ effect.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Dispense Type</div>\n                                   <div class=\"col-lg-4\">{{drug.dispense_type?.name}}</div>\n                               </div>\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/drug-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Drug Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"drug.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Drug Name is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Brand</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\"  [(ngModel)]=\"drug.temp_brands\" name=\"brand\"  #brand=\"ngModel\"  multiple=\"\" required >\n                                                <option *ngFor=\"let brand of brands\" [value]=\"brand.id\">{{brand.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"drugForm.submitted && !brand.valid\" class=\"alert alert-danger\">Select Drug Brand</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Drug Form</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"   [(ngModel)]=\"drug.temp_form\" name=\"form\"  #form=\"ngModel\"\n                                           required>\n                                                <option *ngFor=\"let df of drug_forms\" [value]=\"df.id\">{{df.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !form.valid\" class=\"alert alert-danger\">Drug Form is required</div>\n                                            </div>\n                                           \n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Drug Classification(s)</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.temp_classifications\" name=\"classifications\"  #classifications=\"ngModel\"  required >\n                                                  <option *ngFor=\"let classification of drug_classifications\" [value]=\"classification.id\">{{classification.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !classifications.valid\" class=\"alert alert-danger\">Select Classification(s)</div>\n                                        </div>\n                                    </div>\n\n                                   \n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Drug Indications</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.temp_indications\" name=\"indications\"  #indications=\"ngModel\"  required >\n                                                  <option *ngFor=\"let indication of drug_indications\" [value]=\"indication.id\">{{indication.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !indications.valid\" class=\"alert alert-danger\">Select Drug Indication(s)</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Drug Contra-Indications</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.temp_contra_indications\" name=\"contras\"  #contras=\"ngModel\"  required >\n                                                  <option *ngFor=\"let contra of drug_contraindications\" [value]=\"contra.id\">{{contra.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !contras.valid\" class=\"alert alert-danger\">Contra-Indication is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Side Effects</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.temp_side_effects\" name=\"sideEffects\"  #sideEffects=\"ngModel\"  required >\n                                                  <option *ngFor=\"let a of side_effects\" [value]=\"a.id\">{{a.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !sideEffects.valid\" class=\"alert alert-danger\">Select Side Effects</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Dispense</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\"  class=\"form-control\" [(ngModel)]=\"drug.temp_dispense_type\" name=\"dispenseType\"  #dispenseType=\"ngModel\"  required> \n                                                <option *ngFor=\"let dt of dispense_types\" [value]=\"dt.id\">{{dt.name}}</option>\n                                               \n                                            </select>\n\n                                          <div *ngIf=\"drugForm.submitted && !dispenseType.valid\" class=\"alert alert-danger\">Drug Dispense Type is required</div>\n                                            </div>\n                                            </div>\n                                           \n                                        \n                                    </div>\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                      \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/drug-form.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>New Drug\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"drug.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">Drug Name is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Brand</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\"  [(ngModel)]=\"drug.brand\" name=\"brand\"  #brand=\"ngModel\"  multiple=\"\" required >\n                                                <option *ngFor=\"let brand of brands\" [value]=\"brand.id\">{{brand.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"drugForm.submitted && !brand.valid\" class=\"alert alert-danger\">Select Drug Brand</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Drug Form</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"   [(ngModel)]=\"drug.form\" name=\"form\"  #form=\"ngModel\"\n                                           required>\n                                                <option *ngFor=\"let df of drug_forms\" [value]=\"df.id\">{{df.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !form.valid\" class=\"alert alert-danger\">Drug Form is required</div>\n                                            </div>\n                                           \n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Drug Classification(s)</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.classifications\" name=\"classifications\"  #classifications=\"ngModel\"  required >\n                                                  <option *ngFor=\"let classification of drug_classifications\" [value]=\"classification.id\">{{classification.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !classifications.valid\" class=\"alert alert-danger\">Select Classification(s)</div>\n                                        </div>\n                                    </div>\n\n                                   \n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Drug Indications</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.indications\" name=\"indications\"  #indications=\"ngModel\"  required >\n                                                  <option *ngFor=\"let indication of drug_indications\" [value]=\"indication.id\">{{indication.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !indications.valid\" class=\"alert alert-danger\">Select Drug Indication(s)</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Drug Contra-Indications</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.contras\" name=\"contras\"  #contras=\"ngModel\"  required >\n                                                  <option *ngFor=\"let contra of drug_contraindications\" [value]=\"contra.id\">{{contra.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !contras.valid\" class=\"alert alert-danger\">Contra-Indication is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Side Effects</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"drug.sideEffects\" name=\"sideEffects\"  #sideEffects=\"ngModel\"  required >\n                                                  <option *ngFor=\"let a of side_effects\" [value]=\"a.id\">{{a.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"drugForm.submitted && !sideEffects.valid\" class=\"alert alert-danger\">Select Side Effects</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Dispense</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\"  class=\"form-control\" [(ngModel)]=\"drug.dispense_type\" name=\"dispenseType\"  #dispenseType=\"ngModel\"  required> \n                                                <option *ngFor=\"let dt of dispense_types\" [value]=\"dt.id\">{{dt.name}}</option>\n                                               \n                                            </select>\n\n                                          <div *ngIf=\"drugForm.submitted && !dispenseType.valid\" class=\"alert alert-danger\">Drug Dispense Type is required</div>\n                                            </div>\n                                            </div>\n                                           \n                                        \n                                    </div>\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                       \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/drugs.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Drugs\n                                 <a class=\"\" href=\"#/new-drug\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                            <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchDrug()\"/>\n                            </div>\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n\n                                            <th>Form</th>\n                                            \n                                             <th>Dispense Type</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let drug of drugs | paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td><a href=\"#/drug/{{drug.id}}\">{{drug.name}}</a> </td>\n                                             <td>{{drug.form.name}}</td>\n                                            <td>{{drug.dispense_type.name}}</td>\n                                           \n                                            <td>\n                                                  <span><a href=\"#/drug/edit/{{drug.id}}\"><i class=\"icon-pencil icons\"></i></a></span>  |\n                                                 <span><a (click)=\"deleteDrug(drug)\"><i class=\"icon-trash icons\"></i></a></span>\n                                                 \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                               \n                                <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/footer.html":
/***/ (function(module, exports) {

module.exports = " <footer class=\"footer\">\n        <!-- <span class=\"text-left\">\n             © 2016 creativeLabs.\n        </span> -->\n        <span class=\"float-xs-right\">\n            Powered by <a href=\"http://coreui.io\">Leviticus Labs</a>\n        </span>\n    </footer>"

/***/ }),

/***/ "./src/app/views/header.html":
/***/ (function(module, exports) {

module.exports = "<!-- <body class=\"navbar-fixed sidebar-nav fixed-nav\"> -->\n    <header class=\"navbar\">\n        <div class=\"container-fluid\">\n            <button class=\"navbar-toggler mobile-toggler hidden-lg-up\" type=\"button\">☰</button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n           \n            <ul class=\"nav navbar-nav float-xs-right hidden-md-down\">\n                \n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                      \n                    </a>\n                    \n                </li>\n                 <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a> \n                    \n                </li>\n               <!--  <li class=\"nav-item\">\n                    <a class=\"nav-link aside-toggle\" href=\"#\">☰</a>\n                </li> -->\n\n            </ul>\n        </div>\n    </header>"

/***/ }),

/***/ "./src/app/views/hmo-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> HMO Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Name</div>\n                                   <div class=\"col-lg-4\">{{hmo.name}}</div>\n                               </div>\n\n\n                              \n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Address</div>\n                                   <div class=\"col-lg-4\">{{hmo.address}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">State</div>\n                                   <div class=\"col-lg-4\">{{hmo?.state?.name}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile 1</div>\n                                   <div class=\"col-lg-4\">{{hmo.mobile1}}</div>\n                               </div>\n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile 2</div>\n                                   <div class=\"col-lg-4\">{{hmo.mobile2}}</div>\n                               </div>\n\n                              \n\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/hmo-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>HMO Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"hmoForm.form.valid &&  onSubmit()\"  #hmoForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !name.valid\" class=\"alert alert-danger\">HMO Name is required</div>\n                                        </div>\n                                    </div>\n\n                                                                        <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.address\" name=\"address\" #address=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !address.valid\" class=\"alert alert-danger\">Address is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"hmo.myState\" name=\"state\"  #state=\"ngModel\"   required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\" [selected]=\"hmo.myState== state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 1:</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.mobile1\" name=\"mobile1\" #mobile1=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !mobile1.valid\" class=\"alert alert-danger\">Mobile 1 is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 2</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.mobile2\" name=\"mobile2\" #mobile2=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !mobile2.valid\" class=\"alert alert-danger\">Mobile 2 is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                       \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/hmo-form.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>New HMO\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"hmoForm.form.valid &&  onSubmit()\"  #hmoForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !name.valid\" class=\"alert alert-danger\">HMO Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.address\" name=\"address\" #address=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !address.valid\" class=\"alert alert-danger\">Address is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"hmo.state\" name=\"state\"  #state=\"ngModel\"   required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 1:</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.mobile1\" name=\"mobile1\" #mobile1=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !mobile1.valid\" class=\"alert alert-danger\">Mobile 1 is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 2</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"hmo.mobile2\" name=\"mobile2\" #mobile2=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"hmoForm.submitted && !mobile2.valid\" class=\"alert alert-danger\">Mobile 2 is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                       \n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/hmos.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let allergy of allergies\">\n   \t\t\t<div>{{allergy.name}}</div>\n </div> -->\n\n\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n           \n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> HMOs\n                                <a class=\"\" href=\"#/new-hmo\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let hmo of hmos\">\n                                            <td><a href=\"#/hmo/{{hmo.id}}\">{{hmo.name}}</a></td>\n                                           \n                                             <td>\n                                                <span><a href=\"#/hmo/edit/{{hmo.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a  (click)=\"deleteHMO(hmo)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                    \n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/lga-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Local Govt Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"lgaForm.form.valid &&  onSubmit()\"  #lgaForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"localGovt.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"lgaForm.submitted && !name.valid\" class=\"alert alert-danger\">LGA is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"localGovt.myState\" name=\"state\"  #state=\"ngModel\"  required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\" [selected]=\"localGovt.myState== state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"lgaForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n\n\n                                 \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                        <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/local_govts.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Local Governments\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchLG()\"/>\n                            </div>\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                             <th>State</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let lga of local_govts| paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td>{{lga.name}}</td>\n\n                                             <td>{{lga.state.name}}</td>\n                                           \n                                            <td>\n                                               \n                                                 <span><a href=\"#/local_govt/edit/{{lga.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                    <span><a (click)=\"deleteLocalGovt(lga)\"><i class=\"icon-trash icons\"></i></a></span> \n\n                                                  \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/login.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container d-table\">\n        <div class=\"d-100vh-va-middle\">\n            <div class=\"row\">\n                <div class=\"col-md-6  offset-md-3\">\n                    <div class=\"card mx-2\">\n                        <div class=\"card-block p-2\">\n                            <div class=\"card-block\">\n                                <!-- <h1>Login</h1> -->\n                                \n                                    <img src=\"assets/img/logo.png\"  class=\"\" style=\"\" width=\"185\" height=\"55\" class=\"logo\">\n                               \n                                \n                                <p class=\"text-muted\">Sign In to your account</p>\n                               \n                                <form class=\"form-horizontal\" (ngSubmit)=\"loginForm.form.valid &&  login()\"  #loginForm=\"ngForm\" novalidate>\n\n                                 <div class=\"form-group row\">\n                                            <label class=\"form-control-label\" for=\"\">Mobile No.</label>\n                                            <div class=\"input-group mb-1\">\n                                             \n                                                <input type=\"text\" class=\"form-control\" OnlyNumber=\"true\" maxlength=\"11\" minlength=\"11\"  [(ngModel)]=\"user.mobile\" name=\"mobile\" #mobile=\"ngModel\" required>\n\n                                                 <div *ngIf=\"loginForm.submitted && !mobile.valid\" class=\"alert alert-danger\">Mobile No. is required</div>\n                                            </div>\n                                            \n                                </div>\n\n                                 <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Password</label>\n                                        <div class=\"input-group mb-2\">\n                                            <input type=\"password\" class=\"form-control\" \n                                            [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required> \n                                             <div *ngIf=\"loginForm.submitted && !password.valid\" class=\"alert alert-danger\">Password is required</div>\n                                        </div>\n                                        \n                                </div>\n                                <div class=\"row\">\n                                    <div class=\" text-xs-right\">\n                                        <button type=\"submit\" class=\"btn btn-primary px-2\">Login</button>\n                                    </div>\n                                    \n                                </div>\n                                </form>\n                            </div>\n                        </div>\n                       \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/views/new-partner.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>New Partner\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"partnerForm.form.valid &&  onSubmit()\"  #partnerForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !name.valid\" class=\"alert alert-danger\">Partner Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Description</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.description\" name=\"description\" #description=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !description.valid\" class=\"alert alert-danger\">Desciption is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.address\" name=\"address\" #address=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !address.valid\" class=\"alert alert-danger\">Address is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"partner.state\" name=\"state\"  #state=\"ngModel\"   required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 1:</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.mobile1\" name=\"mobile1\" #mobile1=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !mobile1.valid\" class=\"alert alert-danger\">Mobile 1 is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 2</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.mobile2\" name=\"mobile2\" #mobile2=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !mobile2.valid\" class=\"alert alert-danger\">Mobile 2 is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/new-test-center.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>New Test Center\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"partnerForm.form.valid &&  onSubmit()\"  #partnerForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !name.valid\" class=\"alert alert-danger\">Partner Name is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Description</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <textarea id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.description\" name=\"description\" #description=\"ngModel\" required>\n\n                                                </textarea>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !description.valid\" class=\"alert alert-danger\">Desciption is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.address\" name=\"address\" #address=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !address.valid\" class=\"alert alert-danger\">Address is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"tc.state\" name=\"state\"  #state=\"ngModel\"   required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 1:</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.mobile1\" name=\"mobile1\" #mobile1=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !mobile1.valid\" class=\"alert alert-danger\">Mobile 1 is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 2</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.mobile2\" name=\"mobile2\" #mobile2=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !mobile2.valid\" class=\"alert alert-danger\">Mobile 2 is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/new-user.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>New User\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"userForm.form.valid &&  onSubmit()\"  #userForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"user.mobile\" name=\"mobile\" #mobile=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"userForm.submitted && !mobile.valid\" class=\"alert alert-danger\">Mobile Number is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Email</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"user.email\" name=\"email\" #email=\"ngModel\" >\n                                            </div>\n                                            \n                                          \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Password</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"password\"  \n                                                [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required validateEqual=\"confPassword\" reverse=\"true\">\n                                            </div>\n                                            \n                                           <div *ngIf=\"userForm.submitted && !password.valid\" class=\"alert alert-danger\">Password is required</div>\n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Confirm Password</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"password\"  \n                                                [(ngModel)]=\"user.confPassword\" name=\"confPassword\" #confPassword=\"ngModel\" required validateEqual=\"password\">\n                                            </div>\n                                            \n                                            <div *ngIf=\"userForm.submitted && !confPassword.valid\" class=\"alert alert-danger\"> Password mismatch </div>\n                                        </div>\n                                    </div>\n\n\n\n\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">User Type</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"user.userType\" name=\"userType\"  #userType=\"ngModel\"   required >\n                                                <!-- <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</option> -->\n                                                <option value=\"AD\">Admin</option>\n                                                <option value=\"SA\">Sub-Admin</option>\n\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"userForm.submitted && !userType.valid\" class=\"alert alert-danger\">User Type is required</div>\n                                        </div>\n                                    </div>\n\n\n                                   \n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/partner-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Partner Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Name</div>\n                                   <div class=\"col-lg-4\">{{partner.name}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Description</div>\n                                   <div class=\"col-lg-4\">{{partner.description}}</div>\n                               </div>\n\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Address</div>\n                                   <div class=\"col-lg-4\">{{partner.address}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">State</div>\n                                   <div class=\"col-lg-4\">{{partner?.state?.name}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile 1</div>\n                                   <div class=\"col-lg-4\">{{partner.mobile1}}</div>\n                               </div>\n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile 2</div>\n                                   <div class=\"col-lg-4\">{{partner.mobile2}}</div>\n                               </div>\n\n                              \n\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/partner-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i> Partner Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"partnerForm.form.valid &&  onSubmit()\"  #partnerForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !name.valid\" class=\"alert alert-danger\">Partner Name is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.address\" name=\"address\" #address=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !address.valid\" class=\"alert alert-danger\">Address is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"partner.myState\" name=\"state\"  #state=\"ngModel\"   required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\" [selected]=\"partner.myState== state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 1:</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.mobile1\" name=\"mobile1\" #mobile1=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !mobile1.valid\" class=\"alert alert-danger\">Mobile 1 is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 2</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"partner.mobile2\" name=\"mobile2\" #mobile2=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"partnerForm.submitted && !mobile2.valid\" class=\"alert alert-danger\">Mobile 2 is required</div>\n                                        </div>\n                                    </div>\n\n                                   \n\n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/partners.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let allergy of allergies\">\n   \t\t\t<div>{{allergy.name}}</div>\n </div> -->\n\n\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Partners\n                                <a class=\"\" href=\"#/new-partner\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchPartner()\"/>\n                            </div>\n\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let p of partners\">\n                                            <td><a href=\"#/partner/{{p.id}}\">{{p.name}}</a></td>\n                                           \n                                            <td>\n                                                <span><a href=\"#/partner/edit/{{p.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a (click)=\"deletePartner(p)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                    \n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/register.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container d-table\">\n        <div class=\"d-100vh-va-middle\">\n            <div class=\"row\">\n                <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"card mx-2\">\n                        <div class=\"card-block p-2\">\n                            <h1>Register</h1>\n                            <p class=\"text-muted\">Create your account</p>\n                            <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\n                                </span>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                            </div>\n\n                            <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\">@</span>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                            </div>\n\n                            <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\n                                </span>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                            </div>\n\n                            <div class=\"input-group mb-2\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\n                                </span>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n                            </div>\n\n                            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/views/responder-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                 <div class=\"col-lg-3\">\n                     \n                        <div class=\"row\">\n                          <div class=\"row\">\n                             <div  *ngIf=\"!responder.image_url\" class=\"col-lg-4\">\n                                  <img src=\"assets/img/Placeholder-Portrait.jpg\" height=\"200\" width=\"200\">\n                             </div>\n                             \n                              <div  *ngIf=\"responder.image_url\" style=\"padding-bottom: 10px;padding-left:40px\"  class=\"row col-lg-4\">\n                                <div class=\"row\">\n                                  <img src=\"{{host_address + '/' +responder.image_url}}\" height=\"200\" width=\"200\">\n                                </div>\n                                 \n                                  \n                             </div> \n                             \n                              \n\n                          </div>\n                          <div class=\"row\" style=\"padding-top:5px\">\n\n                            <div class=\"col-lg-4\" [hidden]=\"!upload\">\n                                 <input type=\"file\"    class=\"\" (change)=\"attachFile($event)\">\n                              </div>\n\n                                   \n                          </div>\n\n                          <div class=\"row\" style=\"padding-top: 5px\">\n                                  <div  class=\"col-lg-4\"  [hidden]=\"!upload\">\n                                  <button class=\"btn btn-info\" [disabled]=\"busyUploading\" (click)=\"uploadPhoto()\">\n                                  <i class=\"fa fa-upload\"></i>\n                                  Upload Photo\n                                   <i class=\"fa fa-spinner fa-spin\" [hidden]=\"!busyUploading\"></i>\n                                   </button>\n                              </div>\n                          </div>\n\n                          <div class=\"row\" style=\"padding-top:5px\">\n                                  <div class=\"col-lg-4\" >\n                                     <button  class=\"btn btn-success\" (click)=\"allowUpload()\">Change Picture</button>\n                                 </div>\n                          </div>\n\n                        </div>\n\n                        <div class=\"row\" style=\"padding-top: 5px\">\n                              <div class=\"row\">\n                                  Supporting Documents\n                                   <input   type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload a file...\" multiple/>\n                               \n                                 <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploadResponderDocs()\">\n                                    <i class=\"glyphicon glyphicon-open-file\"></i>&nbsp;Upload\n                                  </button>\n                              </div>\n                        </div>\n\n                            \n                      \n                 </div>\n                    <div class=\"col-lg-9\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Responder Detail\n                            </div>\n                            <div class=\"card-block\">\n\n                             <div class=\"row\">\n                                   <div class=\"col-lg-4\">Responder Code</div>\n                                   <div class=\"col-lg-4\">{{responder.responder_code}}</div>\n                               </div>\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile</div>\n                                   <div class=\"col-lg-4\">{{responder?.member?.mobile}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">First Name</div>\n                                   <div class=\"col-lg-4\">{{responder.first_name}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Middle Name</div>\n                                   <div class=\"col-lg-4\">{{responder.middle_name}}</div>\n                               </div>\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Last Name</div>\n                                   <div class=\"col-lg-4\">{{responder.last_name}}</div>\n                               </div>\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Gender</div>\n                                   <div class=\"col-lg-4\">{{responder?.gender?.name}}</div>\n                               </div>\n\n                               \n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Areas of Concentration</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let a of responder.areas_of_concentration\">\n                                          {{ a.name }}\n                                        </li>\n                                      </ul>\n                                   </div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Kits</div>\n                                   <div class=\"col-lg-4\">\n                                      <ul>\n                                        <li *ngFor=\"let kit of responder.kits\">\n                                          {{ kit.name }}\n                                        </li>\n                                      </ul>\n                                    </div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">State</div>\n                                   <div class=\"col-lg-4\">{{responder.state?.name}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Local Govt</div>\n                                   <div class=\"col-lg-4\">{{responder.local_govt?.name}}</div>\n                               </div>\n\n                             \n                               \n                            </div>\n                        </div>\n\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Supporting Docs\n                            </div>\n                            <div class=\"card-block\">\n\n                               \n\n                               <div class=\"row\">\n                                   <!-- <div class=\"col-lg-4\">Areas of Concentration</div> -->\n                                   <div class=\"col-lg-3\">\n                                      <div *ngFor=\"let item of responder.responder_docs\">\n                                           <iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(item.doc)'  height=\"300\" width=\"300\"  webkitallowfullscreen mozallowfullscreen allowfullscreen> </iframe> <a  (click)=\"deleteDoc(item )\"><i class=\"fa fa-times\" ></i> Remove Photo </a>\n\n                                          \n\n                                      </div>\n                                   </div>\n                               </div>\n\n                              \n\n                              \n\n                             \n                             \n                               \n                            </div>\n                        </div>\n\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/responder-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Edit Responder Information\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"responderForm.form.valid &&  onSubmit()\"  #responderForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">First Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"responder.first_name\" name=\"firstName\" #firstName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !firstName.valid\" class=\"alert alert-danger\">First Name is required</div>\n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Last Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"responder.last_name\" name=\"lastName\" #lastName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !lastName.valid\" class=\"alert alert-danger\">Last Name is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  OnlyNumber=\"true\" maxlength=\"11\" minlength=\"11\"  \n                                                [(ngModel)]=\"responder.mobile\" name=\"mobile\" #mobile=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !mobile.valid\" class=\"alert alert-danger\">Mobile No. is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"responder.state\" name=\"state\"  #state=\"ngModel\"  (change)=\"fetchLGA($event.target.value)\" required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\" [selected]=\"responder.state== state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"responderForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Local Govt.</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"responder.lga\" name=\"lga\"  #lga=\"ngModel\"  required >\n                                                <option *ngFor=\"let lga of local_govts\" [value]=\"lga.id\" \n                                                [selected]=\"responder.lga == lga.id \">{{lga.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"responderForm.submitted && !lga.valid\" class=\"alert alert-danger\">Local Government is required</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Areas of Concentration</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"responder.aocs\" name=\"concentration\"  #concentration=\"ngModel\"  required >\n                                                  <option *ngFor=\"let conc of concentrations\" [value]=\"conc.id\">{{conc.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"responderForm.submitted && !concentration.valid\" class=\"alert alert-danger\">Concentration is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Kits</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"responder.res_kits\" name=\"kit\"  #kit=\"ngModel\"  required >\n                                                 <option *ngFor=\"let kit of kits\" [value]=\"kit.id\">{{kit.name}}</option>\n                                               \n                                            </select>\n\n                                             <div *ngIf=\"responderForm.submitted && !kit.valid\" class=\"alert alert-danger\">Kit is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/responder-form.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>New Responder\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"responderForm.form.valid &&  onSubmit()\"  #responderForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">First Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"responder.first_name\" name=\"firstName\" #firstName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !firstName.valid\" class=\"alert alert-danger\">First Name is required</div>\n                                        </div>\n                                    </div>\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Middle Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"responder.middleName\" name=\"middleName\" #middleName=\"ngModel\"  required>\n                                            </div>\n\n                                             <div *ngIf=\"responderForm.submitted && !middleName.valid\" class=\"alert alert-danger\">Middle name  is required</div>\n                                            \n                                         \n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Last Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"responder.last_name\" name=\"lastName\" #lastName=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !lastName.valid\" class=\"alert alert-danger\">Last Name is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\" OnlyNumber=\"true\" maxlength=\"11\" minlength=\"11\"  \n                                                [(ngModel)]=\"responder.mobile\" name=\"mobile\" #mobile=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !mobile.valid\" class=\"alert alert-danger\">Mobile No. is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Password</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"password\"  \n                                                [(ngModel)]=\"responder.password\" name=\"password\" #password=\"ngModel\" required validateEqual=\"confPassword\" reverse=\"true\">\n                                            </div>\n                                            \n                                           <div *ngIf=\"responderForm.submitted && !password.valid\" class=\"alert alert-danger\">Password is required</div>\n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Confirm Password</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"password\"  \n                                                [(ngModel)]=\"responder.confPassword\" name=\"confPassword\" #confPassword=\"ngModel\" required validateEqual=\"password\">\n                                            </div>\n                                            \n                                            <div *ngIf=\"responderForm.submitted && !confPassword.valid\" class=\"alert alert-danger\"> Password mismatch </div>\n                                        </div>\n                                    </div>\n\n\n                                      <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Gender</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"responder.gender\" name=\"gender\"  #gender=\"ngModel\"  required >\n                                                <option *ngFor=\"let gender of genders\" [value]=\"gender.id\">{{gender.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"responderForm.submitted && !gender.valid\" class=\"alert alert-danger\">Gender is required</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"responder.state\" name=\"state\"  #state=\"ngModel\"  (change)=\"fetchLGA($event.target.value)\" required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"responderForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Local Govt.</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                \n                                            <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"responder.lga\" name=\"lga\"  #lga=\"ngModel\"  required >\n                                                <option *ngFor=\"let lga of local_govts\" [value]=\"lga.id\">{{lga.name}}</option>\n                                               \n                                            </select>\n\n                                                 <div *ngIf=\"responderForm.submitted && !lga.valid\" class=\"alert alert-danger\">Local Government is required</div>\n                                            </div>\n\n                                           \n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Areas of Concentration</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"responder.concentrations\" name=\"concentration\"  #concentration=\"ngModel\"  required >\n                                                  <option *ngFor=\"let conc of concentrations\" [value]=\"conc.id\">{{conc.name}}</option>\n                                               \n                                            </select>\n\n                                            <div *ngIf=\"responderForm.submitted && !concentration.valid\" class=\"alert alert-danger\">Concentration is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-md-2 form-control-label\" for=\"multiple-select\">Kits</label>\n                                        <div class=\"col-md-9\">\n                                            <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple=\"\" [(ngModel)]=\"responder.kits\" name=\"kit\"  #kit=\"ngModel\"  required >\n                                                 <option *ngFor=\"let kit of kits\" [value]=\"kit.id\">{{kit.name}}</option>\n                                               \n                                            </select>\n\n                                             <div *ngIf=\"responderForm.submitted && !kit.valid\" class=\"alert alert-danger\">Kit is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/responders.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Responders \n                                 <a class=\"\" href=\"#/new-responder\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchResponder()\"/>\n                            </div>\n                            \n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Responder Code</th>\n\n                                            <th>First Name</th>\n                                             <th>Last Name</th>\n                                              <th>Mobile</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let responder of responders | paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td><a href=\"#/responder/{{responder.id}}\">{{responder.responder_code}}</a></td>\n                                             <td>{{responder.first_name}}</td>\n                                            <td>{{responder.last_name}}</td>\n                                            <td>{{responder?.member.mobile}}</td>\n                                           \n                                            <td>\n                                                \n                                                  <span><a href=\"#/responder/edit/{{responder.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a (click)=\"deleteResponder(responder)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                 <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/sidebar.html":
/***/ (function(module, exports) {

module.exports = "\n <div class=\"sidebar\">\n       \n       <nav class=\"sidebar-nav\">\n       \n            <ul class=\"nav\">\n            \n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"tag tag-info\">NEW</span></a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/responders\"><i class=\"icon-speedometer\"></i> Responders </a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/clients\"><i class=\"icon-speedometer\"></i> Clients</a>\n                </li>\n                \n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/drugs\"><i class=\"icon-speedometer\"></i> Drugs</a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/hmos\"><i class=\"icon-speedometer\"></i> HMOs</a>\n                </li>\n\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/diseases\"><i class=\"icon-speedometer\"></i> Medical Conditions</a>\n                </li>\n                 \n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/allergies\"><i class=\"icon-speedometer\"></i> Allergies</a>\n                </li>\n\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/disabilities\"><i class=\"icon-speedometer\"></i> Disabilities</a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/states\"><i class=\"icon-speedometer\"></i> States</a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/local_govts\"><i class=\"icon-speedometer\"></i> Local Govts</a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/partners\"><i class=\"icon-speedometer\"></i> Partners</a>\n                </li>\n\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#/test-centers\"><i class=\"icon-speedometer\"></i> Test Centers</a>\n                </li>\n\n\n                <li class=\"nav-item\">\n               \n                    <a class=\"nav-link\" href=\"#/users\"><i class=\"icon-speedometer\"></i> Users</a>\n                </li>\n\n                \n              \n               \n               \n              \n\n            </ul>\n        </nav>\n    </div>  \n"

/***/ }),

/***/ "./src/app/views/state-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>State Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"drugForm.form.valid &&  onSubmit()\"  #drugForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"state.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"drugForm.submitted && !name.valid\" class=\"alert alert-danger\">State name is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/states.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> States\n                            </div>\n\n                            <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchStates()\"/>\n                            </div>\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let state of states| paginate: { itemsPerPage: 20, currentPage: p }\">\n                                            <td>{{state.name}}</td>\n                                           \n                                            <td>\n                                               \n                                                 <span><a href=\"#/state/edit/{{state.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                    <span><a (click)=\"deleteState(state)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/tc-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Test Center Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Name</div>\n                                   <div class=\"col-lg-4\">{{tc.name}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Description</div>\n                                   <div class=\"col-lg-4\">{{tc.description}}</div>\n                               </div>\n\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Address</div>\n                                   <div class=\"col-lg-4\">{{tc.address}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">State</div>\n                                   <div class=\"col-lg-4\">{{tc?.state?.name}}</div>\n                               </div>\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile 1</div>\n                                   <div class=\"col-lg-4\">{{tc.mobile1}}</div>\n                               </div>\n\n\n                                <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile 2</div>\n                                   <div class=\"col-lg-4\">{{tc.mobile2}}</div>\n                               </div>\n\n                              \n\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/test-center-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>HMO Edit\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"tcForm.form.valid &&  onSubmit()\"  #tcForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Name</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.name\" name=\"name\" #name=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"tcForm.submitted && !name.valid\" class=\"alert alert-danger\">Test Center Name is required</div>\n                                        </div>\n                                    </div>\n\n                                                                        <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Address</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.address\" name=\"address\" #address=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"tcForm.submitted && !address.valid\" class=\"alert alert-danger\">Address is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">State</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"tc.myState\" name=\"state\"  #state=\"ngModel\"   required >\n                                                <option *ngFor=\"let state of states\" [value]=\"state.id\" [selected]=\"tc.myState== state.id\">{{state.name}}</option>\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"tcForm.submitted && !state.valid\" class=\"alert alert-danger\">State is required</div>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 1:</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.mobile1\" name=\"mobile1\" #mobile1=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"tcForm.submitted && !mobile1.valid\" class=\"alert alert-danger\">Mobile 1 is required</div>\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile 2</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                 <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"tc.mobile2\" name=\"mobile2\" #mobile2=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"tcForm.submitted && !mobile2.valid\" class=\"alert alert-danger\">Mobile 2 is required</div>\n                                        </div>\n                                    </div>\n\n                                    \n\n\n\n\n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                                        <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/test-centers.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let allergy of allergies\">\n   \t\t\t<div>{{allergy.name}}</div>\n </div> -->\n\n\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Test Centers\n                                <a class=\"\" href=\"#/new-tc\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by name\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchTC()\"/>\n                            </div>\n\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                           \n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let tc of test_centers\">\n                                            <td><a href=\"#/test-center/{{tc.id}}\">{{tc.name}}</a></td>\n                                           \n                                            <td>\n                                                <span><a href=\"#/test-center/edit/{{tc.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a (click)=\"deleteTC(tc)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                    \n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/user-detail.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> User Detail\n                            </div>\n                            <div class=\"card-block\">\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Mobile</div>\n                                   <div class=\"col-lg-4\">{{user.mobile}}</div>\n                               </div>\n\n\n                               <div class=\"row\">\n                                   <div class=\"col-lg-4\">Email </div>\n                                   <div class=\"col-lg-4\">{{user.email}}</div>\n                               </div>\n\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Role</div>\n                                   <div class=\"col-lg-4\">{{user.user_role_type}}</div>\n                               </div>\n\n                                 <div class=\"row\">\n                                   <div class=\"col-lg-4\">Is Active</div>\n                                   <div class=\"col-lg-4\">{{user.is_active}}</div>\n                               </div>\n\n\n\n                             \n                               \n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/user-edit.html":
/***/ (function(module, exports) {

module.exports = "\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            \n        </ol>\n\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                     <div class=\"col-lg-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-edit\"></i>Edit User\n                                <div class=\"card-actions\">\n                                    <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                                    <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                                    <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"card-block\">\n                                <form class=\"form-horizontal\" (ngSubmit)=\"userForm.form.valid &&  onSubmit()\"  #userForm=\"ngForm\" novalidate>\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Mobile</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"user.mobile\" name=\"mobile\" #mobile=\"ngModel\" required>\n                                            </div>\n                                            \n                                           <div *ngIf=\"userForm.submitted && !mobile.valid\" class=\"alert alert-danger\">Mobile Number is required</div>\n                                        </div>\n                                    </div>\n\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Email</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"text\"  \n                                                [(ngModel)]=\"user.email\" name=\"email\" #email=\"ngModel\" >\n                                            </div>\n                                            \n                                          \n                                        </div>\n                                    </div>\n\n<!-- \n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Password</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"password\"  \n                                                [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required validateEqual=\"confPassword\" reverse=\"true\">\n                                            </div>\n                                            \n                                           <div *ngIf=\"userForm.submitted && !password.valid\" class=\"alert alert-danger\">Password is required</div>\n                                        </div>\n                                    </div>\n\n                                     <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">Confirm Password</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <input id=\"\" class=\"form-control\" type=\"password\"  \n                                                [(ngModel)]=\"user.confPassword\" name=\"confPassword\" #confPassword=\"ngModel\" required validateEqual=\"password\">\n                                            </div>\n                                            \n                                            <div *ngIf=\"userForm.submitted && !confPassword.valid\" class=\"alert alert-danger\"> Password mismatch </div>\n                                        </div>\n                                    </div>\n\n -->\n\n\n\n\n\n                                    <div class=\"form-group row\">\n                                        <label class=\"form-control-label\" for=\"\">User Type</label>\n                                        <div class=\"controls\">\n                                            <div class=\"input-group\">\n                                                <select id=\"select\" class=\"form-control\"  [(ngModel)]=\"user.userType\" name=\"userType\"  #userType=\"ngModel\"   required >\n                                                <!-- <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}</option> -->\n                                                <option [selected]=\"user.user_type== 'AD'\" value=\"AD\">Admin</option>\n                                                <option  [selected]=\"user.user_type== 'SA'\" value=\"SA\">Sub-Admin</option>\n\n                                               \n                                            </select>\n                                            </div>\n                                            \n                                           <div *ngIf=\"userForm.submitted && !userType.valid\" class=\"alert alert-danger\">User Type is required</div>\n                                        </div>\n                                    </div>\n\n\n                                   \n                                    \n\n                                    <div class=\"form-actions\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Save </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/app/views/users.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let allergy of allergies\">\n   \t\t\t<div>{{allergy.name}}</div>\n </div> -->\n\n\n <header-component></header-component>\n<sidebar-component></sidebar-component>\n\n  <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">Home</li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Dashboard</li>\n\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" href=\"./\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n\n\n        <div class=\"container-fluid\">\n            <div class=\"animated fadeIn\">\n               \n                <!--/row-->\n\n              \n                <!--/row-->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-align-justify\"></i> Users\n                                <a class=\"\" href=\"#/new-user\"><i class=\"icon-pencil icons  \"></i></a>\n                            </div>\n\n                             <div class=\"card-header\">\n                               Search\n                                <input class=\"form-control\" type=\"text\"  placeholder=\"Search by mobile\" \n                                                [(ngModel)]=\"search\" (keyup)=\"searchUser()\"/>\n                            </div>\n\n\n                            <div class=\"card-block\">\n                                <table class=\"table table-bordered table-striped table-condensed\">\n                                    <thead>\n                                        <tr>\n                                            <th>Mobile</th>\n                                            <th>Email</th>\n                                             <th>User Type</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let user of users\">\n                                            <td><a href=\"#/user/{{user.id}}\">{{user.mobile}}</a></td>\n                                           <td>{{user.email}}</td>\n                                            <td>{{user.user_role_type}}</td>\n                                            <td>\n                                                <span><a href=\"#/user/edit/{{user.id}}\"><i class=\"icon-pencil icons\"></i></a></span> |\n                                                  <span><a (click)=\"deleteUser(user)\"><i class=\"icon-trash icons\"></i></a></span> \n                                            </td>\n                                        </tr>\n                                       \n                                      \n                                    </tbody>\n                                </table>\n                                <nav>\n                                    \n                                </nav>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/col-->\n                </div>\n                <!--/row-->\n            </div>\n\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n   \n\n    <footer-component></footer-component>"

/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map