import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MessagesPage } from '../pages/messages/messages';
import {SettingService} from "../services/setting-service";
import {ChatService} from "../services/chat-service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MessagesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private settingService: SettingService, private chatService: ChatService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      settingService.init();
      chatService.loadChatItems();
    });
  }
}
