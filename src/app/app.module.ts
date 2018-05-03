import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EightballPage } from '../pages/eightball/eightball';
import { MoviePage } from '../pages/sarcastic/sarcastic';
import { GamePage } from '../pages/normal/normal';
import { HttpClientModule } from '@angular/common/http';

import {IonicStorageModule} from'@ionic/storage';
import { GamesProvider } from '../providers/games/games';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EightballPage,
    MoviePage,
    GamePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EightballPage,
    MoviePage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GamesProvider,
   
  ]
})
export class AppModule {}
