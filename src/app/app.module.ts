import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {MessagesPage} from "../pages/messages/messages";
import {ContactPickerPage} from "../pages/contact-picker/contact-picker";
import {MessagePage} from "../pages/message/message";
import {SecureStorage} from "@ionic-native/secure-storage";
import {SettingService} from "../services/setting-service";
import {SettingsPage} from "../pages/settings/settings";
import {HttpModule} from "@angular/http";
import {ChatService} from "../services/chat-service";
import {DatePipe} from "@angular/common";
import {Storage} from "@ionic/storage";
import {VoipService} from "../services/voip-service";

export function provideStorage() {
  return new Storage(['sqlite', 'websql', 'indexeddb']);
}

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    ContactPickerPage,
    MessagePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    ContactPickerPage,
    MessagePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Storage, useFactory: provideStorage },
    SecureStorage,
    SettingService,
    HttpModule,
    ChatService,
    SettingService,
    DatePipe,
    VoipService
  ]
})
export class AppModule {}
