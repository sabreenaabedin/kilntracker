webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__additem_additem__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http
            .get("http://localhost:3000/ceramics")
            .subscribe(function (result) {
            console.log("/ceramics response: " + result);
            var list = result.json();
            _this.ceramics = list;
        }, function (error) {
            console.log(error);
        });
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
    };
    ListPage.prototype.itemTapped = function (event, ceramic) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            ceramic: ceramic
        });
    };
    ListPage.prototype.addNewItem = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__additem_additem__["a" /* AdditemPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addNewItem($event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <button ion-item *ngFor="let ceramic of ceramics" (click)="itemTapped($event, ceramic)">\n      <ion-thumbnail item-start>\n        <img src="../../assets/imgs/pottery 2.png" padding>\n      </ion-thumbnail>\n      {{ceramic.name}}\n      <div class="item-note" item-end>\n        {{ceramic.id}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bcryptjs__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bcryptjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var foundUser;
        if (this.validPassword() && this.validUsername()) {
            this.http
                .get("http://localhost:3000/users/" + this.email)
                .subscribe(function (result) {
                console.log("/user response: " + result);
                foundUser = result.json();
                if (__WEBPACK_IMPORTED_MODULE_5_bcryptjs__["compare"](_this.password, foundUser.password)) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
                }
                else {
                    alert("Login information is incorrect");
                }
            }, function (error) {
                console.log(error);
                alert("Login information incorrect");
            });
        }
    };
    LoginPage.prototype.validPassword = function () {
        var isValid = false;
        if (!this.password) {
            alert("Please enter a password");
        }
        else {
            isValid = true;
        }
        return isValid;
    };
    ;
    LoginPage.prototype.validUsername = function () {
        var isValid = false;
        if (!this.email) {
            alert("Please enter an email address");
        }
        else if (!(this.email.includes("@") && this.email.includes("."))) {
            alert("Please enter a valid email address");
        }
        else {
            isValid = true;
        }
        return isValid;
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.forgotPassword = function () {
        alert("oops");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label  floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n     <button ion-button (click)="login()" full> Login </button>\n  <ion-list no-lines>\n    <ion-item text-center>\n      <a (click)="register()">Don\'t have an account?</a>\n    </ion-item>\n    <ion-item text-center text-sm>\n      <a (click)="forgotPassword()">Forgot Password?</a>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 245;

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ceramic__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// //import '~bootstrap/dist/css/bootstrap.min.css';
// import { map } from 'rxjs/operators/map';
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, afStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afStorage = afStorage;
        this.ceramic = new __WEBPACK_IMPORTED_MODULE_2__models_ceramic__["a" /* Ceramic */]();
        this.ceramic = this.navParams.get("ceramic");
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.getURL = function () {
        var _this = this;
        // this.ref.getDownloadURL().then(dl => { this.downloadURL = dl;});
        this.task.snapshotChanges().subscribe(function (result) {
            result.ref.getDownloadURL().then(function (dl) {
                _this.downloadURL = dl;
                console.log(_this.downloadURL);
            });
        });
        alert("url? " + this.downloadURL);
    };
    DetailPage.prototype.upload = function (event) {
        if (!event.target.files)
            return;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
    };
    DetailPage.prototype.save = function () {
        alert("write this function");
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ceramic.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <div>\n        <h5>Select a file for upload:</h5>\n        <input type="file" (change)="upload($event)" accept=".png,.jpg" />\n      </div>\n      <div>\n        <progress max="100" [value]="(uploadProgress | async)"></progress>\n      </div>\n      <div>\n        <button ion-button (click)="task.pause()">Pause</button>\n        <button ion-button (click)="task.cancel()">Cancel</button>\n        <button ion-button (click)="task.resume()">Resume</button>\n      </div>\n    </ion-item>\n    <ion-item>\n        <button ion-button (click)="getURL()">get URL</button>\n      File upload here:\n      <!-- <div *ngIf="downloadURL | async; let downloadSrc"> -->\n        <div *ngIf="downloadURL">\n        File uploaded:\n        <a [href]="downloadSrc">{{downloadSrc}}</a>\n      </div>\n    </ion-item>\n    <ion-item>\n      {{ceramic.id}}\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="{{ceramic.name}}" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <!-- <ion-item >\n      <ion-slides>\n        <ion-slide *ngFor="let slide of slides">\n          <h1>Slide 1</h1>\n          <img src="gs://kiln-6c7af.appspot.com/z7s3mijloxc">\n        </ion-slide>\n        <ion-slide *ngFor="let slide of slides">\n            <h1>Slide 1</h1>\n            <img src="https://firebasestorage.googleapis.com/v0/b/kiln-6c7af.appspot.com/o/z7s3mijloxc?alt=media&token=2b59d148-761c-49f0-a267-42697f20a64b">\n          </ion-slide>\n      </ion-slides>\n    </ion-item> -->\n    <ion-item>\n      <ion-label>Tracking</ion-label>\n      <ion-select [(ngModel)]="location" multiple="false" cancelText="Cancel" okText="Select">\n        <ion-option value="Bisque">Bisque</ion-option>\n        <ion-option value="Glaze">Glaze</ion-option>\n        <ion-option value="Greenware" selected="true">Greenware</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Glaze</ion-label>\n      <ion-select [(ngModel)]="glaze" multiple="true" cancelText="Cancel" okText="Select">\n        <ion-option value="Black">Black</ion-option>\n        <ion-option value="White">White</ion-option>\n        <ion-option value="Matte Blue">Matte Blue</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      {{glaze}}\n    </ion-item>\n    <ion-item>\n      Weight\n    </ion-item>\n    <ion-item>\n      Height\n    </ion-item>\n    <ion-item>\n      Description\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="save()">Save</button>\n</ion-content>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdditemPage = /** @class */ (function () {
    function AdditemPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    AdditemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditemPage');
    };
    AdditemPage.prototype.save = function () {
        var _this = this;
        this.http
            .post("http://localhost:3000/ceramics", {
            id: this.id,
            name: this.name,
            tracking: this.tracking,
            glaze: this.glaze,
            weight: this.weight,
            height: this.height,
            description: this.description,
            photo: ""
        })
            .subscribe(function (result) {
            console.log("/ceramics response: " + result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
        }, function (error) {
            console.log(error);
            alert("Something went wrong");
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
    };
    AdditemPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
    };
    AdditemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-additem',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/additem/additem.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Entry</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="id" [(ngModel)]="id"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="name" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tracking</ion-label>\n      <ion-select [(ngModel)]="location" multiple="false" cancelText="Cancel" okText="Select">\n        <ion-option value="Bisque">Bisque</ion-option>\n        <ion-option value="Glaze">Glaze</ion-option>\n        <ion-option value="Greenware" selected="true">Greenware</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Glaze</ion-label>\n      <ion-select [(ngModel)]="glaze" multiple="true" cancelText="Cancel" okText="Select">\n        <ion-option value="Black">Black</ion-option>\n        <ion-option value="White">White</ion-option>\n        <ion-option value="Matte Blue">Matte Blue</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="weight" [(ngModel)]="weight"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="height" [(ngModel)]="height"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="description" [(ngModel)]="description"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="save()">Save</button>\n  <button ion-button full (click)="cancel()">Cancel</button>\n</ion-content>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/additem/additem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AdditemPage);
    return AdditemPage;
}());

//# sourceMappingURL=additem.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bcryptjs__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bcryptjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.email = "";
        this.password = "";
        this.confirmpassword = "";
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUser = function () {
        // MAKE SURE USER ISN'T ALREADY REGISTERED
        var _this = this;
        if (this.validPassword() && this.validUsername()) {
            var newPassword = this.hashPassword();
            this.http
                .post("http://localhost:3000/register", {
                email: this.email,
                password: newPassword
            })
                .subscribe(function (result) {
                console.log("/user response: " + result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }, function (error) {
                console.log(error);
                alert("User already exists");
            });
        }
        else {
            alert("invalid username or password");
        }
    };
    RegisterPage.prototype.hashPassword = function () {
        var salt = __WEBPACK_IMPORTED_MODULE_4_bcryptjs__["genSaltSync"](10);
        return __WEBPACK_IMPORTED_MODULE_4_bcryptjs__["hashSync"](this.password, salt);
    };
    RegisterPage.prototype.validPassword = function () {
        var isValid = false;
        if (!(this.password || this.confirmpassword)) {
            alert("Please enter a password");
        }
        else if (this.password != this.confirmpassword) {
            alert("Make sure your password matches");
        }
        else {
            isValid = true;
        }
        return isValid;
    };
    ;
    RegisterPage.prototype.validUsername = function () {
        var isValid = false;
        if (!this.email) {
            alert("Please enter an email address");
        }
        else if (!(this.email.includes("@") && this.email.includes("."))) {
            alert("Please enter a valid email address");
        }
        else {
            isValid = true;
        }
        return isValid;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmpassword"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="light" (click)="registerUser()">Sign Up</button>\n</ion-content>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n        Change Username\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, viewCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        // this.splashScreen.hide();
        var _this = this;
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 2000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/splash/splash.html"*/'\n<ion-content>\n \n    <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n      Logo HERE\n        <!-- <defs>\n            <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n        </defs>\n        <title>jmlogo</title>\n        <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n        <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n        <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n        <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n        <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n        <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/> -->\n    </svg>\n \n</ion-content>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_additem_additem__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_splash_splash__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_additem_additem__["a" /* AdditemPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_splash__["a" /* SplashPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyDyFpG8s2QDgVh2UMIZJGCGmpmhLH9rebM",
                    authDomain: "kiln-6c7af.firebaseapp.com",
                    storageBucket: "kiln-6c7af.appspot.com",
                    projectId: "kiln-6c7af",
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_additem_additem__["a" /* AdditemPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_splash__["a" /* SplashPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp(modalCtrl);
        this.pages = [
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function (modalCtrl) {
        var _this = this;
        this.platform.ready().then(function () {
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/sabreenaabedin/Desktop/code/kiln/kilntracker/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ceramic; });
var Ceramic = /** @class */ (function () {
    function Ceramic() {
    }
    return Ceramic;
}());

//# sourceMappingURL=ceramic.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[429]);
//# sourceMappingURL=main.js.map