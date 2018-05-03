import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Observable } from 'rxjs/Observable';
import {Storage} from '@ionic/storage';
import { MovieFavPage } from '../../pages/movie-fav/movie-fav';

@Component({
  selector: 'page-sarcastic',
  templateUrl: 'sarcastic.html',
})
export class MoviePage {
sarcastic:Observable<any>;
myMovieFav: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage, private mp:MoviesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SarcasticPage');
    this.mp.GetMovieData().subscribe(data =>
{
    this.sarcastic = data.movies;
})
  }

updateMovieFav(){
  
this.navCtrl.push(MovieFavPage);
}

ionViewWillEnter(){
this.storage.get("myMovieFav")
.then((data) =>
{
this.myMovieFav = data;
})
.catch((err) => {
alert("Error accesssing Storage")
})
}

horrorMovie(){
this.navCtrl.push(MoviePage);
}

}
