webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorPageModule", function() { return AdministradorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrador__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdministradorPageModule = (function () {
    function AdministradorPageModule() {
    }
    AdministradorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__administrador__["a" /* AdministradorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__administrador__["a" /* AdministradorPage */]),
            ],
        })
    ], AdministradorPageModule);
    return AdministradorPageModule;
}());

//# sourceMappingURL=administrador.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pessoa_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdministradorPage = (function () {
    function AdministradorPage(navCtrl, navParams, pessoaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pessoaService = pessoaService;
    }
    AdministradorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var usuario = { idPessoa: '0', login: '', senha: '', tipo: '' };
        this.pessoaService.getPessoaInfo(usuario).subscribe(function (response) {
            _this.items = response;
            // this.pessoa = response[0];
            // this.nome = this.pessoa.nome;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    AdministradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrador',template:/*ion-inline-start:"C:\ws-ionic\Projeto Usuário\ionic\curso-spring-ionic-frontend\src\pages\administrador\administrador.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Administrador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-item *ngFor="let item of items">\n    <ion-thumbnail item-left>\n      <img src="../../assets/imgs/avatar.png">\n    </ion-thumbnail>\n    <h2>{{item.nome}}</h2> - <h3>Tel. {{item.telefone}}</h3>\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\ws-ionic\Projeto Usuário\ionic\curso-spring-ionic-frontend\src\pages\administrador\administrador.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_pessoa_service__["a" /* PessoaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pessoa_service__["a" /* PessoaService */]) === "function" && _c || Object])
    ], AdministradorPage);
    return AdministradorPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=administrador.js.map

/***/ })

});
//# sourceMappingURL=2.js.map