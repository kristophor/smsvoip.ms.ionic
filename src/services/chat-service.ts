import {Storage} from "@ionic/storage";
import {Injectable, OnInit} from "@angular/core";
import {DatePipe} from "@angular/common";
import {ChatItem} from "../model/chat-item";
import {SMS} from "../model/sms";
import {SettingService} from "./setting-service";

@Injectable()
export class ChatService implements OnInit{

  private CHATITEM_KEY = "chatItems-";
  private PHONENUMBER_KEY = "phoneNumbers-";
  private phoneNumbers: string[];
  private chatItems: ChatItem[];

  constructor(private storage: Storage, private datepipe: DatePipe, private settingService: SettingService) {
    this.phoneNumbers = [];
    this.chatItems = [];
  }
  ngOnInit() {
    this.phoneNumbers = [];
    this.chatItems = [];
  }

  loadChatItems(){
    if(this.settingService.credential != null && this.settingService.credential.defaultDID != null){
      this.storage.get(this.CHATITEM_KEY+this.settingService.credential.defaultDID).then(
        (data)=>{
          if(data !=null){
            //console.log(data);
            this.chatItems = data;
          }
        },
        (error)=>{
          console.log(error);
        }
      )
      this.storage.get(this.PHONENUMBER_KEY+this.settingService.credential.defaultDID).then(
        (data)=>{
          if(data !=null){
            this.phoneNumbers = data;
          }
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }

  addChatItem(title: string){
    if(this.phoneNumbers.indexOf(title) != -1 ) return;
    this.phoneNumbers.push(title);
    this.chatItems.push(new ChatItem(title, "",  this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss')));
    this.storeChatItems();
    this.storePhoneNumber();
  }

  storeChatItems(){
    this.storage.set(this.CHATITEM_KEY+this.settingService.credential.defaultDID, this.chatItems).then(
      (data) => {
        console.log("chat item stored successfully");
        //console.log(data);
      },
      (error)=> console.log(error)
    )
  }
  storePhoneNumber(){
    this.storage.set(this.PHONENUMBER_KEY+this.settingService.credential.defaultDID, this.phoneNumbers).then(
      (data) => {
        console.log("phone numebr stored successfully");
        //console.log(data);
      },
      (error)=> console.log(error)
    )
  }
  getChatItems(){
    //console.log(this.chatItems);
    return this.chatItems.slice();
  }

  getChatItemsFromStorage(){
    return this.storage.get(this.CHATITEM_KEY+this.settingService.credential.defaultDID);
  }

  saveSMStoStorage(contact: string, smss: SMS[]){
    let index = this.phoneNumbers.indexOf(contact);
    console.log("what is index ? = " + index);
    console.log("what is phonenumbers  ? = " + JSON.stringify(this.phoneNumbers));
    if(index != -1){
      console.log("saving SMS");
      let lastIndexSMS = smss.length-1;
      this.chatItems[index] = new ChatItem(contact, smss[lastIndexSMS].message,smss[lastIndexSMS].date);
      this.storage.set(contact, smss);
      this.storeChatItems();
      this.storePhoneNumber();
    }
  }
  getSMSFromStorage(contact: string){
    return this.storage.get(contact);
  }

  deleteSMSFromStorage(contact: string){
    this.storage.remove(contact);
    for(let chat of this.chatItems){
      if(chat.title == contact){
        this.chatItems.splice(this.chatItems.indexOf(chat),1);
      }
    }
    for(let num of this.phoneNumbers){
      if(num == contact){
        this.phoneNumbers.splice(this.phoneNumbers.indexOf(num), 1);
      }
    }
    this.storePhoneNumber();
    this.storeChatItems();
  }
}
