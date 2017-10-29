import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {SettingService} from "../../services/setting-service";
import {Http} from "@angular/http";
import {Credential} from "../../model/credential";
import {ChatService} from "../../services/chat-service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  private email: string = "";
  private password: string = "";
  private listOfDids: string[] = [];
  private defaultDID: string;

  private credential: Credential = new Credential(this.email, this.password, this.defaultDID, this.listOfDids);

  constructor(public navCtrl: NavController, public navParams: NavParams, private settingService: SettingService,
              private http: Http, private chatServ: ChatService) {
    if (this.settingService.useUnsecuredStorage) {
      this.settingService.getCrendetialUnsecured().then(
        (data) => {
          if (data != null) {
            this.credential = data;
            this.email = this.credential.email;
            this.password = this.credential.password;
            this.listOfDids = this.credential.DIDs;
            this.defaultDID = this.credential.defaultDID;
          }

        }
      );
    } else {
      this.settingService.getCredentialSecured().then(
        (data) => {
          if (data != null) {
            this.credential = JSON.parse(data);
            this.email = this.credential.email;
            this.password = this.credential.password;
            this.listOfDids = this.credential.DIDs;
            this.defaultDID = this.credential.defaultDID;
          }
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    console.log(form);
    this.settingService.refreshDIDs(this.email, this.password).subscribe(
      (data) => {
        console.log(JSON.stringify(data))
        this.listOfDids = [];
        for (let did of data.json().dids) {
          console.log(did);
          if (did.sms_available == 1 && did.sms_enabled == 1){
            this.listOfDids.push(did.did);
          }
        }
        this.credential = new Credential(this.email, this.password, this.defaultDID, this.listOfDids);
        this.settingService.storeCredential(this.credential);
      },
      (error) => console.log(error)
    );
  }

  onSelectDID(event) {
    console.log("event is " + event);
    console.log("default is " + this.defaultDID);
    this.credential.defaultDID = this.defaultDID;
    this.settingService.storeCredential(this.credential);
    this.chatServ.loadChatItems();
  }

}
