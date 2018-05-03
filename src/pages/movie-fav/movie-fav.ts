import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-movie-fav',
  templateUrl: 'movie-fav.html',
})
export class MovieFavPage {
  myMovieFav: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
    console.log("hello");
  }


  saveMovieFav() {
    this.storage.set("myMovieFav", this.myMovieFav);
    this.navCtrl.pop();
  }


  ionViewWillEnter() {
    console.log("hello");


    this.storage.get("myMovieFav")
      .then((data) => {
        this.myMovieFav = data;
      });

  }
}
