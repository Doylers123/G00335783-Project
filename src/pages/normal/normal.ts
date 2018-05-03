import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GamesProvider } from '../../providers/games/games';

@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html',
})
export class GamePage {
  normal: Observable<any>;



 constructor(public navCtrl: NavController, public navParams: NavParams,private gp:GamesProvider) {



}
ionViewDidLoad() {
console.log('ionViewDidLoad HomePage');
this.gp.GetGameData().subscribe(data =>
{
    this.normal = data.search;
})
}


}
