import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the GameFavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-game-fav',
  templateUrl: 'game-fav.html',
})
export class GameFavPage {
  myGameFav: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameFavPage');
  }
  saveGameFav() {
    this.storage.set("myGameFav", this.myGameFav);
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    console.log("hello");
    this.storage.get("myGameFav")
      .then((data) => {
        this.myGameFav = data;
      });

  }
}
