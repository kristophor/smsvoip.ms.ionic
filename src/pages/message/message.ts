import {Component, ViewChild} from '@angular/core';
import {Content, NavController, NavParams, Platform} from 'ionic-angular';
import {DatePipe} from "@angular/common"
import {SMS} from "../../model/sms";
import {NgForm} from "@angular/forms";
import {ChatService} from "../../services/chat-service";
import {VoipService} from "../../services/voip-service";
import {platformBrowser} from "@angular/platform-browser";
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  private contact :string;
  private smss: SMS[];
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datepipe: DatePipe, private chatService: ChatService,
              private voipService: VoipService, private plt: Platform) {
    this.contact = this.navParams.data;
    this.chatService.loadChatItems();
    this.chatService.getSMSFromStorage(this.contact).then(
      (data) => {
        if(data == null) this.smss = []
        else
        this.smss = data;
      },
      (error)=>{
        console.log(error);
      }
    );
    console.log(this.contact)
  }

  ionViewWillEnter(): void {
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    let newMsg = new SMS();
    newMsg.message = form.value.message;
    newMsg.date = "Sending...";
    newMsg.type = "0";
    let originalSMSs = this.smss.slice();
    let lastMsg = this.smss[this.smss.length-1];
    let lastDateString = lastMsg.date;
    if(this.plt.is('ios')){
      lastDateString = lastDateString.replace(' ', 'T')
    }
    let lastDate = Date.parse(lastDateString);
    let dividerMsg = new SMS();
    dividerMsg.message = this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');;
    dividerMsg.date = this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');
    dividerMsg.type = "3";
    if(Date.now() - lastDate >= 360000){
      originalSMSs.push(dividerMsg);
      this.smss.push(dividerMsg);
    }
    this.smss.push(newMsg);
    this.scrollToBottom();
    this.voipService.sendMessage(newMsg.message, this.contact).subscribe(
      (res)=>{
        let data = res.json();
        console.log(data);
        this.voipService.getMessage(data.sms, this.contact, "").subscribe(
          (response)=>{
            let data2  = response.json();
            if(data2.status == "success"){
              console.log(data2);
              originalSMSs.push(data2.sms[0]);
              this.smss = originalSMSs;
              this.chatService.saveSMStoStorage(this.contact, this.smss);
              this.scrollToBottom();
            }
          },
          (error)=>{
            console.log(error);
            this.smss = originalSMSs;
          }
        );
      },
      (error)=>{
        console.log(error);
        this.smss = originalSMSs;
      }
    );
    form.reset();
  }

  getAllTodayMsgs(refresher){
    this.voipService.getMessage("", this.contact, "").subscribe(
      (response)=>{
        let data  = response.json();
        if(data.status == "success"){
          console.log(data.sms);
          this.smss = data.sms.reverse();
          let dividerMsg = new SMS();
          dividerMsg.message = this.smss[this.smss.length-1].message;
          dividerMsg.date = this.smss[this.smss.length-1].date;
          dividerMsg.type = "3";
          this.smss.push(dividerMsg);
          this.chatService.saveSMStoStorage(this.contact, this.smss);
          this.scrollToBottom();
        }
        refresher.complete();
      },
      (error)=>{
        console.log(error);
        refresher.complete();
      }
    );
  }
  getMessageAfterLastMessage(refresher){
    let dividerAdded = false;
    let lastMsg = this.smss[this.smss.length-1];

    let lastDateString = lastMsg.date;
    if(this.plt.is('ios')){
      lastDateString = lastDateString.replace(' ', 'T')
    }
    let lastDate = Date.parse(lastDateString);
    this.voipService.getMessage("", this.contact, lastMsg.date).subscribe(
      (response)=>{
        let data  = response.json();
        if(data.status == "success"){
          console.log(data.sms);
          for(let msg of data.sms.reverse()){
            let dateString = msg.date;
            if(this.plt.is('ios')){
              dateString = dateString.replace(' ', 'T')
            }
            let msgDate = Date.parse(dateString);
            console.log("msg date =" +msgDate + " lastDate = " + lastDate);
            if(msgDate >= lastDate && (lastMsg.message != msg.message || lastMsg.type != msg.type)){
              if(!dividerAdded && msgDate - lastDate >= 360000){
                let dividerMsg = new SMS();
                dividerMsg.message = msg.message;
                dividerMsg.date = this.datepipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');
                dividerMsg.type = "3";
                this.smss.push(dividerMsg);
                dividerAdded = true;
              }
              this.smss.push(msg);
            }
          }
          console.log(this.smss);
          this.chatService.saveSMStoStorage(this.contact, this.smss);
          this.scrollToBottom();
        }
        refresher.complete();
      },
      (error)=>{
        console.log(error);
        refresher.complete();
      }
    );
  }
  doRefresh(refresher){
    setTimeout(() => {

      if(this.smss.length==0){
        this.getAllTodayMsgs(refresher);
      }else{
        this.getMessageAfterLastMessage(refresher);
      }

    }, 1000);


  }
}
