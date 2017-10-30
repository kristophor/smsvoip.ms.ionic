import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import {EventEmitter, Injectable} from "@angular/core";
import {Credential} from "../model/credential";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
import {ProxyService} from "./proxy-service";

@Injectable()
export class SettingService {
  public credential: Credential;
  public useUnsecuredStorage: boolean = false;
  public sso: SecureStorageObject;
  public credentialLoaded = new EventEmitter();

  constructor(private storage: SecureStorage, private unsecureStorage: Storage,
              private http: Http) {
  }

  init() {
    this.storage.create("settings").then(
      (sso: SecureStorageObject) => {
        console.log("storage created");
        this.sso = sso;
        this.getCredentialSecured().then(
          (data) => {
            if (data != null) {
              this.credential = JSON.parse(data);
              this.credentialLoaded.next(true);
            }
          },
          (err)=>{
            console.log(err);
          });
      },
      (error) => {
        console.log(error);
        this.useUnsecuredStorage = true;
        this.getCrendetialUnsecured().then(
          (data) => {
            if (data != null) {
              this.credential = data;
              this.credentialLoaded.next(true);
            }
          });
      }
    );
  }

  storeCredential(credential: Credential) {
    this.credential = credential;
    if (this.useUnsecuredStorage) {
      this.unsecureStorage.set("credential", credential);
    } else {
      this.sso.set("credential", JSON.stringify(credential));
    }
  }

  getCredentialSecured() {
    return this.sso.get("credential");
  }

  getCrendetialUnsecured() {
    return this.unsecureStorage.get("credential");
  }

  refreshDIDs(email: string, password: string) {
    return this.http.get(ProxyService.VOIP_REST_URL+"api/v1/rest.php?api_username=" + email + "&api_password=" + password + "&method=getDIDsInfo")
  }
}
