import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {SettingService} from "./setting-service";
import {ProxyService} from "./proxy-service";

@Injectable()
export class VoipService{

  constructor(private http:Http, private settingService: SettingService){
  }
  reinit(){
    if(this.settingService.credential == null || this.settingService.credential.defaultDID == null
      || this.settingService.credential.defaultDID == ""){
      this.settingService.init();
    }
  }
  sendMessage(message:string, destination: string){
    this.reinit();
    return this.http.get(ProxyService.VOIP_REST_URL+"api/v1/rest.php?api_username=" +
      this.settingService.credential.email + "&api_password=" +
      this.settingService.credential.password + "&method=sendSMS"+
      "&did="+this.settingService.credential.defaultDID+
      "&dst="+destination+
      "&message="+message);
  }

  getMessage(smsID:string, contactDID:string, lastDate: string){
    this.reinit();
    return this.http.get(ProxyService.VOIP_REST_URL+"api/v1/rest.php?api_username=" +
    this.settingService.credential.email + "&api_password=" +
    this.settingService.credential.password + "&method=getSMS"+"&did="+this.settingService.credential.defaultDID+
      "&contact="+contactDID+
      (lastDate == "" ? "" : "&from="+lastDate)+
      (smsID == "" ? "" : "&sms="+smsID));
  }
}
