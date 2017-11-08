webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proxy_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoipService = (function () {
    function VoipService(http, settingService) {
        this.http = http;
        this.settingService = settingService;
    }
    VoipService.prototype.reinit = function () {
        if (this.settingService.credential == null || this.settingService.credential.defaultDID == null
            || this.settingService.credential.defaultDID == "") {
            this.settingService.init();
        }
    };
    VoipService.prototype.sendMessage = function (message, destination) {
        this.reinit();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__proxy_service__["a" /* ProxyService */].VOIP_REST_URL + "api/v1/rest.php?api_username=" +
            this.settingService.credential.email + "&api_password=" +
            this.settingService.credential.password + "&method=sendSMS" +
            "&did=" + this.settingService.credential.defaultDID +
            "&dst=" + destination +
            "&message=" + message);
    };
    VoipService.prototype.getMessage = function (smsID, contactDID, lastDate) {
        this.reinit();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__proxy_service__["a" /* ProxyService */].VOIP_REST_URL + "api/v1/rest.php?api_username=" +
            this.settingService.credential.email + "&api_password=" +
            this.settingService.credential.password + "&method=getSMS" + "&did=" + this.settingService.credential.defaultDID +
            (contactDID == "" ? "" : "&contact=" + contactDID) +
            (lastDate == "" ? "" : "&from=" + lastDate) +
            (smsID == "" ? "" : "&sms=" + smsID));
    };
    return VoipService;
}());
VoipService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__setting_service__["a" /* SettingService */]])
], VoipService);

//# sourceMappingURL=voip-service.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_picker_contact_picker__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_chat_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_setting_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_voip_service__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessagesPage = (function () {
    function MessagesPage(navCtrl, modalCtrl, chatService, settingServ, voipService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.chatService = chatService;
        this.settingServ = settingServ;
        this.voipService = voipService;
    }
    MessagesPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    MessagesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.settingServ.credential == null || this.settingServ.credential.defaultDID == null) {
            this.settingServ.init();
            this.loading = true;
            this.subscriber = this.settingServ.credentialLoaded.subscribe(function (data) {
                _this.loadChats();
                _this.loading = false;
                _this.defaultDID = _this.settingServ.credential.defaultDID;
            });
        }
        else {
            this.loadChats();
            this.defaultDID = this.settingServ.credential.defaultDID;
        }
    };
    MessagesPage.prototype.loadChats = function () {
        var _this = this;
        this.chatService.getChatItemsFromStorage().then(function (data) { return _this.allChats = data; }, function (error) { return console.log(error); });
    };
    MessagesPage.prototype.onOpenSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    MessagesPage.prototype.onNewMessage = function () {
        var _this = this;
        var contactPickerModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__contact_picker_contact_picker__["a" /* ContactPickerPage */]);
        contactPickerModal.present();
        contactPickerModal.onDidDismiss(function (data) {
            if (data) {
                _this.chatService.addChatItem(data.contact);
                _this.allChats = _this.chatService.getChatItems();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], data.contact);
            }
        });
    };
    MessagesPage.prototype.delete = function (contact) {
        this.chatService.deleteSMSFromStorage(contact);
        for (var _i = 0, _a = this.allChats; _i < _a.length; _i++) {
            var chat = _a[_i];
            if (chat.title == contact) {
                this.allChats.splice(this.allChats.indexOf(chat), 1);
            }
        }
    };
    MessagesPage.prototype.onOpenChat = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], contact);
    };
    MessagesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.getAllDIDMessages(refresher);
        }, 1000);
    };
    MessagesPage.prototype.getAllDIDMessages = function (refresher) {
        var _this = this;
        var messageMap = new Map();
        this.voipService.getMessage("", "", "").subscribe(function (res) {
            console.log(res.json());
            var data = res.json();
            if (data.status == "no_sms") {
                refresher.complete();
                return;
            }
            else {
                for (var _i = 0, _a = data.sms; _i < _a.length; _i++) {
                    var sms = _a[_i];
                    if (messageMap.has(sms.contact)) {
                        messageMap.get(sms.contact).push(sms);
                    }
                    else {
                        messageMap.set(sms.contact, [sms]);
                    }
                }
                messageMap.forEach(function (smss, contact) {
                    if (smss != null && smss.length != 0 && smss[0].did == _this.settingServ.credential.defaultDID) {
                        _this.chatService.saveSMSstoStorage(contact, smss);
                    }
                });
                _this.loadChats();
                refresher.complete();
            }
        }, function (error2) {
            console.log(error2);
            refresher.complete();
        });
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/messages/messages.html"*/'<ion-header>\n<ion-toolbar>\n  <ion-buttons left>\n    <button ion-button icon-only (click)="onOpenSettings()">\n      <ion-icon name="ios-settings-outline"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-title text-center>SMS of {{defaultDID}}</ion-title>\n  <ion-buttons right>\n    <button ion-button icon-only (click)="onNewMessage()">\n      <ion-icon name="ios-add-circle-outline"></ion-icon>\n    </button>\n  </ion-buttons>\n\n</ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <p *ngIf="loading">Loading....</p>\n  <ion-list *ngIf="allChats?.size!=0">\n    <ion-item-sliding *ngFor="let chat of allChats;let i of index" #item>\n      <ion-item (click)="onOpenChat(chat.title)">\n        <!--<ion-avatar item-start>-->\n          <!--<img [src]="chat.img">-->\n        <!--</ion-avatar>-->\n        <h2>{{chat.title}}</h2>\n        <p>{{chat.message}}</p>\n        <ion-note>\n          {{chat.date}}\n        </ion-note>\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="delete(chat.title)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/messages/messages.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_6__services_setting_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_7__services_voip_service__["a" /* VoipService */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPickerPage = (function () {
    function ContactPickerPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ContactPickerPage.prototype.onSubmit = function (form) {
        this.viewCtrl.dismiss({ contact: form.value.contact });
    };
    ContactPickerPage.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    return ContactPickerPage;
}());
ContactPickerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact-picker',template:/*ion-inline-start:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/contact-picker/contact-picker.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>Pick A Contact</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onCancel()">\n        <ion-icon name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-6 col-lg-10 col-xl-12>\n        <ion-item>\n        <ion-label color="primary">TO:</ion-label>\n        <ion-input placeholder="enter contact" type="number" name="contact" required ngModel ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <button [disabled]="!f.valid" ion-button icon-only outline small type="submit">\n          <ion-icon name="ios-chatboxes-outline"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/contact-picker/contact-picker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], ContactPickerPage);

//# sourceMappingURL=contact-picker.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_sms__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_voip_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_setting_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, datepipe, chatService, voipService, plt, settingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datepipe = datepipe;
        this.chatService = chatService;
        this.voipService = voipService;
        this.plt = plt;
        this.settingService = settingService;
    }
    MessagePage.prototype.init = function () {
        var _this = this;
        this.contact = this.navParams.data;
        this.chatService.loadChatItems();
        this.defaultDID = this.settingService.credential.defaultDID;
        this.chatService.getSMSFromStorage(this.contact).then(function (data) {
            if (data == null)
                _this.smss = [];
            else
                _this.smss = data;
        }, function (error) {
            console.log(error);
        });
        console.log(this.contact);
    };
    MessagePage.prototype.ionViewWillEnter = function () {
        this.init();
        this.scrollToBottom();
    };
    MessagePage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        });
    };
    MessagePage.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        var newMsg = new __WEBPACK_IMPORTED_MODULE_3__model_sms__["a" /* SMS */]();
        newMsg.message = form.value.message;
        newMsg.date = "Sending...";
        newMsg.type = "0";
        var originalSMSs = this.smss.slice();
        var lastMsg = this.smss[this.smss.length - 1];
        var lastDateString = lastMsg.date;
        if (this.plt.is('ios')) {
            lastDateString = lastDateString.replace(' ', 'T');
        }
        var lastDate = Date.parse(lastDateString);
        var dividerMsg = new __WEBPACK_IMPORTED_MODULE_3__model_sms__["a" /* SMS */]();
        dividerMsg.message = this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');
        ;
        dividerMsg.date = this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');
        dividerMsg.type = "3";
        if (Date.now() - lastDate >= 360000) {
            originalSMSs.push(dividerMsg);
            this.smss.push(dividerMsg);
        }
        this.smss.push(newMsg);
        this.scrollToBottom();
        this.voipService.sendMessage(newMsg.message, this.contact).subscribe(function (res) {
            var data = res.json();
            console.log(data);
            _this.voipService.getMessage(data.sms, _this.contact, "").subscribe(function (response) {
                var data2 = response.json();
                if (data2.status == "success") {
                    console.log(data2);
                    originalSMSs.push(data2.sms[0]);
                    _this.smss = originalSMSs;
                    _this.chatService.saveSMSstoStorage(_this.contact, _this.smss);
                    _this.scrollToBottom();
                }
            }, function (error) {
                console.log(error);
                _this.smss = originalSMSs;
            });
        }, function (error) {
            console.log(error);
            _this.smss = originalSMSs;
        });
        form.reset();
    };
    MessagePage.prototype.getAllTodayMsgs = function (refresher) {
        var _this = this;
        this.voipService.getMessage("", this.contact, "").subscribe(function (response) {
            var data = response.json();
            if (data.status == "success") {
                console.log(data.sms);
                _this.smss = data.sms.reverse();
                var dividerMsg = new __WEBPACK_IMPORTED_MODULE_3__model_sms__["a" /* SMS */]();
                dividerMsg.message = _this.smss[_this.smss.length - 1].message;
                dividerMsg.date = _this.smss[_this.smss.length - 1].date;
                dividerMsg.type = "3";
                _this.smss.push(dividerMsg);
                _this.chatService.saveSMSstoStorage(_this.contact, _this.smss);
                _this.scrollToBottom();
            }
            refresher.complete();
        }, function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    MessagePage.prototype.getMessageAfterLastMessage = function (refresher) {
        var _this = this;
        var dividerAdded = false;
        var lastMsg = this.smss[this.smss.length - 1];
        var lastDateString = lastMsg.date;
        if (this.plt.is('ios')) {
            lastDateString = lastDateString.replace(' ', 'T');
        }
        var lastDate = Date.parse(lastDateString);
        this.voipService.getMessage("", this.contact, lastMsg.date).subscribe(function (response) {
            var data = response.json();
            if (data.status == "success") {
                console.log(data.sms);
                for (var _i = 0, _a = data.sms.reverse(); _i < _a.length; _i++) {
                    var msg = _a[_i];
                    var dateString = msg.date;
                    if (_this.plt.is('ios')) {
                        dateString = dateString.replace(' ', 'T');
                    }
                    var msgDate = Date.parse(dateString);
                    console.log("msg date =" + msgDate + " lastDate = " + lastDate);
                    if (msgDate >= lastDate && (lastMsg.message != msg.message || lastMsg.type != msg.type)) {
                        if (!dividerAdded && msgDate - lastDate >= 360000) {
                            var dividerMsg = new __WEBPACK_IMPORTED_MODULE_3__model_sms__["a" /* SMS */]();
                            dividerMsg.message = msg.message;
                            dividerMsg.date = _this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');
                            dividerMsg.type = "3";
                            _this.smss.push(dividerMsg);
                            dividerAdded = true;
                        }
                        _this.smss.push(msg);
                    }
                }
                console.log(_this.smss);
                _this.chatService.saveSMSstoStorage(_this.contact, _this.smss);
                _this.scrollToBottom();
            }
            refresher.complete();
        }, function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    MessagePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            if (_this.smss.length == 0) {
                _this.getAllTodayMsgs(refresher);
            }
            else {
                _this.getMessageAfterLastMessage(refresher);
            }
        }, 1000);
    };
    return MessagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], MessagePage.prototype, "content", void 0);
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-navbar>\n      <ion-title>{{contact}}\n        <p class="subtitle">DID: {{defaultDID}}</p>\n      </ion-title>\n    </ion-navbar>\n    <!--<ion-title>{{contact}} DID: {{defaultDID}}</ion-title>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding #content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <div *ngFor="let sms of smss" class="chatContainer">\n      <div class="chatwrapper" *ngIf="sms.type === \'0\'" style="float: right">\n        <div class="chatbox" *ngIf="sms.type === \'0\'" text-left style="background-color: #007ae8; float: right; color: white">\n          {{sms.message}}\n        </div>\n        <div class="rightTail"></div>\n      </div>\n      <div class="chatwrapper" *ngIf="sms.type === \'1\'" style="float: left" >\n        <div class="chatbox" *ngIf="sms.type === \'1\'" text-left style="background-color: #e8e8e8; float: left">\n          {{sms.message}}\n        </div>\n        <div class="leftTail"></div>\n      </div>\n\n      <div class="chatbox" *ngIf="sms.type === \'3\'" text-center style="width: 100%">\n        {{sms.date}}\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-sm-6 col-lg-10 col-xl-12>\n          <ion-item>\n            <ion-textarea placeholder="Text message" type="text" name="message" #message required\n                          ngModel></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1>\n          <button [disabled]="!f.valid" ion-button icon-only outline small type="submit">\n            <ion-icon name="ios-send-outline"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-footer>\n'/*ion-inline-end:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/message/message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_5__services_voip_service__["a" /* VoipService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__services_setting_service__["a" /* SettingService */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyService; });
var ProxyService = (function () {
    function ProxyService() {
    }
    return ProxyService;
}());

ProxyService.VOIP_REST_URL = ""; // "https://voip.ms/"
//# sourceMappingURL=proxy-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_credential__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, settingService, chatServ, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingService = settingService;
        this.chatServ = chatServ;
        this.alertCtrl = alertCtrl;
        this.email = "";
        this.password = "";
        this.listOfDids = [];
        this.credential = new __WEBPACK_IMPORTED_MODULE_3__model_credential__["a" /* Credential */](this.email, this.password, this.defaultDID, this.listOfDids);
        if (this.settingService.useUnsecuredStorage) {
            this.settingService.getCrendetialUnsecured().then(function (data) {
                if (data != null) {
                    _this.credential = data;
                    _this.email = _this.credential.email;
                    _this.password = _this.credential.password;
                    _this.listOfDids = _this.credential.DIDs;
                    _this.defaultDID = _this.credential.defaultDID;
                }
            });
        }
        else {
            this.settingService.getCredentialSecured().then(function (data) {
                if (data != null) {
                    _this.credential = JSON.parse(data);
                    _this.email = _this.credential.email;
                    _this.password = _this.credential.password;
                    _this.listOfDids = _this.credential.DIDs;
                    _this.defaultDID = _this.credential.defaultDID;
                }
            });
        }
    }
    SettingsPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.email = form.value.email;
        this.password = form.value.password;
        console.log(form);
        this.settingService.refreshDIDs(this.email, this.password).subscribe(function (data) {
            console.log(JSON.stringify(data.json()));
            if (data.json().status != 'success') {
                var alert = _this.alertCtrl.create({
                    title: 'Login Error',
                    message: ' Server deined logon due to ' + data.json().status,
                    buttons: [{
                            text: 'Ok'
                        }]
                });
                alert.present();
            }
            else {
                _this.listOfDids = [];
                for (var _i = 0, _a = data.json().dids; _i < _a.length; _i++) {
                    var did = _a[_i];
                    console.log(did);
                    if (did.sms_available == 1 && did.sms_enabled == 1) {
                        _this.listOfDids.push(did.did);
                    }
                }
                _this.credential = new __WEBPACK_IMPORTED_MODULE_3__model_credential__["a" /* Credential */](_this.email, _this.password, _this.defaultDID, _this.listOfDids);
                _this.settingService.storeCredential(_this.credential);
            }
        }, function (error) { return console.log(error); });
    };
    SettingsPage.prototype.onSelectDID = function (event) {
        console.log("event is " + event);
        console.log("default is " + this.defaultDID);
        this.credential.defaultDID = this.defaultDID;
        this.settingService.storeCredential(this.credential);
        console.log("changing chat items");
        this.chatServ.loadChatItems();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">E-mail</ion-label>\n            <ion-input placeholder="VOIP.ms email address" type="text" name="email" required email [ngModel]="email"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Password</ion-label>\n            <ion-input placeholder="VOIP.ms API password" type="password" name="password" required [ngModel]="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button [disabled]="!f.valid" ion-button outline block type="submit">\n            Refresh DIDs\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-item >\n    <ion-label>Default DID</ion-label>\n    <ion-select [(ngModel)]="defaultDID" okText="Select" cancelText="Dismiss" (ngModelChange)="onSelectDID($event)">\n      <ion-option *ngFor="let did of listOfDids; let i of index"  [value]="did">{{did}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], SettingsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_messages_messages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_picker_contact_picker__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_message_message__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_secure_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_setting_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_chat_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_voip_service__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function provideStorage() {
    return new __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* Storage */](['sqlite', 'websql', 'indexeddb']);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_picker_contact_picker__["a" /* ContactPickerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_picker_contact_picker__["a" /* ContactPickerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* Storage */], useFactory: provideStorage },
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_secure_storage__["a" /* SecureStorage */],
            __WEBPACK_IMPORTED_MODULE_10__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_10__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["c" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_16__services_voip_service__["a" /* VoipService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_messages_messages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_setting_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_chat_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, settingService, chatService) {
        var _this = this;
        this.settingService = settingService;
        this.chatService = chatService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_messages_messages__["a" /* MessagesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.settingService.init();
            _this.chatService.loadChatItems();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/krisc/development/projects/smsvoip.ms.ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_setting_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMS; });
var SMS = (function () {
    function SMS() {
    }
    return SMS;
}());

//# sourceMappingURL=sms.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatItem; });
var ChatItem = (function () {
    function ChatItem(title, message, date) {
        this.title = title;
        this.message = message;
        this.date = date;
    }
    return ChatItem;
}());

//# sourceMappingURL=chat-item.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credential; });
var Credential = (function () {
    function Credential(email, password, defaultDID, DIDs) {
        this.email = email;
        this.password = password;
        this.defaultDID = defaultDID;
        this.DIDs = DIDs;
    }
    return Credential;
}());

//# sourceMappingURL=credential.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proxy_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingService = (function () {
    function SettingService(storage, unsecureStorage, http) {
        this.storage = storage;
        this.unsecureStorage = unsecureStorage;
        this.http = http;
        this.useUnsecuredStorage = false;
        this.credentialLoaded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    SettingService.prototype.init = function () {
        var _this = this;
        this.storage.create("settings").then(function (sso) {
            console.log("storage created");
            _this.sso = sso;
            _this.getCredentialSecured().then(function (data) {
                if (data != null) {
                    _this.credential = JSON.parse(data);
                    _this.credentialLoaded.next(true);
                }
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            console.log(error);
            _this.useUnsecuredStorage = true;
            _this.getCrendetialUnsecured().then(function (data) {
                if (data != null) {
                    _this.credential = data;
                    _this.credentialLoaded.next(true);
                }
            });
        });
    };
    SettingService.prototype.storeCredential = function (credential) {
        this.credential = credential;
        if (this.useUnsecuredStorage) {
            this.unsecureStorage.set("credential", credential);
        }
        else {
            this.sso.set("credential", JSON.stringify(credential));
        }
    };
    SettingService.prototype.getCredentialSecured = function () {
        return this.sso.get("credential");
    };
    SettingService.prototype.getCrendetialUnsecured = function () {
        return this.unsecureStorage.get("credential");
    };
    SettingService.prototype.refreshDIDs = function (email, password) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__proxy_service__["a" /* ProxyService */].VOIP_REST_URL + "api/v1/rest.php?api_username=" + email + "&api_password=" + password + "&method=getDIDsInfo");
    };
    return SettingService;
}());
SettingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__["a" /* SecureStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], SettingService);

//# sourceMappingURL=setting-service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_chat_item__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function () {
    function ChatService(storage, datepipe, settingService) {
        this.storage = storage;
        this.datepipe = datepipe;
        this.settingService = settingService;
        this.CHATITEM_KEY = "chatItems-";
        this.PHONENUMBER_KEY = "phoneNumbers-";
        this.phoneNumbers = [];
        this.chatItems = [];
    }
    ChatService.prototype.ngOnInit = function () {
        this.phoneNumbers = [];
        this.chatItems = [];
    };
    ChatService.prototype.loadChatItems = function () {
        var _this = this;
        console.log(this.settingService.credential);
        this.chatItems = [];
        if (this.settingService.credential != null && this.settingService.credential.defaultDID != null) {
            this.storage.get(this.CHATITEM_KEY + this.settingService.credential.defaultDID).then(function (data) {
                if (data != null) {
                    console.log(data);
                    console.log("chat item changed");
                    _this.chatItems = data;
                }
            }, function (error) {
                console.log(error);
            });
            this.storage.get(this.PHONENUMBER_KEY + this.settingService.credential.defaultDID).then(function (data) {
                if (data != null) {
                    _this.phoneNumbers = data;
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ChatService.prototype.addChatItem = function (title) {
        if (this.phoneNumbers.indexOf(title) != -1)
            return;
        this.phoneNumbers.push(title);
        this.chatItems.push(new __WEBPACK_IMPORTED_MODULE_3__model_chat_item__["a" /* ChatItem */](title, "", this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss')));
        this.storeChatItems();
        this.storePhoneNumber();
    };
    ChatService.prototype.storeChatItems = function () {
        this.storage.set(this.CHATITEM_KEY + this.settingService.credential.defaultDID, this.chatItems).then(function (data) {
            console.log("chat item stored successfully");
            //console.log(data);
        }, function (error) { return console.log(error); });
    };
    ChatService.prototype.storePhoneNumber = function () {
        this.storage.set(this.PHONENUMBER_KEY + this.settingService.credential.defaultDID, this.phoneNumbers).then(function (data) {
            console.log("phone numebr stored successfully");
            //console.log(data);
        }, function (error) { return console.log(error); });
    };
    ChatService.prototype.getChatItems = function () {
        //console.log(this.chatItems);
        return this.chatItems.slice();
    };
    ChatService.prototype.getChatItemsFromStorage = function () {
        return this.storage.get(this.CHATITEM_KEY + this.settingService.credential.defaultDID);
    };
    ChatService.prototype.saveSMSstoStorage = function (contact, smss) {
        console.log("what is the contact", contact);
        var index = this.phoneNumbers.indexOf(contact);
        console.log("what is index ? = " + index);
        console.log("what is phonenumbers  ? = " + JSON.stringify(this.phoneNumbers));
        if (index != -1) {
            console.log("saving SMS");
            var lastIndexSMS = smss.length - 1;
            this.chatItems[index] = new __WEBPACK_IMPORTED_MODULE_3__model_chat_item__["a" /* ChatItem */](contact, smss[lastIndexSMS].message, smss[lastIndexSMS].date);
            this.storage.set(contact, smss);
            this.storeChatItems();
            this.storePhoneNumber();
        }
        else {
            this.phoneNumbers.push(contact);
            console.log("saving SMS");
            var lastIndexSMS = smss.length - 1;
            this.chatItems.push(new __WEBPACK_IMPORTED_MODULE_3__model_chat_item__["a" /* ChatItem */](contact, smss[lastIndexSMS].message, smss[lastIndexSMS].date));
            this.storage.set(contact, smss);
            this.storeChatItems();
            this.storePhoneNumber();
        }
    };
    ChatService.prototype.getSMSFromStorage = function (contact) {
        return this.storage.get(contact);
    };
    ChatService.prototype.deleteSMSFromStorage = function (contact) {
        this.storage.remove(contact);
        for (var _i = 0, _a = this.chatItems; _i < _a.length; _i++) {
            var chat = _a[_i];
            if (chat.title == contact) {
                this.chatItems.splice(this.chatItems.indexOf(chat), 1);
            }
        }
        for (var _b = 0, _c = this.phoneNumbers; _b < _c.length; _b++) {
            var num = _c[_b];
            if (num == contact) {
                this.phoneNumbers.splice(this.phoneNumbers.indexOf(num), 1);
            }
        }
        this.storePhoneNumber();
        this.storeChatItems();
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__setting_service__["a" /* SettingService */]) === "function" && _c || Object])
], ChatService);

var _a, _b, _c;
//# sourceMappingURL=chat-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map