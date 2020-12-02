webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsuariosPageModule = (function () {
    function UsuariosPageModule() {
    }
    UsuariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuarios__["a" /* UsuariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuarios__["a" /* UsuariosPage */]),
            ],
        })
    ], UsuariosPageModule);
    return UsuariosPageModule;
}());

//# sourceMappingURL=usuarios.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pessoa_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosPage = (function () {
    function UsuariosPage(navCtrl, navParams, pessoaService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pessoaService = pessoaService;
        this.storage = storage;
    }
    UsuariosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.usuario = this.storage.getUsuario();
        this.pessoaService.getPessoaInfo(this.usuario).subscribe(function (response) {
            _this.items = response;
            _this.pessoa = response[0];
            _this.nome = _this.pessoa.nome;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarios',template:/*ion-inline-start:"C:\ws-ionic\Projeto Usuário\ionic\curso-spring-ionic-frontend\src\pages\usuarios\usuarios.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Usuarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img  [src]="\'assets/imgs/user.jpg\'"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{nome}}\n        </ion-card-title>\n        <button ion-item *ngFor="let item of items" >\n          <ion-thumbnail item-left>\n            <img src="assets/imgs/telefone.png">\n          </ion-thumbnail>\n          <h2>{{item.telefone}}</h2>\n        </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ws-ionic\Projeto Usuário\ionic\curso-spring-ionic-frontend\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_pessoa_service__["a" /* PessoaService */],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ })

});
//# sourceMappingURL=0.js.map