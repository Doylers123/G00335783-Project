import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviePage } from '../../pages/sarcastic/sarcastic';
import { GamePage } from '../../pages/normal/normal';
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
this.navCtrl.push(GamePage);
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
horrorMovies(){
this.navCtrl.push(MoviePage);
}

horrorGames(){
this.navCtrl.push(GamePage);
}
}
