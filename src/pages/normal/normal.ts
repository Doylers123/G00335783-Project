import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GamesProvider } from '../../providers/games/games';
import { Storage } from '@ionic/storage';
import { GameFavPage } from '../../pages/game-fav/game-fav';

@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html',
})
export class GamePage {
  normal: Observable<any>;
  myGameFav: string;


  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private gp: GamesProvider) {



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.gp.GetGameData().subscribe(data => {
      this.normal = data.search;
    });


  }//


  updateGameFav() {

    this.navCtrl.push(GameFavPage);
  }

  ionViewWillEnter() {
    this.storage.get("myGameFav")
      .then((data) => {
        this.myGameFav = data;
      })
      .catch((err) => {
        alert("Error accesssing Storage")
      })
  }



}
