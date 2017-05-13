import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";

import {User} from '../providers/user';
import {Blood} from '../providers/blood';
import { AppSettings } from "../providers/app-settings";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { DonationCampaign } from '../pages/donation-campaign/donation-campaign';
import { EmergencyRequest } from '../pages/emergency-request/emergency-request';
import { SearchBlood } from '../pages/search-blood/search-blood';
import { Signup } from "../pages/signup/signup";
import { Dashboard } from "../pages/dashboard/dashboard";
import { AddEmergencyRequest } from "../pages/add-emergency-request/add-emergency-request";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Signup,
    DonationCampaign,
    EmergencyRequest,
    SearchBlood,
    Dashboard,
    AddEmergencyRequest
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Signup,
    DonationCampaign,
    EmergencyRequest,
    SearchBlood,
    Dashboard,
    AddEmergencyRequest
  ],
  providers: [
    StatusBar,
    SplashScreen,
    User,
    Blood,
    AppSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
