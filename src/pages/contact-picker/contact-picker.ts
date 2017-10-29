import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-contact-picker',
  templateUrl: 'contact-picker.html',
})
export class ContactPickerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController){
  }

  onSubmit(form: NgForm) {
    this.viewCtrl.dismiss({contact: form.value.contact});
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }

}
