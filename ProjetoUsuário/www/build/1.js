webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(202);
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




var HomePage = (function () {
    function HomePage(navCtrl, usuarioService, alertController, storage) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.storage = storage;
    }
    HomePage.prototype.login = function () {
        var _this = this;
        if (this.email === undefined || this.senha === undefined || this.email.length == 0 || this.senha.length == 0) {
            this.presentAlert("Digite o email e a senha!");
        }
        else {
            this.usuario = { idPessoa: '', login: this.email, senha: this.senha, tipo: '' };
            this.usuarioService.login(this.usuario).subscribe(function (response) {
                //console.log(response);
                if (response.hasOwnProperty('erro')) {
                    _this.presentAlert("Erro ao logar:" + response.erro);
                }
                else {
                    _this.usuario = response;
                    _this.storage.setUsuario(_this.usuario);
                    if (_this.usuario.tipo == 'comum') {
                        _this.presentAlert("Seja bem vindo, seu perfil é comum!");
                        _this.navCtrl.setRoot('UsuariosPage');
                    }
                    else {
                        _this.presentAlert("Seja bem vindo, seu perfil é adm!");
                        _this.navCtrl.setRoot('AdministradorPage');
                    }
                }
            }, function (error) {
                _this.presentAlert("Erro ao logar:" + error);
            });
        }
    };
    HomePage.prototype.presentAlert = function (messagem) {
        var alert = this.alertController.create({
            title: 'Aviso',
            subTitle: messagem,
            buttons: ['ok']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ws-ionic\Projeto Usuário\ionic\curso-spring-ionic-frontend\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n  <h3>Sistema de pedidos</h3>\n\n  <img src="assets/imgs/tela-inicial.png" alt="logo" >\n\n\n\n  <form>\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="email" name="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Senha</ion-label>\n\n        <ion-input type="password" [(ngModel)]="senha" name="senha"></ion-input>\n\n      </ion-item>\n\n        <button ion-button block (click)="login()">Entrar</button>\n\n        <button ion-button block outline>Registrar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ws-ionic\Projeto Usuário\ionic\curso-spring-ionic-frontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map