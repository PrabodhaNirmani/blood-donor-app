import { Component } from '@angular/core';
// import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import{Dashboard} from '../pages/dashboard/dashboard';
import {User} from '../providers/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public user:User) {
    this.user.loggedIn().then((isLoggedIn)=>{
      if(isLoggedIn){
        this.rootPage=Dashboard;
      }
      else{
        this.rootPage=HomePage;
      }
    });
    
  }

  changeRoot(root){
    this.rootPage=root;

  }
}

