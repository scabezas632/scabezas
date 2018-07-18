(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- |======================================== -->\n<!-- |=============== NAVBAR ================= -->\n<!-- |======================================== -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" id=\"navbar-top\">{{ title }}</a>\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                Menu\n            <i class=\"fa fa-bars\"></i>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#about\">Sobre Mi</a> -->\n                    <a class=\"nav-link\" id=\"navbar-about\">Sobre Mi</a>\n                </li>\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#conocimientos\">Conocimientos</a> -->\n                    <a class=\"nav-link\" id=\"navbar-conocimientos\">Conocimientos</a>\n                </li>\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#contact\">Contacto</a> -->\n                    <a class=\"nav-link\" id=\"navbar-contact\">Contacto</a>\n                </li>\n                <div class=\"verticalLine\">\n                    <div class=\"navbar-icons\">\n                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/scabezas632/\"><i class=\"fa fa-linkedin\"></i></a>\n                        <a target=\"_blank\" href=\"https://github.com/scabezas632\"><i class=\"fa fa-github\"></i></a>\n                    </div>\n                </div>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<!-- |======================================== -->\n<!-- |=============== HEADER ================= -->\n<!-- |======================================== -->\n<header class=\"masthead\" id=\"header\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100\">\n            <div class=\"col-lg-7 my-auto\">\n                <div class=\"header-content mx-auto\">\n                    <h1 class=\"mb-5\">Desarrollador {{ headerTitle }}</h1>\n                    <a href=\"#about\" class=\"btn btn-outline btn-xl btn-left\">¡Conóceme!</a>\n                    <a href=\"https://drive.google.com/uc?export=download&id=1EDSue5ihYgxlHU8Hh7Fikkjw86JwdzTg\" class=\"btn btn-outline btn-xl btn-right\">¡Descarga mi CV!</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n\n<!-- |======================================== -->\n<!-- |=============== ABOUT ================== -->\n<!-- |======================================== -->\n\n<section class=\"about bg-primary\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"section-heading text-center\">\n            <h2>Sobre Mí</h2>\n            <hr>\n        </div>\n        <div class=\"contenedor-principal\">\n            <div class=\"foto\">\n                <div class=\"avatar\">\n                    <img src=\"assets/img/foto.jpg\" alt=\"\" class=\"avatar\">\n                </div>\n            </div>\n            <div class=\"contenido\">\n                <h3>Soy Samuel Cabezas</h3>\n\n                <p>Me considero un apasionado por el desarrollo Front-End, en el cuál dedico mi tiempo libre, aumentando mis conocimientos en Angular, Ionic 2+ y CSS3.</p>\n                <p>Entre mis hobbies están ir al gimnasio y jugar videojuegos.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!-- |======================================== -->\n<!-- |=============== SKILLS ================= -->\n<!-- |======================================== -->\n<section class=\"conocimientos\" id=\"conocimientos\">\n    <div class=\"container\">\n        <div class=\"section-heading text-center\">\n            <h2>Conocimientos</h2>\n            <hr>\n        </div>\n        <div class=\"contenedor-principal\">\n            <div class=\"contenedor-card\">\n                <img src=\"assets/img/angular-logo.png\">\n                <div class=\"info\">\n                    <h3>Angular</h3>\n                    <p class=\"descripcion\">Desarrollo web mediante Angular Framework.</p>\n                </div>\n            </div>\n            <div class=\"contenedor-card\">\n                <img src=\"assets/img/ionic-logo.png\">\n                <div class=\"info\">\n                    <h3>Ionic</h3>\n                    <p class=\"descripcion\">Desarrollo móvil hibrido mediante Ionic Framework.</p>\n                </div>\n            </div>\n            <div class=\"contenedor-card\">\n                <img src=\"assets/img/html-css-logo.png\">\n                <div class=\"info\">\n                    <h3>Diseño</h3>\n                    <p class=\"descripcion\">Diseño web/movil mediante CSS y/o Bootstrap.</p>\n                </div>\n            </div>\n            <div class=\"contenedor-card\">\n                <img src=\"assets/img/nodejs-logo.png\">\n                <div class=\"info\">\n                    <h3>NodeJS</h3>\n                    <p class=\"descripcion\">Desarrollo de Back-End mediante NodeJS y Express.</p>\n                </div>\n            </div>\n            <div class=\"contenedor-card\">\n                <img src=\"assets/img/db-logo.png\">\n                <div class=\"info\">\n                    <h3>Base de Datos</h3>\n                    <p class=\"descripcion\">Almacenamiento de información mediante base de datos relacional y no relacional.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- |======================================== -->\n<!-- |============== CONTACT ================= -->\n<!-- |======================================== -->\n<footer id=\"contact\">\n    <div class=\"container\">\n        <div class=\"contact-heading text-center\">\n            <h2>Contáctame</h2>\n            <hr>\n        </div>\n        <div class=\"contenedor-principal\">\n            <div class=\"phone\">\n                <i class=\"fa fa-phone\"></i>\n                <p>+569 8676 8313</p>\n            </div>\n            <div class=\"mail\">\n                <i class=\"fa fa-envelope\"></i>\n                <p><a href=\"mailto:samuel.cabezas.632@gmail.com\">samuel.cabezas.632@gmail.com</a></p>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(myElement) {
        this.myElement = myElement;
        this.title = 'SCABEZAS';
        this.headerTitle = ' FrontEnd Web y Móvil';
        this.headerSwitch = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Cambio de titulo
        setInterval(function () {
            if (_this.headerSwitch === false) {
                _this.headerTitle = ' FrontEnd Web y Móvil';
            }
            else {
                _this.headerTitle = ' BackEnd con NodeJS y MongoDB';
            }
            _this.headerSwitch = !_this.headerSwitch;
        }, 3000);
        // Scroll automatico
        document.getElementById('navbar-top').onclick = function () {
            document.getElementById('page-top').scrollIntoView({ behavior: 'smooth' });
        };
        document.getElementById('navbar-about').onclick = function () {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        };
        document.getElementById('navbar-conocimientos').onclick = function () {
            document.getElementById('conocimientos').scrollIntoView({ behavior: 'smooth' });
        };
        document.getElementById('navbar-contact').onclick = function () {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        };
    };
    // Cambio el estilo del navbar al hacer scroll
    AppComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 200) {
            document.getElementById('mainNav').classList.add('navbar-shrink');
        }
        else {
            document.getElementById('mainNav').classList.remove('navbar-shrink');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\Users\samue\Documents\GitHub\scabezas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map