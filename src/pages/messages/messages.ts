import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ContactPickerPage} from "../contact-picker/contact-picker";
import {MessagePage} from "../message/message";
import {SettingsPage} from "../settings/settings";
import {ChatService} from "../../services/chat-service";
import {SettingService} from "../../services/setting-service";

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  private allChats;
  private loading;
  private subscriber;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private chatService: ChatService,
              private settingServ: SettingService) {
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  ionViewWillEnter(): void {
    if(this.settingServ.credential == null || this.settingServ.credential.defaultDID == null){
      this.settingServ.init();
      this.loading = true;
      this.subscriber = this.settingServ.credentialLoaded.subscribe(
        (data) =>{
          this.loadChats();
          this.loading = false;
        }
      );
    }else{
      this.loadChats();
    }
  }

  loadChats(){
    this.chatService.getChatItemsFromStorage().then(
      data => this.allChats = data,
      error => console.log(error)
    )
  }
  onOpenSettings(){
    this.navCtrl.push(SettingsPage);
  }
  onNewMessage(){
    let contactPickerModal = this.modalCtrl.create(ContactPickerPage);
    contactPickerModal.present();
    contactPickerModal.onDidDismiss(
      data => {
        if (data) {
          this.chatService.addChatItem(data.contact);
          this.allChats = this.chatService.getChatItems();
          this.navCtrl.push(MessagePage, data.contact);
        }
      }
    )
  }

  delete(contact){
    this.chatService.deleteSMSFromStorage(contact);
    for(let chat of this.allChats){
      if(chat.title == contact){
        this.allChats.splice(this.allChats.indexOf(chat),1);
      }
    }
  }
  onOpenChat(contact){
    this.navCtrl.push(MessagePage, contact);
  }

}
