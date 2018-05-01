import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SarcasticPage } from '../../pages/sarcastic/sarcastic';
import { NormalPage } from '../../pages/normal/normal';
import {Storage} from'@ionic/storage';


@Component({
  selector: 'page-eightball',
  templateUrl: 'eightball.html',
})
export class EightballPage {

myChoice: string;

  constructor(public navCtrl: NavController, private storage:Storage, public navParams: NavParams) {
  }

saveStatus(){
this.storage.set("myChoice", this.myChoice);
//this.navCtrl.pop();
//this.navCtrl.push(SarcasticPage);
//this.navCtrl.push(NormalPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EightballPage');
  }

ionViewWillEnter(){
this.storage.get("myChoice")
.then((data) =>
{
this.myChoice = data;
})
}
sarcasticPage(){
this.navCtrl.push(SarcasticPage);
}

normalPage(){
this.navCtrl.push(NormalPage);
}
}
